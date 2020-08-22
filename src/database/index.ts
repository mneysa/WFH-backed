import { Sequelize } from 'sequelize';
import {
  modelsLoader,
} from './models';
import {SERVER_CONFIG} from "../config";

class Database {
  public readonly modelCtors = modelsLoader();
  private readonly _sequelize: Sequelize = null;
  constructor() {
    
    this._sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USERNAME,process.env.DATABASE_PASSWORD,
      {
        'host': process.env.DATABASE_HOST,
        'dialect': 'postgres'
      });
    // init every model
    Object.keys(this.modelCtors).forEach(modelName => {
      this.modelCtors[modelName].prepareInit(this._sequelize);
    });

    // call (create) associations for each model
    Object.keys(this.modelCtors).forEach(modelName => {
      this.modelCtors[modelName].setAssociations(this.modelCtors);
    });
  }

  /**
   * connect & authenticate with the database
   * */
  public async prepare() {
    try {
      // return await to catch error if thrown
      return await this._sequelize.authenticate();
      // do not sync otherwise current data in database will be emptied out (Dropping all tables and recreating them)
      // return await this._sequelize.sync();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  /**
   * export the sequelize object
   * */
  public get Sequelize() {
    return this._sequelize;
  }
}

export const getDatabase = async () => {
  const database = new Database();
  await database.prepare();
  return database;
};
