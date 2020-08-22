import { QueryInterface, DataTypes } from 'sequelize';
import { Cafe } from '../models';

/**
 * function that sequelize-cli runs if you want to add this migration to your database
 * */
export async function up(query: QueryInterface) {
  try {
    return query.createTable(Cafe.TableName, {
      id: {
        type: new DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
          type: DataTypes.UUID,
          references:{
            model: 'users',
            key: 'id'
        }
      },
      name: {
          type: new DataTypes.STRING,
          allowNull: false
      },
      description: {
          type: new DataTypes.TEXT,
          allowNull: false
      },
      lat: {
          type: new DataTypes.DECIMAL, 
          allowNull: false
      },
      lng: {
          type: new DataTypes.DECIMAL,
          allowNull: false
      },
      plug_availability: {
          type: new DataTypes.INTEGER,
          allowNull: false
      },
      view: {
          type: new DataTypes.INTEGER,
          allowNull: false
      },
      average_wifi_upload: {
          type: new DataTypes.FLOAT,
          allowNull: false
      },
      average_wifi_download: {
        type: new DataTypes.FLOAT,
        allowNull: false
      },
      average_wifi_ping: {
        type: new DataTypes.FLOAT,
        allowNull: false
      },
      comfort: {
        type: new DataTypes.INTEGER,
        allowNull: false
      },
      food_range_id: {
        type: new DataTypes.INTEGER,
        references:{
            model: 'food_range',
            key:'id'
        },
        allowNull: false
      },
      drink_range_id: {
        type: new DataTypes.INTEGER,
        references:{
            model: 'drink_range',
            key: 'id'
        },
        allowNull: false
      },
      coffee_availability: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
      },
      tea_availability: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      food_availability: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      vegan_availability: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },   
      pet_friendly: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      staff_friendliness: {
          type: DataTypes.INTEGER,
          allowNull: false
      },   
      space_option: {
          type: DataTypes.STRING,
          allowNull: false
      },
      space_size: {
        type: DataTypes.STRING,
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
    return query.dropTable(Cafe.TableName);
  } catch (e) {
    return Promise.reject(e);
  }
}
