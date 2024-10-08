/** @type {import('jest').Config} */
const config = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  collectCoverageFrom: ['**/src/**/*.js'],

  // Config mongodb em memória
  preset: '@shelf/jest-mongodb',

  watchPathIgnorePatterns: ['globalConfig']

}

module.exports = config
