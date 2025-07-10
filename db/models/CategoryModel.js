import { Model, DataTypes, Sequelize } from "sequelize";


export const CATEGORY_TABLE= "categories"
export const CATEGORY_SCHEMA= {
   id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}

export class Category extends Model{

 static assocciate(models){
    this.hasMany(models.Products, {
      as: "products",
    foreignKey: "categoryId"
    })
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: "Category",
      timestamps: false
    }
  }
}
