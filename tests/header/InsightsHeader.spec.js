import { test } from '@playwright/test';
import { checkHeaderVisibility, checkHeaderLinkValues } from './headerChecks';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.cofimd.com/insights');
});

test('InsightsHeaderVisibility', async ({ page }) => {
    await checkHeaderVisibility(page);
});

test('InsightsHeaderLinkValues', async ({ page }) => {
    await checkHeaderLinkValues(page);
});