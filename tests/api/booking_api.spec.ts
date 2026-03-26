import { expect } from '@playwright/test';
import { test } from '../../fixture/apiFixture';

test.describe('E2EBookingAPI', () => {

  test('[@regression, @api] Full CRUD booking flow', async ({ request, authToken }) => {


    //Create the booking
    const bookingData = {
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2026-04-01',
        checkout: '2026-04-05'
      },
      additionalneeds: 'Breakfast'
    };

    const createapiResponse = await request.post('/booking', {
      data: bookingData,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    expect(createapiResponse.status()).toBe(200);

    const createBody = await createapiResponse.json();

    //Extract booking ID
    const bookingId = createBody.bookingid;
    expect(bookingId).toBeTruthy();

    console.log('Created Booking ID:', bookingId);

    // Read booking details
    const getResponse = await request.get(`/booking/${bookingId}`);
    expect(getResponse.status()).toBe(200);
    const getBody = await getResponse.json();
    expect(getBody).toMatchObject(bookingData);

    //Update the booking
    const updatedBooking = {
      firstname: 'Albert',
      lastname: 'Einstein',
      totalprice: 522,
      depositpaid: false,
      bookingdates: {
        checkin: '2026-05-01',
        checkout: '2026-05-10'
      },
      additionalneeds: 'Lunch'
    };

    const updateRes = await request.put(`/booking/${bookingId}`, {
      data: updatedBooking,
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `token=${authToken}`
      }
    });
    expect(updateRes.status()).toBe(200);

    const updateBody = await updateRes.json();
    expect(updateBody).toMatchObject(updatedBooking);


    //Verify updated booking details with a GET request

    const getUpdatedRes = await request.get(`/booking/${bookingId}`);
    const updatedBody = await getUpdatedRes.json();
    expect(updatedBody).toMatchObject(updatedBooking);


    //Delete the booking
    const deleteRes = await request.delete(`/booking/${bookingId}`, {
      headers: {
        'Cookie': `token=${authToken}`
      }
    });
    expect(deleteRes.status()).toBe(201);

    //Confirm Delete successful
    const getDeletedRes = await request.get(`/booking/${bookingId}`);
    expect(getDeletedRes.status()).toBe(404);

  });

});