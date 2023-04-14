/** @type {import('ts-jest').JestConfigWithTsJest} */
let { compilerOptions } = require('./tsconfig.json');
module.exports = {
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  roots: ['./src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.tsx',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/main.tsx',
    '!**/pages/index.tsx',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/src/setupTests.ts'],
  modulePaths: [compilerOptions.baseUrl],
  verbose: true,
};
