# Medve Dome static website

This is a simple website made only with HTML, CSS and JavaScript. It is ready for GitHub Pages.

## What is inside

- `index.html` is the homepage.
- `booking.html` is the booking request page with room details, policies, amenities and map.
- `styles.css` controls the design.
- `availability.js` is the small file where you edit booked dates.
- `script.js` controls the mobile menu, gallery popup, language switch, availability calendar and booking form.
- `CNAME` tells GitHub Pages to use `medvedome.com`.

## Languages

The website has English, Romanian and Hungarian buttons in the top menu.

When a visitor chooses a language, the page text, FAQ and booking form change too.

## Availability calendar

The website now has a simple availability calendar inside the booking form.

The calendar appears when someone clicks the check-in or check-out field. Green days are available. Warm marked days are booked, closed or unavailable.

Medve Dome is set as closed from December through April. May through November can be booked, unless you mark specific dates as booked.

To mark dates as booked:

1. Open `availability.js`.
2. Find the list named `window.medveBookedDates`.
3. Add or remove dates in this format: `2026-07-19`.
4. Save the file.
5. Upload the changed `availability.js` to GitHub again.

From a phone, you can do the same thing in the GitHub app or on github.com:

1. Open your repository.
2. Tap `availability.js`.
3. Tap the pencil/edit button.
4. Add one booked night on a new line, for example `"2026-08-12",`.
5. Tap `Commit changes`.
6. Wait a minute or two for GitHub Pages to update.

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
   - `availability.js`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `CNAME`
   - the full `images` folder
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

## How to use medvedome.com

I added a file named `CNAME` with this inside:

```text
medvedome.com
```

When you upload the website to GitHub, upload this `CNAME` file too.

Then do this in GitHub:

1. Open your website repository.
2. Click `Settings`.
3. Click `Pages`.
4. Find `Custom domain`.
5. Type `medvedome.com`.
6. Click `Save`.

Then go to the place where you bought `medvedome.com` and open the DNS settings.

For the main domain, add these four `A` records:

```text
Type: A    Name: @    Value: 185.199.108.153
Type: A    Name: @    Value: 185.199.109.153
Type: A    Name: @    Value: 185.199.110.153
Type: A    Name: @    Value: 185.199.111.153
```

For `www.medvedome.com`, add one `CNAME` record:

```text
Type: CNAME    Name: www    Value: YOUR-GITHUB-USERNAME.github.io
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

After this, wait. It can take a few minutes, but sometimes it can take up to 24 hours. When GitHub allows it, turn on `Enforce HTTPS` in the same Pages settings.

## How the booking form works

The booking form does not need a paid server. When someone fills it in and presses `Send request`, it sends the request directly to `info.medvedome@gmail.com` using FormSubmit.

## How to update GitHub after we finish changes here

If I changed files for you on this computer, GitHub does not know about those changes yet. You need to upload the newest files again.

The easiest way:

1. Go to your GitHub repository.
2. Click `Add file`.
3. Click `Upload files`.
4. Drag the changed files from this folder into GitHub.
5. If GitHub asks if you want to replace files with the same name, say yes.
6. Click the green `Commit changes` button.
7. Wait 1 or 2 minutes for GitHub Pages to update.

When we change photos, upload the `images` folder again too, because the photos live inside that folder.

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

## How to change photos and order them

The photos are now inside the `images` folder:

- homepage photos are in `images/home`
- booking page photos are in `images/booking`

The order is controlled by the order of the image lines in the HTML. The first line appears first on the website.

### Homepage gallery

1. Go to your website files on GitHub.
2. Open `index.html`.
3. Click the pencil button to edit.
4. Press `Ctrl + F` and search for `gallery-grid`.
5. You will see the video first, then the photo lines.

The video line looks like this:

```html
<div class="gallery-item gallery-video tall">
```

A photo line looks like this:

```html
<button type="button" class="gallery-item"><img src="images/home/Living%20room%20(2).jpg" alt="Living Room at Medve Dome"></button>
```

To reorder photos, move the whole photo line higher or lower. Start at `<button` and finish at `</button>`. Do not move only the file name.

On the booking page, some photo buttons also have `data-position`. This controls which part of the photo stays visible in the big cropped image.

Examples:

```html
data-position="center center"
data-position="center top"
data-position="center 38%"
```

If a face, bed, kitchen or window is too high or too low in the big photo, change only this small `data-position` text.

### Booking page gallery

1. Open `booking.html`.
2. Click the pencil button to edit.
3. Press `Ctrl + F` and search for `room-thumbs`.
4. Move the whole `<button ...></button>` photo lines into the order you want.

The large first booking photo is controlled just above that section. If you want a different photo to show first, change this line too:

```html
<img src="images/booking/The%20Dome.jpg" alt="Interior of Medve Dome">
```

For example, if you want the queen bed first, change it to:

```html
<img src="images/booking/Queen%20bed.jpg" alt="Queen bed at Medve Dome">
```

When you finish editing on GitHub, click `Commit changes`. GitHub Pages will update the live website after a short wait.

## Small warning

Because this is a free static website, it cannot automatically check availability or take card payments by itself. For that you would later connect a booking service, but this version keeps the cost as low as possible.
