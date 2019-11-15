import { Options } from 'sequelize';

/**
 * this file is here to get a typed environment
 * */
export type EnvironmentType = 'development' | 'production' | 'test';

export interface IConfigApp {
  server: IServerConfiguration;
  database: IDatabaseConfiguration;
}

interface IServerConfiguration {
  protocol?: string;
  hostname?: string;
  port: number;
  apiAddress: string;
}

// make it independent from Options interface in application
interface IDatabaseConfiguration extends Options {}
