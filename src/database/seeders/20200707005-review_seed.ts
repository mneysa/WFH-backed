import { QueryInterface, DataTypes, UUIDV4 } from 'sequelize';
import { Review } from '../models';



export async function up(query: QueryInterface) {
    try {
      return query.bulkInsert(Review.TableName, [
            {
                id: '1f81a22a-f9c0-41ec-8dd1-1579341bb41a',
                user_id:'f7542428-421e-4521-aca2-338a78d4d5fd', 
                cafe_id: 1,
                rating: 4,
                review: 'Best Cafe ever !',
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
      return query.bulkDelete(Review.TableName, null, {})
    } catch (e) {
      return Promise.reject(e);
    }
  }
  