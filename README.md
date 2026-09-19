# SkyGear

School project (ICT) — a car dealership style website for a made-up brand called SkyGear. Sells F1-inspired gear and supercars, five pages total: Home, About, Login, Signup, Feedback.

Ferrari and Lamborghini names/models used here are real, SkyGear itself is not, and this has nothing to do with the actual companies. Some of the About page text is adapted from real F1/Castore copy just to make it read like an actual brand. Images will be added on top of this separately, so don't worry that `HomePics/` and `Pics/` aren't included yet — just drop matching image files in there before opening anything.

## Pages

- **Home** — hero car (SF-23) with specs, then a list of Ferraris and Lamborghinis you can "order" or book a test drive for
- **About** — SkyGear + Castore blurb, contact info
- **Login** — email + password, Google/Facebook buttons for show
- **Signup** — username, email, password, confirm
- **Feedback** — rating table (1–5) plus a message box

## Built with

Just HTML, CSS, JS. No frameworks, no bundler. Open the files in a browser or run a local server if you want the relative paths to behave.

Fonts come from Google Fonts — Exo 2 is the main one, Playfair Display and Roboto are loaded in too but barely used at this point.

## Layout

```
Home.html / home.css / home.js
About.html / about.css
Login.html / login.css
Signup.html / signup.css
Feedback.html / feedback.css
nav.css      – shared nav across every page
footer.css   – shared footer across every page
HomePics/    – car photos for Home
Pics/        – logo, icons, about page images, background, favicon
```

## How much of it is actually functional

This is a frontend-only build — there's no backend and no database behind it, and that's not something this project is meant to have.

- Login/Signup forms are just laid out, no accounts get created
- Feedback form doesn't send or save anything
- `home.js` runs the Order Now / Schedule Test Drive buttons — a chain of `prompt()`s and `alert()`s that fakes the flow and keeps a session counter of how many "orders"/"bookings" happened
- The search bar in the nav is there visually but doesn't do anything

Was built to satisfy a school assignment, so the priority was getting the pages looking finished, not building out real functionality behind them.
