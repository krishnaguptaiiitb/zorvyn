const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
    res.send("API Running 🚀");
});

const testRoutes = require("./routes/testRoutes");

app.use("/api/test", testRoutes);

const recordRoutes = require("./routes/recordRoutes");

app.use("/api/records", recordRoutes);

const summaryRoutes = require("./routes/summaryRoutes");

app.use("/api/summary", summaryRoutes);

module.exports = app;