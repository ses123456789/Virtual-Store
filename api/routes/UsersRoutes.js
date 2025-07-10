import express from "express";
import UserService from "../Services/UserService.js";
import { ValidatorHandler } from "../middlewares/ValidatorHandle.js";
import { UpdateUserSchema, CreateUserSchema, GetUserSchema } from "../schemas/UsersSchema.js";


const UsersRouter = express.Router()
const Userservice = new UserService();

UsersRouter .get('/', async (req, res, next) => {
  try {
    const categories = await Userservice.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

UsersRouter .get('/:id',
 ValidatorHandler(GetUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await Userservice.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

UsersRouter .post('/',
  ValidatorHandler(CreateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await Userservice.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

UsersRouter .patch('/:id',
  ValidatorHandler(GetUserSchema, 'params'),
  ValidatorHandler(UpdateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await Userservice.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

UsersRouter .delete('/:id',
  ValidatorHandler(GetUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await Userservice.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

export default UsersRouter
