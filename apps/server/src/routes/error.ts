import Router from '@koa/router';

const errorRouter = new Router();

errorRouter.get('/error', (ctx) => {
  ctx.throw(404, 'Unhandled Error');
});

export default errorRouter;
