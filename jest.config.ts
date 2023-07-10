
import type {Config} from 'jest';

const config: Config = { 
  clearMocks: true,
  testEnvironment: "jsdom",
  ci: true,
  noStackTrace: true,
  moduleNameMapper: {
    "@/(.*)": [
      "<rootDir>/src/$1"
    ],
    "@/mol/(.*)": [
      "<rootDir>/src/molecules/$1"
    ],
    "@/org/(.*)": [
      "<rootDir>/src/organisms/$1"
    ],
    "@/hooks(.*)": [
      "<rootDir>/src/hooks/$1"
    ],
    "@/templates(.*)": [
      "<rootDir>/src/templates/$1"
    ]
  }
};

export default config;
