const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const path = require("path");
const { MongoClient, ServerApiVersion } = require("mongodb");

// import api modules

const usersApi = require("./apis/usersApi/usersApi");
const depositsApi = require("./apis/depositsApi/depositsApi");
const withdrawsApi = require("./apis/withdrawsApi/withdrawsApi");

const corsConfig = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://comokbaji.com",
    "http://comokbaji.com",
    "www.comokbaji.com",
    "comokbaji.com",
    "https://moneyeran365.com",
    "http://moneyeran365.com",
    "www.moneyeran365.com",
    "moneyeran365.com",
    "https://1xkhela.com",
    "http://1xkhela.com",
    "www.1xkhela.com",
    "1xkhela.com",
    "*",
  ],
  credentials: true,
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
};

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// middlewares
app.use(cors(corsConfig));
app.options("", cors(corsConfig));
app.use(express.json());

const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //  collection starts here-----
    const usersCollection = client.db("baji").collection("users");
    const depositsCollection = client.db("baji").collection("deposits");
    const withdrawsCollection = client.db("baji").collection("withdraws");
    // api start here-------
    app.use("/users", usersApi(usersCollection));
    app.use("/deposits", depositsApi(depositsCollection));
    app.use("/withdraws", withdrawsApi(withdrawsCollection));

    // api ends here--------

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!!!✅");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// basic setup
app.get("/", (req, res) => {
  res.send("Server is Running.");
});

app.listen(port, () => {
  console.log(`Server is Running on PORT:🆗 ${port}`);
});
