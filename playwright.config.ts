import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run serve',
    port: 8080,
    url: 'http://localhost:8080',
    timeout: 120000,
  }
};

export default config;