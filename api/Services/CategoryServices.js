import * as Boom from '@hapi/boom';
import sequelize from '../../libs/sequelize.js';

class CategoryService {

  constructor(){
  }
  async create(data) {
    const new_Category= await sequelize.models.Category.create(data)
    return new_Category
  }

  async find() {
    const categories= await sequelize.models.Category.findAll()
    return categories
  }

  async findOne(id) {
    const category= await sequelize.models.Category.findByPk(id,{
      include: ["products"]
    })
    return category
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

export default CategoryService;
