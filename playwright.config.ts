import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run serve',
    url: 'http://localhost:8080',
  },
};

export default config;