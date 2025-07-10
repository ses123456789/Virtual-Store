import express from "express";
import CategoryService from "../Services/CategoryServices.js";
import { ValidatorHandler } from "../middlewares/ValidatorHandle.js";
import { UpdateCategorySchema, CreateCategorySchema, GetCategorySchema } from "../schemas/CategorySchema.js";

const CategoryRouter = express.Router();
const categoryService = new CategoryService();

CategoryRouter.get('/', async (req, res, next) => {
  try {
    const categories = await categoryService.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

CategoryRouter.get('/:id',
  ValidatorHandler(GetCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await categoryService.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

CategoryRouter.post('/',
  ValidatorHandler(CreateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await categoryService.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

CategoryRouter.patch('/:id',
  ValidatorHandler(GetCategorySchema, 'params'),
  ValidatorHandler(UpdateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await categoryService.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

CategoryRouter.delete('/:id',
  ValidatorHandler(GetCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await categoryService.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

export default CategoryRouter
