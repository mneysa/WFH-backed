import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { BaseModel } from './base';

// defining properties for our User model
export interface IUser {
  id?: string;
  full_name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User extends BaseModel implements IUser {
  public static readonly ModelName: string = 'User';
  public static readonly ModelNamePlural: string = 'Users';
  public static readonly TableName: string = 'users';
  public static readonly DefaultScope: FindOptions = {};

  public id!: string;
  public full_name!: string;
  public email!: string;
  public password!: string;
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
        full_name: new DataTypes.STRING(255),
        email: new DataTypes.STRING(),
        password: new DataTypes.STRING(),
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
