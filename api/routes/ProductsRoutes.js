import express from "express";
import ProductsServices from "../Services/ProductServices.js";
import { ValidatorHandler } from "../middlewares/ValidatorHandle.js";
import { CreateProductSchema, UpdateProductSchema, GetProductSchema, QueryProductSchema } from "../schemas/ProductSchema.js";

const ProductsRouter = express.Router()
const productService = new ProductsServices();

ProductsRouter.get("/",ValidatorHandler(QueryProductSchema, "query"),async (req,res,next)=>{
   try {
      const products = await productService.find(req.query);
      res.json(products);
    } catch (error) {
      next(error);
    }
})

ProductsRouter.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
});

ProductsRouter.get("/:id",ValidatorHandler(GetProductSchema, "params"), async (req,res,next) =>{
try {
   const {id} = req.params
const product= await productService.findone(id)
res.json(product)
} catch(error){
  next(error)
}
})

ProductsRouter.post('/',ValidatorHandler(CreateProductSchema, "body"), async (req, res) => {
  const body = req.body;
  const newproduct = await productService.create(body)
  res.status(201).json(newproduct);
});

ProductsRouter.patch('/:id',
  ValidatorHandler(GetProductSchema, "params"),
  ValidatorHandler(UpdateProductSchema, "body"),
  async (req, res,next) => {
try {
    const {id} = req.params
  const body = req.body;
  const product= await productService.update(id, body)
  res.json(product);
} catch(error){
next(error)
}
});

ProductsRouter.delete('/:id', async (req, res) => {
  const {id} = req.params
  const product= await productService.delete(id)
  res.json(product);
});

export default ProductsRouter
