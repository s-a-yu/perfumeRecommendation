//require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const authRoutes = require("./routes/auth");
const fragRoutes = require("./routes/frag");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());

// enable CORS
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/frag", fragRoutes);

mongoose.connect(process.env.MONGO_URI, {
    ssl: true,
    tls: true,
    tlsAllowInvalidCertificates: true,
    serverSelectionTimeoutMS: 5000,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log('MongoDB connection error:', err);
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));