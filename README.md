# Beautiful One-Page Website with Astro & Tailwind CSS

A modern, responsive one-page website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). This project provides a professional foundation for building stunning websites with excellent performance and SEO.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Astro for lightning-fast loading times
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Accessibility**: Focus states and semantic markup for better accessibility

## 🚀 Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/        # Layout components
│   │   └── Layout.astro
│   ├── pages/          # Page components
│   │   └── index.astro
│   └── styles/         # Global styles
│       └── global.css
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or use this as a template
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📝 Customization

### Content

Edit the components in `src/components/` to customize:

- **Header.astro**: Logo and navigation
- **Hero.astro**: Main hero section with call-to-action
- **About.astro**: About section with company info and stats
- **Services.astro**: Services grid with icons and descriptions
- **Contact.astro**: Contact form and information
- **Footer.astro**: Footer with links and social media

### Styling

- Global styles: `src/styles/global.css`
- Component-specific styles: Use Tailwind classes directly in components
- Color scheme: Modify Tailwind colors in component classes

### Configuration

- **Site metadata**: Update in `src/layouts/Layout.astro`
- **Tailwind config**: Customize in `tailwind.config.mjs`
- **Astro config**: Modify in `astro.config.mjs`

## 🚀 Deployment

This project can be deployed to various platforms:

- **Vercel**: `npm run build` and deploy the `dist/` folder
- **Netlify**: Connect your repository and set build command to `npm run build`
- **GitHub Pages**: Use the `@astrojs/github-pages` adapter
- **Traditional hosting**: Upload the `dist/` folder contents

## 🎨 Customization Ideas

- Add animations with Framer Motion or CSS animations
- Integrate with a CMS like Strapi or Contentful
- Add a blog section with markdown support
- Implement contact form handling with Netlify Forms or EmailJS
- Add image optimization with Astro's image component
- Include additional sections like testimonials or portfolio

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Integrations](https://astro.build/integrations/)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Astro and Tailwind CSS

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
