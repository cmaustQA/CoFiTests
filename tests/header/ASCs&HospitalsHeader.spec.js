import { test } from '@playwright/test';
import { checkHeaderVisibility, checkHeaderLinkValues } from './headerChecks';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.cofimd.com/ascs-and-hospitals');
});

test('ASCs&HospitalsHeaderVisibility', async ({ page }) => {
    await checkHeaderVisibility(page);
});

test('ASCs&HospitalsHeaderLinkValues', async ({ page }) => {
    await checkHeaderLinkValues(page);
});