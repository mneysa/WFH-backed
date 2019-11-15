import { IConfigApp } from '../config.constraint';

/**
 * RENAME THIS FILE TO development.ts
 * */

export default {
  server: {
    protocol: 'http',
    hostname: 'localhost',
    port: 8080,
    apiAddress: '/v1',
    limits: {
      rate: 1,
      filesPerUpload: 5,
      fileSize: 5 * 1024 * 1024, // 5 MB
    },
  },
  database: {
    host: 'localhost',
    port: 5432, // default postgres port
    username: 'postgres', // default postgres user
    password: '', // default user has no password (default)
    database: 'example',

    dialect: 'postgres',
    logging: false, // logging can be enabled via console.log
    sync: {
      // we are not syncing because this drops complete structure on every new connection and rebuilds it
      force: false,
      logging: false,
      alter: false,
    },
    define: {
      paranoid: true,
      timestamps: true,
      underscored: false,
      freezeTableName: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deletedAt',
      charset: 'utf8',
      schema: 'public',
    },
    timezone: 'UTC',
  },
} as IConfigApp;
