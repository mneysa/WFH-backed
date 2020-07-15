import { QueryInterface, DataTypes, UUIDV4 } from 'sequelize';
import { Cafe } from '../models';



export async function up(query: QueryInterface) {
    try {
      return query.bulkInsert(Cafe.TableName, [
            {
                user_id: '1f81a22a-f9c0-41ec-8dd1-1579341bb40a',
                name: 'wasabi cafe',
                description : 'Japanese cafe in Pererenan area',
                lat: -8.6472214,
                lng: 115.1224454,
                plug_availability: 4, 
                view: 2, 
                average_wifi_upload: 39.0, 
                average_wifi_download: 13.49,
                average_wifi_ping: 12.14,
                comfort: 3,
                food_range_id: 1,
                drink_range_id: 1, 
                coffee_availability: true, 
                tea_availability: true, 
                food_availability: true, 
                vegan_friendly: true, 
                pet_friendly: true, 
                staff_friendliness: 4, 
                space_option: "Open Area",
                space_size: "20-30",
                createdAt: new Date(),   
                updatedAt: new Date()       

            },
            {
                user_id: '1f81a22a-f9c0-41ec-8dd1-1579341bb40a',
                name: 'wasabi cafe 2',
                description : 'Japanese cafe in Pererenan area',
                lat: -8.6472214,
                lng: 115.1224454,
                plug_availability: 4, 
                view: 2, 
                average_wifi_upload: 39.0, 
                average_wifi_download: 13.49,
                average_wifi_ping: 12.14,
                comfort: 3,
                food_range_id: 1,
                drink_range_id: 1, 
                coffee_availability: true, 
                tea_availability: true, 
                food_availability: true, 
                vegan_friendly: true, 
                pet_friendly: true, 
                staff_friendliness: 4, 
                space_option: "Open Area",
                space_size: "20-30",
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
      return query.bulkDelete(Cafe.TableName, null, {})
    } catch (e) {
      return Promise.reject(e);
    }
  }
  