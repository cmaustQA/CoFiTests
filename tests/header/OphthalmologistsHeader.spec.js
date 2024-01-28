import { test } from '@playwright/test';
import { checkHeaderVisibility, checkHeaderLinkValues } from './headerChecks';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.cofimd.com/ophthalmologists');
});

test('OphthalmologistsHeaderVisibility', async ({ page }) => {
    await checkHeaderVisibility(page);
});

test('OphthalmologistsHeaderLinkValues', async ({ page }) => {
    await checkHeaderLinkValues(page);
});