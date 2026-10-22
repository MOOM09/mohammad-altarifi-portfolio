# Mohammad Al-Tarifi — Personal Portfolio

A responsive personal portfolio showcasing my background as a **Software Engineer**, the technologies I work with, selected projects, training experience, and certifications.

Built with **HTML, CSS, and vanilla JavaScript** — no frontend framework or animation library required.

## Features

- **Animated introduction:** A cinematic opening sequence with an animated title and a particle-based portrait effect.
- **About me:** A short introduction, my profile picture, and links to my CV and GitHub.
- **Skills:** Frontend, backend, databases, and quality assurance, with technology icons and hover labels.
- **Projects:** A showcase of four projects with descriptions and the technologies used.
- **Certificates:** Clickable certificate previews displayed in a modal.
- **Experience:** A timeline of my training programs and technical experience.
- **Contact:** A contact form that prepares an email in the visitor's email application.
- **Responsive interface:** Layouts for desktop and smaller screens, plus scrolling and hover interactions.

## Technologies

| Category | Technologies |
| --- | --- |
| Portfolio frontend | HTML5, CSS3, JavaScript |
| Design & interaction | CSS animations, Canvas API, Intersection Observer |
| Development tools | Git, GitHub, Visual Studio Code |

The technologies shown *inside the portfolio* also include React, PHP, Laravel, C#, ASP.NET, MySQL, PostgreSQL, MongoDB, and QA tools. These represent my skills and project experience; **they are not required to run this website**.

## Featured Projects

| Project | Description | Technologies |
| --- | --- | --- |
| **Pro Health** | Desktop health application with meal planning, calorie tools, and AI-assisted features. | Qt / C++, PocketBase, Gemini API |
| **Meet Grid** | Web application developed during field training. | ASP.NET, C#, Entity Framework |
| **Class Hub** | Instructor dashboard for students, quizzes, attendance, and reports. | HTML, CSS, JavaScript, JSON Server |
| **Visit Jordan** | Tourism platform featuring destinations, hotels, guides, and events. **In development.** | React, Laravel, MySQL (planned stack) |

## Project Structure

```text
portfolio/
├── index.html            # Main page and portfolio sections
├── style.css             # Layout, styles, and animations
├── script.js             # UI interactions and opening animation
├── assets/               # Images, icons, previews, and optional video
│   └── tech/             # Technology icons
├── IMAGE/                # Portrait, CV, and certificate files
└── README.md
```

## Run Locally

1. Download or clone the repository.
2. Open the folder in **Visual Studio Code**.
3. Start a local server, for example with the **Live Server** extension.
4. Open the address shown by Live Server (typically `http://127.0.0.1:5500/index.html`).

You can also use Python from the project folder:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.

> **Note:** Run the site through a local server instead of opening `index.html` using `file://`. The portrait particle effect reads image pixels from a canvas and may not work correctly under browser restrictions on local files.

## Assets and Configuration

- Keep the `assets/` and `IMAGE/` folders alongside `index.html` so relative image paths work.
- The intro portrait uses `IMAGE/my-cutout.png`, and the About section uses `IMAGE/my.png`.
- Certificate previews use image files inside `IMAGE/`.
- Background video is optional (`assets/programmer-loop.mp4`); a photographic fallback is used when video is unavailable.
- Update links, contact details, CV, images, and project information in `index.html` before publishing your own copy.
- Some technology logos may load from an external icon CDN, so those icons require an internet connection.

## Contact Form

The contact form uses a `mailto:` link to open a prepared message in the visitor's email application. **It does not send emails directly and does not store submitted messages.**

## Accessibility

The portfolio includes semantic sections, navigation labels, a skip link, keyboard-focus styling, and reduced-motion handling for users who prefer fewer animations.

## Author

**Mohammad Al-Tarifi**  
Software Engineer · Amman, Jordan

- **GitHub:** [MOOM09](https://github.com/MOOM09)
- **LinkedIn:** [Mohammad Al-Tarifi](https://www.linkedin.com/in/mohammad-al-tarifi-5b46b2432)

---

*Designed and built as a personal portfolio to present my software engineering journey.*
