import { test } from '@playwright/test';
import { checkHeaderVisibility, checkHeaderLinkValues } from './headerChecks';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.cofimd.com/');
});

test('FrontPageHeaderVisibility', async ({ page }) => {
    await checkHeaderVisibility(page);
});

test('FrontPageHeaderLinkValues', async ({ page }) => {
    await checkHeaderLinkValues(page);
});