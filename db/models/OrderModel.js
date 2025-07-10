import { Model, DataTypes, Sequelize } from "sequelize";
import { CUSTOMERS_TABLE } from "./CustomerModel.js";

export const ORDER_TABLE= "order"
export const ORDER_SCHEMA= {
   id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customerId: {
     field: 'customer_id',
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: CUSTOMERS_TABLE ,
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  total: {
    type: DataTypes.VIRTUAL,
    get(){
      if(this.items.length >0){
        return this.items.reduce((total,item) =>{
          return total + (item.price* item.OrderProduct.amount)
        },0)
      }
    }
  }
}

export class Order extends Model{

 static assocciate(models){
    this.belongsTo(models.Customer, {as: "customer"})
    this.belongsToMany(models.Products, {
      as: "items",
      through: models.OrderProduct,
      foreignKey: "orderId",
      otherKey: "productId"
    })
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: ORDER_TABLE,
      modelName: "Order",
      timestamps: false
    }
  }
}
