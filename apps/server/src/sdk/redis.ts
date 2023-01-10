import Redis from 'ioredis';

import { ENV } from '../config/env';

const redis = (() => {
  return new Redis(ENV.REDIS, {
    keyPrefix: 'my-app:',
    enableAutoPipelining: true,
  });
})();

export default redis;
