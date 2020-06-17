import app from './config/express';
import logger from './config/logger';
import { NODE_ENV, HOST, PORT } from './config/env';

const server = app.listen(PORT, () => {
  logger.info(`🚀 Server running on http://${HOST}:${PORT}/api/v1/ [${NODE_ENV}]`);
});

export default server;
