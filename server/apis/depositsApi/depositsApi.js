const express = require("express");

const depositsApi = (depositsCollection) => {
  const router = express.Router();

  // add a deposit request
  router.post("/", async (req, res) => {
    const depositInfo = req.body;
    depositInfo.status = "pending";
    depositInfo.createdAt = new Date();
    const result = await depositsCollection.insertOne(depositInfo);
    res.send(result);
  });

  router.get("/", async (req, res) => {
    const result = await depositsCollection.find().toArray();
    res.send(result);
  });
  return router;
};
module.exports = depositsApi;
