import { test } from '@playwright/test';
import { checkHeaderVisibility, checkHeaderLinkValues } from './headerChecks';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.cofimd.com/company');
});

test('AboutUsHeaderVisibility', async ({ page }) => {
    await checkHeaderVisibility(page);
});

test('AboutUsHeaderLinkValues', async ({ page }) => {
    await checkHeaderLinkValues(page);
});