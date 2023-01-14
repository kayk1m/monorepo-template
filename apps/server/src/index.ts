import { ENV } from '@/config/env';

import app from './app';

app.listen(ENV.PORT, () => {
  console.log(`HTTP SERVER LISTENING ON PORT ${ENV.PORT}`);
});
