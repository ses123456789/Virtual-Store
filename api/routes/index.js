import express from "express";
import ProductsRouter from "./ProductsRoutes.js";
import UsersRouter from "./UsersRoutes.js";
import CategoryRouter from "./CategoryRoutes.js";
import CustomerRouter from "./CustomerRoutes.js";
import OrderRouter from "./OrderRoutes.js";

function RouterAPI(app){

  const router = express.Router()
  app.use("/api/v1", router);
  router.use("/products", ProductsRouter);
  router.use("/users", UsersRouter);
  router.use("/categories", CategoryRouter)
  router.use("/customers", CustomerRouter)
  router.use("/order",OrderRouter)
}

export default RouterAPI
