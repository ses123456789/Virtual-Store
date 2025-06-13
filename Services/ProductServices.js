import { faker } from '@faker-js/faker'
import * as Boom from '@hapi/boom';
class ProductsServices{

  constructor(){
    this.products = []
    this.generate()
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
    const newproduct= {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newproduct)
    return newproduct
  }

  async find() {
    return new Promise((resolve,reject) => {
      setTimeout(()=> {
        resolve(this.products)
      },3000)
    })

  }

  async findone(id) {
    const product= this.products.find(item => item.id===id)
    if(!product)
      throw Boom.notFound('Product not found')
     if(product.isBlock)
      throw Boom.conflict('Product is block')
    return product
  }

 async update(id, changes) {
    const index= this.products.findIndex(item => item.id===id)
    if (index === -1){
      throw Boom.notFound('Product not found')
    }
    const product= this.products[index]
    this.products[index]= {
      ...product,
      ...changes
    }
    return this.products[index]
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
