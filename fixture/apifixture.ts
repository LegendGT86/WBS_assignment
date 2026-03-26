import { test as base } from '@playwright/test';

export const test = base.extend<{
  authToken: string;
}>({
  authToken: async ({ request }, use) => {
    const response = await request.post('/auth', {
      data: {
        username: 'admin',
        password: 'password123'
      }
    });

    const respbody = await response.json();
    await use(respbody.token);
  }
});