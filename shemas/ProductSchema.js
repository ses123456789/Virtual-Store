import Joi from "joi";

const id= Joi.string().uuid()
const name= Joi.string().min(3)
const price= Joi.number().integer().min(10)
const image = Joi.string().uri();

export const CreateProductSchema= Joi.object({
  name: name.required(),
  price: price.required(),
   image: image.required()
})

export const UpdateProductSchema= Joi.object({
  name: name,
  price: price,
  image: image
})

export const GetProductSchema= Joi.object({
  id: id.required()
})
