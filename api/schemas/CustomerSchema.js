import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone =  Joi.string();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password =  Joi.string();

export const GetCustomerSchema = Joi.object({
  id: id.required(),
});

export const CreateCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })

});

export const UpdateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId
});
