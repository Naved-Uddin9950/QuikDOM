module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['**/tests/**/*.test.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
