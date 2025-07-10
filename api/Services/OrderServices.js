import * as Boom from '@hapi/boom';
import sequelize from '../../libs/sequelize.js';

class OrderServices{
   constructor() {}

  async create(data) {

  const newOrder = await sequelize.models.Order.create(data);
    return newOrder;

  }

  async additem(data){
    const newItem= await sequelize.models.OrderProduct.create(data)
    return newItem
  }

  async find() {
    const response= await sequelize.models.Customer.findAll({
      include: ["user"]
    })

    return response
  }

  async findOne(id) {
    const order= await sequelize.models.Order.findByPk(id,{
       include: [
        {
          association: 'customer',
          include: ['user']
        },
        "items"
      ]
    })

    return order

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

export default OrderServices
