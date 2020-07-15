import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { BaseModel } from './base';


export interface ICafe {
    id?: string;
    user_id?: string;
    name?: string;
    description?: string;
    lat?: number;
    lng?: number;
    plug_availability?: number;
    view: number;
    average_wifi_download?: number;
    average_wifi_upload?: number;
    average_wifi_ping?: number; 
    comfort?: number;
    food_range_id?: number;
    drink_range_id?: number; 
    coffee_availability?: boolean;
    tea_availability?: boolean; 
    food_availability?: boolean;
    vegan_availability?: boolean; 
    pet_friendly?: boolean; 
    staff_friendliness?: number; 
    smoking_option_id?: number; 
    space_option?: string; 
    space_size?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export class Cafe extends BaseModel implements ICafe {
    public static readonly ModelName: string = 'Cafe';
    public static readonly ModelNamePlural: string = 'Cafes';
    public static readonly TableName: string = 'Cafes';
    public static readonly DefaultScope: FindOptions = {};
  
    public id!: string;
    public user_id!: string; 
    public name: string; 
    public description : string; 
    public lat: number; 
    public lng: number; 
    public plug_availability: number;
    public view: number; 
    public average_wifi_download: number;
    public average_wifi_upload: number; 
    public average_wifi_ping: number; 
    public comfort: number; 
    public food_range_id: number; 
    public drink_range_id: number; 
    public coffee_availability: boolean;
    public tea_availability: boolean;
    public food_availability: boolean;
    public vegan_availability: boolean; 
    public pet_friendly: boolean; 
    public staff_friendliness: number;
    public smoking_option: "Yes" | "No" | "Designated Area"; 
    public space_option: "Indoor" | "Outdoor" | "Open Area"; 
    public space_size: "10-20" | "20-30" | "30-50" | "50+";
    public createdAt: Date;
    public updatedAt: Date;

    // region Static
    public static prepareInit(sequelize: Sequelize) {
      this.init(
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
          },
          user_id: {
            type: DataTypes.UUID
          },
          name: new DataTypes.STRING(),
          description: new DataTypes.TEXT,
          lat: new DataTypes.DECIMAL,
          lng: new DataTypes.DECIMAL,
          plug_availability: new DataTypes.INTEGER,
          view: new DataTypes.INTEGER,
          average_wifi_download: new DataTypes.FLOAT,
          average_wifi_upload: new DataTypes.FLOAT,
          average_wifi_ping: new DataTypes.FLOAT, 
          comfort: new DataTypes.INTEGER, 
          food_range_id: new DataTypes.INTEGER,
          drink_range_id: new DataTypes.INTEGER,
          coffee_availability: DataTypes.BOOLEAN,
          tea_availability: DataTypes.BOOLEAN, 
          food_availability: DataTypes.BOOLEAN,
          vegan_availability: DataTypes.BOOLEAN,
          pet_friendly: DataTypes.BOOLEAN,
          staff_friendliness: new DataTypes.INTEGER,
        },
        {
          sequelize: sequelize,
          tableName: this.TableName,
          name: {
            singular: this.ModelName,
            plural: this.ModelNamePlural,
          },
          defaultScope: this.DefaultScope,
        },
      );
    }
  
    public static setAssociations(modelCtors: {
      [modelName: string]: ModelCtor<Model>;
    }) {
      // place to set model associations
    }
  
    // endregion
  
    // region Instance Model methods
  
    // endregion
  }
  
  