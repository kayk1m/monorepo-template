module.exports = {
  ...require('@workspace/config/eslint-server'),
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        root: true,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
  ],
};
