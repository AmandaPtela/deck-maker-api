import 'dotenv/config';
import { Options } from 'sequelize';

export const config: Options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "postgres"
};

module.exports = config;

