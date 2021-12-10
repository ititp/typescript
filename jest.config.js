module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    // "preset": "@shelf/jest-mongodb",
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    // "globalSetup": "<rootDir>/src/test/setup.ts",
    "testEnvironment": "node",
    // "setupFiles": ["<rootDir>/src/test/setup.ts"],

    moduleNameMapper: {
        "^modules/(.*)$": "<rootDir>/src/modules/$1"
    },
    "globals": {
        "NODE_ENV": "test"
    }
};
