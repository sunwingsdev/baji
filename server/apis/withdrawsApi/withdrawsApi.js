const express = require("express");
const { ObjectId } = require("mongodb");

const withdrawsApi = (withdrawsCollection) => {
  const router = express.Router();

  // Add a withdraw request
  router.post("/", async (req, res) => {
    const withdrawInfo = req.body;
    withdrawInfo.status = "pending";
    withdrawInfo.createdAt = new Date();
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

  router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const { status } = req.body;
    const updatedDoc = { $set: { status } };
    const result = await withdrawsCollection.updateOne(query, updatedDoc);
    res.send(result);
  });

  return router;
};
module.exports = withdrawsApi;
