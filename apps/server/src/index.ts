import { logger } from '@packages/logger';

import app from './app';
import { ENV } from './config/env';

app.listen(ENV.PORT, () => {
  logger.info(`HTTP SERVER LISTENING ON PORT ${ENV.PORT}`);
});
