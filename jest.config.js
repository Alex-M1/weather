module.exports = {
  collectCoverage: true,
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
  ],
  globals: {
    window: true,
  },
  collectCoverageFrom: ['**/*.jsx', '**/*.js', '**/*.ts', '**/*.tsx'],
  moduleDirectories: ['node_modules', '.', 'src'],
  testMatch: [
    '**/*.(test|spec).(js)',
    '**/*.(test|spec).(jsx)',
    '**/*.(test|spec).(ts)',
    '**/*.(test|spec).(tsx)',
  ],
  coverageReporters: [
    'json',
    'lcov',
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
  coveragePathIgnorePatterns: [
    '/server/',
    '/node_modules/',
    '/public/',
    '/dist/',
    '/coverage/',
    'jest.config.js',
    'package.json',
    'webpack.config.js',
    '/src/index.tsx',
    '/src/i18n.ts',
    '/src/__tests__',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^common/(.*)$': '<rootDir>/src/components/_common_/$1',
    '^tests/(.*)$': '<rootDir>/__tests__/$1',
  },
  testEnvironment: 'jsdom',
  resetModules: true,
};
