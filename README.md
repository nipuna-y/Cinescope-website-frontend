# Cinescope Website

Open `index.html` to view the site locally. The site includes Home, Now Showing, Featured Movies, Movie Details, Cinema News and Cinescope TV pages.

## Editable image assets
- `assets/Homepage Slider/` — homepage carousel artwork. Replace these images with your own, keeping filenames or updating `script.js`.
- `assets/Now Showing/` — sample artwork for currently showing titles.
- `assets/Featured Movies/` — sample featured movie artwork.
- `assets/Cinema News/` — sample cinema news artwork.
- `assets/Cinescope TV/` — sample TV/brand artwork.
- `assets/cinescope-logo.png` — primary Cinescope logo.

The homepage carousel keeps a fixed responsive height independent of source image dimensions, uses smooth transitions and animated pagination. Replace sample images manually at any time. Some non-local demo images and video actions are placeholders and can be connected to official sources later.


## Replacing sample images
The homepage and category pages are connected to the sample images in `assets` by filename. Replace the JPG files in these folders with your final artwork, keeping the exact same filenames and dimensions/aspect ratio for the website to update automatically:

- `assets/Now Showing/now-showing-sample-01.jpg` through `now-showing-sample-05.jpg`
- `assets/Featured Movies/featured-movies-sample-01.jpg` through `featured-movies-sample-05.jpg`
- `assets/Cinema News/cinema-news-sample-01.jpg` through `cinema-news-sample-05.jpg`

The homepage Now Showing, Featured Movies, and Cinema News sections use these images. The respective category pages use the same category folders. Keep filenames and extensions unchanged; no HTML or JavaScript edits are needed when replacing artwork.
