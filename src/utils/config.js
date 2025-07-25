import dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};
