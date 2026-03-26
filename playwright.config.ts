import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
 
  reporter: [
    ['html', { open: 'never', outputFolder: 'reports/html' }],
    ['list'],
    ['allure-playwright', {outputFolder: 'reports/allure' }],
  ],

  // Global settings
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
    video: 'retain-on-failure',  // Videos can be viewed in headed browser, but are not necessary for this project to save disk space.
    launchOptions: {
      slowMo: 50, // Slow down actions by 50ms to better observe test execution
    },
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },
  },

  // For this assessment project, only 1 major browser will be used to save time and resources
  projects: [
    {
      name: 'ui_tests',
      testDir: './tests/ui',
      use: {
        baseURL: process.env.BASE_URL!,
        ...devices['Desktop Chrome'],
        //run cmd npx playwright test --project=ui_tests
      },
    },
    {
      name: 'api_tests',
      testDir: './tests/api',
      use: {
        baseURL: process.env.API_BASE_URL!,
        extraHTTPHeaders: {
          'Accept': 'application/json',
          ////run cmd npx playwright test --project=api_tests
        },
      },
    },
  ],
});
