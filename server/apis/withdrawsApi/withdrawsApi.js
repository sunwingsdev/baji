const express = require("express");
const { ObjectId } = require("mongodb");

const withdrawsApi = (withdrawsCollection, usersCollection) => {
  const router = express.Router();

  // Add a withdraw request
  router.post("/", async (req, res) => {
    const withdrawInfo = req.body;
    withdrawInfo.status = "pending";
    withdrawInfo.createdAt = new Date();
    // Decrement the user's balance
    await usersCollection.updateOne(
      { _id: new ObjectId(withdrawInfo.userId) },
      { $inc: { balance: -withdrawInfo.amount } }
    );
    const result = await withdrawsCollection.insertOne(withdrawInfo);
    res.send(result);
  });

  // Get all withdraws with user information
  router.get("/", async (req, res) => {
    try {
      const result = await withdrawsCollection
        .aggregate([
          {
            $addFields: {
              userId: { $toObjectId: "$userId" },
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "_id",
              as: "userInfo",
            },
          },
          {
            $unwind: {
              path: "$userInfo",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $project: {
              "userInfo.password": 0,
            },
          },
        ])
        .toArray();

      res.send(result);
    } catch (error) {
      console.error("Error fetching withdraws:", error);
      res.status(500).send({ error: "Failed to fetch withdraws" });
    }
  });

  router.patch("/status/:id", async (req, res) => {
    const { id } = req.params;

    try {
      // Find the withdraw request by its ID
      const withdraw = await withdrawsCollection.findOne({
        _id: new ObjectId(id),
      });

      if (!withdraw) {
        return res.status(404).send({ error: "Withdraw request not found" });
      }

      // Ensure the withdraw is in a pending state
      if (withdraw.status !== "pending") {
        return res
          .status(400)
          .send({ error: "Withdraw request is not in a pending state" });
      }

      // Update withdraw status to "completed"
      const result = await withdrawsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { status: "completed" } }
      );
      res.send(result);
    } catch (error) {
      console.error("Error updating withdraw status:", error);
      res.status(500).send({ error: "Failed to update withdraw status" });
    }
  });

  return router;
};
module.exports = withdrawsApi;
