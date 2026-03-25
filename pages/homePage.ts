import { Page, expect, Locator } from '@playwright/test';

/*our API tests will cover bookings/rooms and we will only use UI testing for the contact form. 
The extra locators are added in anticipation of future UI tests that may be added, but are not necessary for this project. They can be ignored for now.*/

export class HomePage {
  readonly page: Page;
  readonly rooms: Locator;
  readonly bookings: Locator;
  readonly amenities: Locator; 
  readonly location: Locator;
  readonly contact: Locator;
  readonly admin: Locator;
  //These used for the contact us form at bottom of page
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectlineInput: Locator;
  readonly submitButton: Locator;
  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rooms = page.getByRole('link', { name: 'Rooms' });
    this.bookings = page.getByRole('link', { name: 'Bookings' });
    this.amenities = page.getByRole('link', { name: 'Amenities' });
    this.location = page.getByRole('link', { name: 'Location' });
    this.contact = page.locator('a.nav-link[href="/#contact"]');
    this.admin = page.getByRole('link', { name: 'Admin' });
    const contactSection = page.locator('section#contact');
    this.nameInput = contactSection.locator('input[data-testid="ContactName"]');
    this.emailInput = contactSection.locator('input[data-testid="ContactEmail"]');
    this.phoneInput = contactSection.locator('input[data-testid="ContactPhone"]');
    this.subjectlineInput = contactSection.locator('input[data-testid="ContactSubject"]');
    this.messageInput = contactSection.locator('textarea[data-testid="ContactDescription"]');
    this.submitButton = contactSection.locator('button');
    this.confirmationMessage = page.locator('#contact div.card-body h3.h4.mb-4'); 
  }
  
  // As each navigation just points to a different section of the page, we will just test against the endpoint changes in URL
  async goToRooms(): Promise<void> {
    await this.rooms.click();
    await this.page.locator('#rooms').waitFor( {state: 'visible'} );
  }
  
    async goToBookings(): Promise<void> {       
    await this.bookings.click();
    await this.page.locator('#bookings').waitFor( {state: 'visible'} );
    }

    async goToContact(): Promise<void> {
    await this.contact.click();
    await this.page.locator('#contact').waitFor( {state: 'visible'} );
    }

    async fotToAmenities(): Promise<void> {
    await this.amenities.click();
    await this.page.locator('#amenities').waitFor( {state: 'visible'} );
    }

    async goToLocation(): Promise<void> {
    await this.location.click();
    await this.page.locator('#location').waitFor( {state: 'visible'} );
    }

    async goToAdmin(): Promise<void> {
    await this.admin.click();
    await expect(this.page.locator('input[name="user-name"]')).toBeVisible();
    await expect(this.page.locator('input[name="password"]')).toBeVisible();
    }


}  