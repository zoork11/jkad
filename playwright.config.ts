import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run serve',
    url: 'http://localhost:8080',
    timeout: 120000,
  }
};

export default config;