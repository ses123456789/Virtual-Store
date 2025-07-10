import * as Boom from '@hapi/boom';
import sequelize from '../../libs/sequelize.js';

class CustomerService{
   constructor() {}

  async create(data) {

  const new_Costumer= await sequelize.models.Customer.create(data,{
    include: ["user"]
  })
    return new_Costumer
  }

  async find() {
    const response= await sequelize.models.Customer.findAll({
      include: ["user"]
    })

    return response
  }

  async findOne(id) {
    const user= await sequelize.models.Customer.findByPk(id)
    if(!user)
     throw Boom.notFound("Customer not found")
    return user;
  }

  async update(id, changes) {
    const customer= await this.findOne(id)
    const response = await customer.update(changes)
    return response
  }

  async delete(id) {
    const customer= this.findOne(id)
    await customer.destroy()
    return { id };
  }
}

export default CustomerService
