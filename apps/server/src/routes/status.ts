import Router from '@koa/router';

const statusRouter = new Router();

statusRouter.get('/status', (ctx) => {
  ctx.body = {
    status: 'ok',
  };
});

export default statusRouter;
