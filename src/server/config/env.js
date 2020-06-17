import dotenv from 'dotenv-safe';

dotenv.config();

export const { NODE_ENV, HOST, PORT, LOG_LEVEL, MORGAN_FORMAT } = process.env;
