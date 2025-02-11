const { Router } = require("express");
const userRouter = require("./user")
const productRouter = require("./product")
const routes = Router();
routes.use("/users", userRouter)
routes.use("/products",productRouter)

module.exports =routes