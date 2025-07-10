import Joi from "joi";

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5)

export const CreateUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  //role: role.required()
});

export const UpdateUserSchema = Joi.object({
  email: email,
  role: role,
});

export const GetUserSchema = Joi.object({
  id: id.required(),
});

