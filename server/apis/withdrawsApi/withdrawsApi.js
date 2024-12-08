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
    const result = await withdrawsCollection.find().toArray();
    res.send(result);
  });

  return router;
};
module.exports = withdrawsApi;
