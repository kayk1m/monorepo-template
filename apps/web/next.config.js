const withTM = require('next-transpile-modules')(['@workspace/ui']);

module.exports = withTM({
  reactStrictMode: true,
});
