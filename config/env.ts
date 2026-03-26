import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  baseURL: process.env.BASE_URL!,
  apiBaseURL: process.env.API_BASE_URL!,
  username: process.env.USERNAME!,
  password: process.env.PASSWORD!
};