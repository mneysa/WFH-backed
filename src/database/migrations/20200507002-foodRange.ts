import { QueryInterface, DataTypes } from 'sequelize';
import { FoodRange } from '../models';

/**
 * function that sequelize-cli runs if you want to add this migration to your database
 * */
export async function up(query: QueryInterface) {
  try {
    return query.createTable(FoodRange.TableName, {
      id: {
        type: new DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      min_range: {
          type: new DataTypes.INTEGER,
          allowNull: false
      },
      max_range: {
          type: new DataTypes.INTEGER,
          allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deletedAt: DataTypes.DATE,
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * function that sequelize-cli runs if you want to remove this migration from your database
 * */
export async function down(query: QueryInterface) {
  try {
    return query.dropTable(FoodRange.TableName);
  } catch (e) {
    return Promise.reject(e);
  }
}
