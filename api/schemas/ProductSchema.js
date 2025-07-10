import Joi from "joi";

const id= Joi.number().integer()
const name= Joi.string().min(3)
const price= Joi.number().integer().min(10)
const image = Joi.string().uri()
const description= Joi.string().min(10)
const categoryId= Joi.number().integer()
const limit= Joi.number().integer()
const offset= Joi.number().integer()
const price_min= Joi.number().integer()
const price_max= Joi.number().integer()

export const CreateProductSchema= Joi.object({
  name: name.required(),
  price: price.required(),
   image: image.required(),
   description: description.required(),
   categoryId: categoryId.required()
})

export const UpdateProductSchema= Joi.object({
  name: name,
  price: price,
  image: image,
  categoryId
})

export const GetProductSchema= Joi.object({
  id: id.required()
})

export const QueryProductSchema= Joi.object({
  limit: limit,
  offset: offset,
  price: price,
  price_min: price_min,
  price_max: price_max.when("price_min", {
    is: Joi.number().integer(),
    then: Joi.required()
  })
})
