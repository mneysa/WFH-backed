import { QueryInterface, DataTypes } from 'sequelize';
import { FoodRange } from '../models';


export async function up(query: QueryInterface) {
    try {
      return query.bulkInsert(FoodRange.TableName, [
            {
                min_range:1, 
                max_range:10,
                createdAt: new Date(),   
                updatedAt: new Date()       
            },
            {
                min_range:10,
                max_range:20,
                createdAt: new Date(),   
                updatedAt: new Date()       
            },
            {
                min_range:21, 
                max_range:50,
                createdAt: new Date(),   
                updatedAt: new Date()                  
            },
            {
                min_range:51, 
                max_range:100,
                createdAt: new Date(),   
                updatedAt: new Date() 
            }
      ])
    }catch(e) {
        return Promise.reject(e);
    }
}

export async function down(query: QueryInterface) {
    try {
      return query.bulkDelete(FoodRange.TableName, null, {})
    } catch (e) {
      return Promise.reject(e);
    }
  }
  