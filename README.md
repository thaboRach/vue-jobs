# vue-jobs

A simple job board application built with Vue 3, Vite, TypeScript, and Tailwind CSS.

This project allows developers to browse Vue jobs and employers to post job listings. It serves as a demonstration of modern Vue development practices, including component-based structure, API integration, and best practices for frontend tooling.

---

## Features

- Browse available Vue-related jobs
- List jobs as an employer
- View details for each job
- Responsive layout with Tailwind CSS
- TypeScript support for robust development and type checking
- ESLint and Prettier integration for code quality
- Hot module replacement with Vite for rapid development

## Demo

To see a live demo, clone the repository and follow the setup instructions below.

---

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur for best results).

### Type Support for `.vue` Imports in TS

- Uses `vue-tsc` for type checking.
- Volar is recommended for a better TypeScript experience with Vue components.

---

## Project Structure

- `src/components/` — Reusable Vue components (e.g., Nav-Bar, Hero-Section, Job-Listings)
- `src/views/` — Main route views (Home, Jobs, Add/Edit Job)
- `src/router/` — Vue Router configuration
- `src/types/` — TypeScript types (e.g., Job definition)
- `src/assets/` — Static assets and styles

---

## Setup Instructions

```sh
# Install dependencies
npm install

# Run in development mode with hot reload
npm run dev

# Type-check, build, and minify for production
npm run build

# Lint code with ESLint
npm run lint
```

---

## Usage

- Visit the homepage to see featured jobs and navigation.
- Developers can browse jobs and view job details.
- Employers can add new jobs using the "Add Job" route.
- Job data is fetched via a RESTful API (proxy configured to `http://localhost:5000/api` by default).

---

## Customization

- Tailwind CSS is used for styling and can be customized via `tailwind.config.js`.
- Vite configuration (aliases, server proxy) is in `vite.config.ts`.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

---

## License

_No license specified yet. Please add a license if you plan to make this project open source._

---

## Links

- [Vite Configuration Reference](https://vite.dev/config/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

> Made with ❤️ using Vue 3, Vite, and Tailwind CSS.
