import { test } from '@playwright/test';
import { checkHeaderVisibility, checkHeaderLinkValues } from './headerChecks';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.cofimd.com/testimonials');
});

test('TestimonialsHeaderVisibility', async ({ page }) => {
    await checkHeaderVisibility(page);
});

test('TestimonialsHeaderLinkValues', async ({ page }) => {
    await checkHeaderLinkValues(page);
});