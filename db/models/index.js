import { User, USERS_SCHEMAS } from "./UserModel.js";
import { Customer, CUSTOMERS_SCHEMAS } from "./CustomerModel.js";
import { Category, CATEGORY_SCHEMA } from "./CategoryModel.js";
import { Product, PRODUCT_SCHEMA } from "./ProductModel.js";
import { Order, ORDER_SCHEMA } from "./OrderModel.js";
import { OrderProduct, ORDER_PRODUCT_SCHEMAS } from "./Order-ProductsModel.js";

function setupModels(sequelize){
  User.init(USERS_SCHEMAS,User.config(sequelize))
  Customer.init(CUSTOMERS_SCHEMAS,Customer.config(sequelize))
  Category.init(CATEGORY_SCHEMA,Category.config(sequelize))
  Product.init(PRODUCT_SCHEMA,Product.config(sequelize))
  Order.init(ORDER_SCHEMA,Order.config(sequelize))
  OrderProduct.init(ORDER_PRODUCT_SCHEMAS, OrderProduct.config(sequelize))

  Customer.assocciate(sequelize.models)
  User.assocciate(sequelize.models)
  Category.assocciate(sequelize.models)
  Product.assocciate(sequelize.models)
  Order.assocciate(sequelize.models)

}

export default setupModels
