module.exports = {
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '^@components$': '<rootDir>/src/components',
        '^@pages$': '<rootDir>/src/pages',
        '^@contexts$': '<rootDir>/src/contexts',
        '^@lib$': '<rootDir>/src/lib',
        '^@hooks$': '<rootDir>/src/hooks',
    },
    transform: {
        '^.+[jt]sx?$': [
            'esbuild-jest',
            {
                sourcemap: true,
                loaders: {
                    '.test.js': 'jsx',
                },
            },
        ],
    },
    testPathIgnorePatterns: ['.spec.*'],
    verbose: true,
    extensionsToTreatAsEsm: ['.jsx', '.tsx', '.ts'],
    testEnvironment: 'jsdom',
};
