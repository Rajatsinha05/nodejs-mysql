const express = require("express");
require("dotenv").config()
const cors = require("cors");
const db = require("./config/db");
// (async () => {
//   try {
//     await db.authenticate();
//     console.log("Authenticated successfully");
//     await db.sync();
//     console.log("Sync successful");
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//     process.exit(1); // Exit the process with a failure code if needed
//   }
// })();

// const userRouter=require("./routes/user")
const appRoutes = require("./routes/index");
require("dotenv").config();
const app = express();
app.use(express.json());
// app.use("/api/v1/users",userRouter)
app.use(cors());
// app.use("/api/v1", appRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the node server");
});
// listen
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
