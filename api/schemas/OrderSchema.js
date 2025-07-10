import Joi from "joi";

const custumerId = Joi.number().integer();
const id = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

export const GetOrderSchema = Joi.object({
  id: id.required(),
});

export const CreateOrderSchema= Joi.object({
  customerId: custumerId.required()
})

export const AddItemSchema= Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required()
})
