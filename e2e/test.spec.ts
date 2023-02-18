import { test, expect } from '@playwright/test';

test('check rendering blog', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  const blog = await page.$('.v-card');
  expect(await blog.$eval('.v-card__title', node => node.innerText)).toEqual('blog');
});