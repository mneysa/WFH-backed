import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { BaseModel } from './base';

// defining properties for our User model
export interface IDrinkRange {
  id?: string;
  min_range?:number;
  max_range?:number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class DrinkRange extends BaseModel implements IDrinkRange {
  public static readonly ModelName: string = 'DrinkRange';
  public static readonly ModelNamePlural: string = 'DrinkRanges';
  public static readonly TableName: string = 'drink_range';
  public static readonly DefaultScope: FindOptions = {};

  public id!: string;
  public min_range:number;
  public max_range:number;
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
        min_range: new DataTypes.MEDIUMINT,
        max_range: new DataTypes.MEDIUMINT 
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
