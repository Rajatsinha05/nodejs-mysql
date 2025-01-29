const { Router } = require("express");
const userController = require("../controller/user");

const routes = Router();
routes.get("/", userController.getUser);
// routes.post("/create", userController.createUser);
// routes.get("/:userId", userController.getUserById)
// routes.delete("/:userId", userController.deleteUser)
// routes.patch("/:userId", userController.updateUser);
routes.post("/signup", userController.createUser);
routes.post("/login", userController.loginUser);
module.exports = routes;
