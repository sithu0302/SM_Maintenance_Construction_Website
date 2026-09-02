# S.M. Maintenance & Construction Engineering Website

## Run
Open `index.html` directly in a modern browser.

## Maintain
- Edit company/contact details in `index.html`.
- Replace team photos in `assets/team/`.
- Add real project photos in `assets/projects/project-XX/`.
- Update the `projects` array in `script.js` when adding projects. Each project owns its own `images` array, so galleries never mix between projects.
- Add project 13+ by copying a project object and changing its folder/image paths.
- Replace `VIDEO_ID` in `index.html` with real YouTube IDs.
- Replace placeholder social `href="#"` values with real company URLs.
- Connect the validated forms to an email service/backend before expecting submissions to be received.

## Project image convention
Use:
assets/projects/project-01/01.jpg
assets/projects/project-01/02.jpg
...
The JavaScript `images` array is the source of truth for each gallery.
