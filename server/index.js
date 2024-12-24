const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const path = require("path");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { upload, deleteFile } = require("./utils"); // Import from utils.js

// import API modules
const usersApi = require("./apis/usersApi/usersApi");
const depositsApi = require("./apis/depositsApi/depositsApi");
const withdrawsApi = require("./apis/withdrawsApi/withdrawsApi");
const homeControlApi = require("./apis/homeControlApi/homeControlApi");

const port = process.env.PORT || 5000;

// CORS configuration
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
    "https://trickbaz.com",
    "http://trickbaz.com",
    "www.trickbaz.com",
    "trickbaz.com",
    "https://baji.oracletechnology.net",
    "http://baji.oracletechnology.net",
    "www.baji.oracletechnology.net",
    "baji.oracletechnology.net",
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

// MongoDB URI and client setup
const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Routes for image upload and delete
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.status(200).json({
    message: "File uploaded successfully",
    filePath: `/uploads/images/${req.file.filename}`,
  });
});

app.delete("/delete", async (req, res) => {
  const { filePath } = req.body;

  if (!filePath) {
    return res.status(400).json({ error: "File path not provided" });
  }

  try {
    await deleteFile(filePath);
    res.status(200).json({ message: "File deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// MongoDB connection and API setup
async function run() {
  try {
    await client.connect();

    // Collections
    const usersCollection = client.db("baji").collection("users");
    const depositsCollection = client.db("baji").collection("deposits");
    const withdrawsCollection = client.db("baji").collection("withdraws");
    const homeControlCollection = client.db("baji").collection("homeControls");

    // API routes
    app.use("/users", usersApi(usersCollection));
    app.use("/deposits", depositsApi(depositsCollection, usersCollection));
    app.use("/withdraws", withdrawsApi(withdrawsCollection));
    app.use("/home-controls", homeControlApi(homeControlCollection));

    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!!!✅");
  } finally {
    // Leave client open for now (close manually if needed)
  }
}
run().catch(console.dir);

// Basic route
app.get("/", (req, res) => {
  res.send("Server is Running.");
});

app.listen(port, () => {
  console.log(`Server is Running on PORT:🆗 ${port}`);
});
