const express = require("express");
const { ObjectId } = require("mongodb");

const depositsApi = (depositsCollection) => {
  const router = express.Router();

  // Add a deposit request
  router.post("/", async (req, res) => {
    const depositInfo = req.body;
    depositInfo.status = "pending";
    depositInfo.createdAt = new Date();
    const result = await depositsCollection.insertOne(depositInfo);
    res.send(result);
  });

  router.get("/", async (req, res) => {
    try {
      const result = await depositsCollection
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
      console.error("Error fetching deposits:", error);
      res.status(500).send({ error: "Failed to fetch deposits" });
    }
  });

  router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const { status } = req.body;
    const updatedDoc = { $set: { status } };
    const result = await depositsCollection.updateOne(query, updatedDoc);
    res.send(result);
  });

  return router;
};

module.exports = depositsApi;
