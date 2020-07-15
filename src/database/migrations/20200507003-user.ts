import { QueryInterface, DataTypes } from 'sequelize';
import { User } from '../models';

/**
 * function that sequelize-cli runs if you want to add this migration to your database
 * */
export async function up(query: QueryInterface) {
  try {
    return query.createTable(User.TableName, {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      full_name: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      email: {
        type: new DataTypes.STRING(),
        allowNull: false,
        unique: true
      },
      password: {
        type: new DataTypes.STRING(),
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
    return query.dropTable(User.TableName);
  } catch (e) {
    return Promise.reject(e);
  }
}
