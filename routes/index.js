import express from "express";
import ProductsRouter from "./ProductsRoutes.js";
import UsersRouter from "./UsersRoutes.js";
import CategoriesRouter from "./CategoryRoutes.js";

function RouterAPI(app){

  const router = express.Router()
  app.use("/api/v1", router);
  router.use("/products", ProductsRouter);
  router.use("/users", UsersRouter);
  router.use("/categories", CategoriesRouter)
}

export default RouterAPI
