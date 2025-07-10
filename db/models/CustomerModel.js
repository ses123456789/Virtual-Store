import { Model, DataTypes, Sequelize } from "sequelize";
import { USERS_TABLE } from "./UserModel.js";

export const CUSTOMERS_TABLE= "customers"
export const CUSTOMERS_SCHEMAS={
   id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USERS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class Customer extends Model{
  static assocciate(models){
    this.belongsTo(models.User, {as:"user"})
    this.hasMany(models.Order, {
      as: "orders",
      foreignKey: "customerId"
    })
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: CUSTOMERS_TABLE,
      modelName: "Customer",
      timestamps: false

    }
  }
}
