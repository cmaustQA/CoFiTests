import { test } from '@playwright/test';
import { checkHeaderVisibility, checkHeaderLinkValues } from './headerChecks';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.cofimd.com/product-updates');
});

test('ProductUpdatesHeaderVisibility', async ({ page }) => {
    await checkHeaderVisibility(page);
});

test('ProductUpdatesHeaderLinkValues', async ({ page }) => {
    await checkHeaderLinkValues(page);
});