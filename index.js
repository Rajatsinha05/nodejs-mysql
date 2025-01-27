const express = require("express");
const db = require("./config/db");
const routes = require("./routes/user");
// const userRouter=require("./routes/user")

require("dotenv").config();
const app = express();
app.use(express.json());
// app.use("/api/v1/users",userRouter)
// app.use("/",routes)
(async () => {
    try {
      await db.authenticate();
      console.log("Authenticated successfully");
      await db.sync();
      console.log("Sync successful");
    } catch (error) {
      console.error("An error occurred:", error.message);
      process.exit(1); // Exit the process with a failure code if needed
    }
  })();
  

// listen
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
