import { test } from '@playwright/test';
import { checkHeaderVisibility, checkHeaderLinkValues } from './headerChecks';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.cofimd.com/careers');
});

test('CareersHeaderVisibility', async ({ page }) => {
    await checkHeaderVisibility(page);
});

test('CareersHeaderLinkValues', async ({ page }) => {
    await checkHeaderLinkValues(page);
});