import { test } from '@playwright/test';
import { checkHeaderVisibility, checkHeaderLinkValues } from './headerChecks';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.cofimd.com/contact-cofi');
});

test('RequestDemoHeaderVisibility', async ({ page }) => {
    await checkHeaderVisibility(page);
});

test('RequestDemoHeaderLinkValues', async ({ page }) => {
    await checkHeaderLinkValues(page);
});