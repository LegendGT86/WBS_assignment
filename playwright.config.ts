import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config({ path: './utils/.env' });

const BASE_URL = process.env.BASE_URL as string;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
 
  reporter: [
    ['html', { open: 'never', outputFolder: 'reports/html' }],
    ['list'],
    ['allure-playwright', {outputFolder: 'reports/allure' }],
  ],

  // Global settings for all tests
  use: {
    baseURL: BASE_URL,
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
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],


});
