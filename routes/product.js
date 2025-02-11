const productController = require("../controller/product");
const { Router } = require("express");
const routes = Router();
routes.post("/",productController.create)
routes.get("/",productController.getAll)
module.exports = routes;
