require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();
const cors = require("cors");
app.use(cors());

app.use(express.json());

 

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/leaderboard", require("./routes/leaderboardRoutes"));
app.use("/api/organize-event", require("./routes/organizeRoutes"));
app.use("/api/certificates", require("./routes/certificateRoutes")); // ✅ Added Certificate API

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
