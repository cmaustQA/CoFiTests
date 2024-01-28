import {expect} from "@playwright/test";

async function checkHeaderVisibility(page) {
    await expect(page.getByRole('link', { name: 'Publish your designed things.' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Ophthalmologists', exact: true })).toBeVisible();
    await expect(page.locator('#home-header2').getByRole('link', { name: 'Optometrists' })).toBeVisible();
    await expect(page.locator('#home-header2').getByRole('link', { name: 'ASCs & Hospitals' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Company' })).toBeVisible();
    await page.getByRole('button', { name: 'Company' }).click();
    await expect(page.getByRole('menuitem', { name: 'Careers' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'About Us' })).toBeVisible();
    await page.getByRole('button', { name: 'Resources' }).click();
    await expect(page.getByRole('menuitem', { name: 'Insights' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Testimonials' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Product Updates' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log In' })).toBeVisible();
    await expect(page.locator('#home-header2').getByRole('link', { name: 'REQUEST DEMO' })).toBeVisible();
}

async function checkHeaderLinkValues(page) {
    await expect(page.getByRole('link', { name: 'Publish your designed things.' })).toHaveAttribute('href', '/');
    await expect(page.getByRole('link', { name: 'Ophthalmologists', exact: true })).toHaveAttribute('href', '/ophthalmologists');
    await expect(page.locator('#home-header2').getByRole('link', { name: 'Optometrists' })).toHaveAttribute('href', '/optometrists');
    await expect(page.locator('#home-header2').getByRole('link', { name: 'ASCs & Hospitals' })).toHaveAttribute('href', '/ascs-and-hospitals');
    await expect(page.getByRole('button', { name: 'Company' })).toHaveAttribute('target', '_self');
    await page.getByRole('button', { name: 'Company' }).click();
    await expect(page.getByRole('menuitem', { name: 'Careers' })).toHaveAttribute('href', '/careers');
    await expect(page.getByRole('menuitem', { name: 'About Us' })).toHaveAttribute('href', '/company');
    await expect(page.getByRole('button', { name: 'Resources' })).toHaveAttribute('target', '_self');
    await page.getByRole('button', { name: 'Resources' }).click();
    await expect(page.getByRole('menuitem', { name: 'Insights' })).toHaveAttribute('href', '/insights');
    await expect(page.getByRole('menuitem', { name: 'Testimonials' })).toHaveAttribute('href', '/testimonials');
    await expect(page.getByRole('menuitem', { name: 'Product Updates' })).toHaveAttribute('href', '/product-updates');
    await expect(page.getByRole('link', { name: 'Log In' })).toHaveAttribute('href', 'https://manage.cofimd.com/sign_in');
    await expect(page.locator('#home-header2').getByRole('link', { name: 'REQUEST DEMO' })).toHaveAttribute('href', '/contact-cofi');
}

export { checkHeaderLinkValues, checkHeaderVisibility };

