import app from './config/express';
import logger from './config/logger';
import { NODE_ENV, SERVER_HOST, SERVER_PORT } from './config/env';

const server = app.listen(SERVER_PORT, () => {
  logger.info(
    `🚀 Server running on http://${SERVER_HOST}:${SERVER_PORT}/api/v1/ [${NODE_ENV}]`
  );
});

export default server;
