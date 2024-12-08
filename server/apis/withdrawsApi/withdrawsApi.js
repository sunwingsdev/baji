const express = require("express");

const withdrawsApi = (withdrawsCollection) => {
  const router = express.Router();

  // add a deposit request
  router.post("/", async (req, res) => {
    const withdrawInfo = req.body;
    withdrawInfo.status = "pending";
    withdrawInfo.createdAt = new Date();
    const result = await withdrawsCollection.insertOne(withdrawInfo);
    res.send(result);
  });

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
    } catch (error) {
      console.error("Error fetching withdraws:", error);
      res.status(500).send({ error: "Failed to fetch withdraws" });
    }
  });

  return router;
};
module.exports = withdrawsApi;
