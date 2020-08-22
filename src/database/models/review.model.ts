import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { BaseModel } from './base';

// defining properties for our User model
export interface IReview {
  id?: string;
  user_id?: string; 
  cafe_id?: string;
  rating?: number; 
  review?: string;
  createdAt?: Date;
  updatedAt?: Date;

}

export class Review extends BaseModel implements IReview {
  public static readonly ModelName: string = 'Review';
  public static readonly ModelNamePlural: string = 'Reviews';
  public static readonly TableName: string = 'reviews';
  public static readonly DefaultScope: FindOptions = {};

  public id!: string;
  public user_id: string; 
  public cafe_id: string; 
  public rating: number; 
  public review: string; 
  public createdAt: Date;
  public updatedAt: Date;

  // region Static
  public static prepareInit(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        user_id: {
            type: DataTypes.UUID,
        },
        cafe_id: {
            type: DataTypes.UUID,
        },
        rating: new DataTypes.INTEGER,
        review: new DataTypes.TEXT
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
