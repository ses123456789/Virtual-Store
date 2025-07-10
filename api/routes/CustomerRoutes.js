import express from "express";
import CustomerService from "../Services/CustomerService.js";
import { ValidatorHandler } from "../middlewares/ValidatorHandle.js";
import { GetCustomerSchema,UpdateCustomerSchema,CreateCustomerSchema } from "../schemas/CustomerSchema.js";

const CustomerRouter= express.Router()
const Customerservice= new CustomerService()

CustomerRouter .get('/', async (req, res, next) => {
  try {
    const categories = await Customerservice.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

CustomerRouter.get('/:id',
 ValidatorHandler(GetCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await Customerservice.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

CustomerRouter .post('/',
  ValidatorHandler(CreateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await Customerservice.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

CustomerRouter .patch('/:id',
  ValidatorHandler(GetCustomerSchema, 'params'),
  ValidatorHandler(UpdateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await Customerservice.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

CustomerRouter .delete('/:id',
  ValidatorHandler(GetCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await Customerservice.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

export default CustomerRouter
