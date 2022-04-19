import Router from '@koa/router';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import { redis } from '../sdk';

const rateLimiter = new RateLimiterRedis({
  storeClient: redis,
  points: 5,
  duration: 30,
  keyPrefix: 'rlflx:status',
});

const statusRouter = new Router();

statusRouter.get('/status', async (ctx) => {
  await rateLimiter.consume(ctx.request.ip);

  ctx.body = {
    status: 'ok',
  };
});

export default statusRouter;
