# Medve Dome static website

This is a simple website made only with HTML, CSS and JavaScript. It is ready for GitHub Pages.

## What is inside

- `index.html` is the homepage.
- `booking.html` is the booking request page with room details, policies, amenities and map.
- `styles.css` controls the design.
- `script.js` controls the mobile menu, gallery popup, language switch, availability calendar and booking form.

## Languages

The website has English, Romanian and Hungarian buttons in the top menu.

When a visitor chooses a language, the page text, FAQ and booking form change too.

## Availability calendar

The website now has a simple availability calendar inside the booking form.

The calendar appears when someone clicks the check-in or check-out field. Green days are available. Warm marked days are booked or unavailable.

To mark dates as booked:

1. Open `script.js`.
2. Find the list named `bookedDates`.
3. Add or remove dates in this format: `2026-07-19`.
4. Save the file.
5. Upload the changed `script.js` to GitHub again.

This is a free manual calendar. It does not automatically connect to Booking.com, Airbnb or Google Calendar.

## How to see the website on your computer

1. Open this folder.
2. Double-click `index.html`.
3. The website opens in your browser.

## How to put it online with GitHub Pages

1. Go to [github.com](https://github.com).
2. Create an account or log in.
3. Click the `+` button in the top right.
4. Click `New repository`.
5. Repository name: write something like `medvedome`.
6. Choose `Public`.
7. Click `Create repository`.
8. On the next page, click `uploading an existing file`.
9. Drag these files into the upload box:
   - `index.html`
   - `booking.html`
   - `styles.css`
   - `script.js`
   - `README.md`
10. Click the green `Commit changes` button.
11. Click `Settings`.
12. In the left menu, click `Pages`.
13. Under `Build and deployment`, find `Source`.
14. Choose `Deploy from a branch`.
15. Under `Branch`, choose `main`.
16. Choose `/root`.
17. Click `Save`.
18. Wait 1 or 2 minutes.
19. Refresh the same GitHub Pages settings page.
20. GitHub will show your live website link. It will look like `https://yourname.github.io/medvedome/`.

## How the booking form works

The booking form does not need a paid server. When someone fills it in and presses `Send request`, it sends the request directly to `info.medvedome@gmail.com` using FormSubmit.

Important: the first real booking request may send an activation email from FormSubmit to `info.medvedome@gmail.com`. Open that email and confirm it once. After that, future booking requests should arrive normally.

## How to change phone, email or social links

Open `index.html`.

Search for:

- `+40 742 919 341`
- `info.medvedome@gmail.com`
- `instagram.com/medve.dome`
- `tiktok.com/@medve.dome`
- `wa.me/40742919341`

Change the text carefully, then save the file.

## How to change photos

The current photos are loaded from the old Wix image links. This keeps the first version simple.

Later, if you want to use your own local photos:

1. Create a folder named `images`.
2. Put your photos inside it.
3. Rename them simply, for example `dome-front.jpg`.
4. Open `index.html`.
5. Replace the long photo link with `images/dome-front.jpg`.
6. Upload the `images` folder to GitHub too.

## Small warning

Because this is a free static website, it cannot automatically check availability or take card payments by itself. For that you would later connect a booking service, but this version keeps the cost as low as possible.
