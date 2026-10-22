# Mohammad Al-Tarifi | Personal Portfolio

A responsive-ready personal portfolio website showcasing my background, technical skills, projects, certificates, and experience in software development.

Built with **HTML, CSS, and vanilla JavaScript**, with a focus on a clean interface, smooth interactions, and bilingual accessibility.

## Features

- **English / Arabic language switcher** with right-to-left (RTL) layout support for Arabic.
- **Dark and light themes** with saved user preferences.
- **Animated introduction** and interactive page transitions.
- **About, Skills, Projects, Certificates, and Experience** sections.
- **Contact form powered by EmailJS** (requires configuration with your own public key).
- **CV download**, GitHub, and LinkedIn links.
- Navigation and section-based layout.

## Technologies

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic page structure |
| CSS3 | Layout, themes, animations, and RTL styling |
| JavaScript (ES6+) | Interactions, theme and language switching, contact form |
| EmailJS | Client-side email delivery |

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/MOOM09/mohammad-altarifi-portfolio.git
   ```
2. Open the project folder.
3. Open `index.html` in a browser or use a local development server (for example, VS Code Live Server).

No build process or backend server is required to view the portfolio.

## Project Structure

```text
.
├── index.html          # Portfolio structure
├── style.css           # Styling, themes, animations, and RTL
├── script.js           # UI interactions, translations, and EmailJS
├── EMAILJS_SETUP.txt   # Contact form configuration notes
├── assets/             # Referenced icons and other assets
└── IMAGE/              # Referenced images and CV
```

> Make sure the `assets/` and `IMAGE/` directories and their referenced files are included when deploying. They are not bundled in every source-code ZIP.

## Contact Form Setup

The contact form uses [EmailJS](https://www.emailjs.com/).

1. Create or sign in to an EmailJS account.
2. Connect an email service and create a template.
3. In `script.js`, replace `YOUR_PUBLIC_KEY` with your EmailJS **Public Key**.
4. Confirm that the configured service ID and template ID match your EmailJS dashboard.
5. Test the form and confirm that an email arrives.

The template expects these parameters: `name`, `email`, `title`, and `message`.

**Security:** Do not put your EmailJS private key or email-account password in frontend code. Configure domain restrictions and abuse protection in your EmailJS dashboard as appropriate.

## Languages & Themes

- Switch between **English (LTR)** and **Arabic (RTL)** using the language control.
- Toggle between **dark** and **light** themes.
- Language and theme choices are preserved in browser storage.

## Live Website

[View Portfolio](https://moom09.github.io/mohammad-altarifi-portfolio/)

> The live link will work once GitHub Pages is enabled and deployment has completed.

## Connect

- **GitHub:** [MOOM09](https://github.com/MOOM09)
- **LinkedIn:** [Mohammad Al-Tarifi](https://www.linkedin.com/in/mohammad-al-tarifi-5b46b2432)

## Future Improvements

The current feature set is intentionally kept focused. Project case studies, further performance tuning, and other enhancements can be added in later versions.

---

Made by **Mohammad Al-Tarifi**.
