import { faker } from '@faker-js/faker'
import * as Boom from '@hapi/boom';
import pool from '../../libs/postgresPool.js';
import sequelize from '../../libs/sequelize.js';
import { Op } from 'sequelize';

class ProductsServices{

  constructor(){

  }

  async generate(){
      const limit=  100
  for (let i=0; i<limit; i++){
    this.products.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.url(),
      isBlock: faker.datatype.boolean()
    } )
  }
 }

  async create(data) {
    const newproduct= await sequelize.models.Products.create(data);
    return newproduct
  }

  async find(query) {
  const options= {
    include: "category",
    where: {}
  }
  const {limit, offset, price, price_min, price_max}= query
  if(limit && offset){
    options.limit= limit
    options.offset= offset
  }
  if(price){
    options.where.price = price
  }
  if(price_min && price_max){
    options.where.price= {
      [Op.gte]: price_min,
      [Op.lte]: price_max
    }
  }
    const products = await sequelize.models.Products.findAll(options);
  return products

  }

  async findone(id) {
     const product= await sequelize.models.Products.findByPk(id)
    if(!product)
     throw Boom.notFound("Product not found")
    return product;
  }

 async update(id, changes) {
        const product= await sequelize.models.Products.findByPk(id)
    if(!product)
     throw Boom.notFound("Product not found")
     return await product.update(changes)
}

  async delete(id){
      const index= this.products.findIndex(item => item.id===id)
    if (index === -1){
      throw Boom.notFound('Product not found')
    }
    this.products.splice(index, 1)
    return {id}
  }
}

export default ProductsServices
