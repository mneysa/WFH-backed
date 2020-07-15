import { QueryInterface, DataTypes, UUIDV4 } from 'sequelize';
import { User } from '../models';



export async function up(query: QueryInterface) {
    try {
      return query.bulkInsert(User.TableName, [
            {
                id: '1f81a22a-f9c0-41ec-8dd1-1579341bb40a',
                full_name: "Admin",
                email: "admin@test.com",
                password: "testing",
                createdAt: new Date(),   
                updatedAt: new Date()       
            },
            {
                id: 'f7542428-421e-4521-aca2-338a78d4d5fd',
                full_name: "Reviewer",
                email: "reviewer@test.com",
                password: "testing",
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
      return query.bulkDelete(User.TableName, null, {})
    } catch (e) {
      return Promise.reject(e);
    }
  }
  