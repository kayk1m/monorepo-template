import logger from 'koa-pino-logger';

export const withLogger = logger;

export default logger().logger;
