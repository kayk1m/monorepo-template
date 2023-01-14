import cors from '@koa/cors';
import Koa from 'koa';
import helmet from 'koa-helmet';

import errorRouter from '@/routes/error';
import statusRouter from '@/routes/status';

const app = new Koa();

app.use(helmet());
app.use(cors());

app.use(statusRouter.routes());
app.use(errorRouter.routes());

export default app;
