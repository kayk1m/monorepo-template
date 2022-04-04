module.exports = {
  ...require('@workspace/config/eslint-next'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
