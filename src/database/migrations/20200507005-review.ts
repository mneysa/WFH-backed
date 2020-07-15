import { QueryInterface, DataTypes } from 'sequelize';
import { Review } from '../models';

/**
 * function that sequelize-cli runs if you want to add this migration to your database
 * */
export async function up(query: QueryInterface) {
  try {
    return query.createTable(Review.TableName, {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: {
          type: DataTypes.UUID,
          references:{
            model: 'Users',
            key: 'id'
          },
          allowNull: false
      },
      cafe_id: {
          type: DataTypes.INTEGER,
          references:{
            model: 'Cafes',
            key: 'id'
        },
        allowNull: false
      },
      rating: {
          type: new DataTypes.INTEGER,
          allowNull: true
      },
      review: {
          type: new DataTypes.TEXT,
          allowNull: true
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
    return query.dropTable(Review.TableName);
  } catch (e) {
    return Promise.reject(e);
  }
}
