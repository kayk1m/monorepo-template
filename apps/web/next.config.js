/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  optimizeFonts: true,

  httpAgentOptions: {
    /** @link https://nextjs.org/blog/next-11-1#builds--data-fetching  */
    keepAlive: true,
  },

  /** @link https://nextjs.org/docs/api-reference/next.config.js/disabling-x-powered-by */
  poweredByHeader: false,

  experimental: {
    /**
     * Prefer loading of ES Modules over CommonJS
     *
     * @link https://nextjs.org/blog/next-11-1#es-modules-support
     * @link https://github.com/vercel/next.js/discussions/27876
     */
    esmExternals: true,
    /**
     * Experimental monorepo support
     *
     * @link https://github.com/vercel/next.js/pull/22867
     * @link https://github.com/vercel/next.js/discussions/26420
     */
    externalDir: true,
  },
};

module.exports = nextConfig;
