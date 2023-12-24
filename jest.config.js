module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/styleMock.js',
    },
  };