import { Model, DataTypes, Sequelize } from "sequelize";

export const USERS_TABLE= "users"
export const USERS_SCHEMAS= {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "customer"
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: 'created_at'
  },
}

export class User extends Model{
  static assocciate(models){
    this.hasOne(models.Customer, {
      as:"customer",
    foreignKey:"user_id"
    })
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: USERS_TABLE,
      modelName: "User",
      timestamps: false
    }
  }
}

