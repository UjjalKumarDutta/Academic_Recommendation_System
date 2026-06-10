const express = require("express");
const cors = require("cors");

const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Academic Recommendation API Running...");
});

app.get("/test", (req, res) => {
  res.send("Test Route Working");
});

app.use("/api", recommendationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});