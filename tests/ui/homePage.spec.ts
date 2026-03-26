import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';

test.describe('Homepage Tests', () => {

  test('[@regression] contact form usability', async ({ page }) => {
    const homePage = new HomePage(page);

    await page.goto('/');
    // await page.goto(process.env.BASE_URL!);
    await homePage.contact.click();
    const contactSection = page.locator('section#contact');
    await contactSection.scrollIntoViewIfNeeded();
    await expect(homePage.nameInput).toBeVisible();
    await expect(homePage.emailInput).toBeVisible();
    await expect(homePage.phoneInput).toBeVisible();
    await expect(homePage.subjectlineInput).toBeVisible();
    await expect(homePage.messageInput).toBeVisible();
    await expect(homePage.submitButton).toBeVisible();

    // Filling in the form with fixed data for simplicity, as the form is not actually functional, can use a data set in more complex application
    const name = 'Aspiring Tester';
    await homePage.nameInput.fill(name);
    await homePage.emailInput.fill('wantthejob@example.com');
    await homePage.phoneInput.fill('01165875214');
    await homePage.subjectlineInput.fill('Test Message submission');
    await homePage.messageInput.fill('This is a message writing to say Im working on your assignment, and drinking alot of coffee!');
    await homePage.submitButton.click();

    //Confirmation is containerized in a h3 with class of h4 mb-4, so we can use that to check for confirmation 
    const confirmationMessage = homePage.confirmationMessage;
    await expect(confirmationMessage).toBeVisible();
    await expect(confirmationMessage).toHaveText(`Thanks for getting in touch ${name}!`);

  });

});

//contact messgae confirmed
//  <div class="card-body p-4"><h3 class="h4 mb-4">Thanks for getting in touch trying oncemore!</h3><p>We'll get back to you about</p><p style="font-weight: bold;">once again</p><p>as soon as possible.</p></div>