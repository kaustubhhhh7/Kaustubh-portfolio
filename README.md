<<<<<<< HEAD
# Kaustubh-portfolio
Author - Kaustubh Ghadshi
=======
# Kaustubh Ghadshi - Portfolio Website

A modern, interactive portfolio website built with Next.js, React, and TypeScript.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, dark-themed interface with smooth animations
- **Interactive Elements**: Engaging animations and transitions using Framer Motion
- **Project Showcase**: Display of live projects and portfolio work
- **Skills Section**: Technical skills with proficiency indicators
- **Experience Timeline**: Professional experience and achievements

## Tech Stack

- **Framework**: Next.js 15.5.6
- **Language**: TypeScript 5.9.3
- **Styling**: Sass/SCSS with CSS Modules
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber & Drei
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 22.x)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kaustubh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
kaustubh-portfolio/
├── components/          # React components
│   ├── about/          # About section
│   ├── experience/     # Experience section
│   ├── footer/         # Footer component
│   ├── header/         # Navigation header
│   ├── introduce/      # Hero/intro section
│   ├── projects/       # Projects showcase
│   ├── skills/         # Skills section
│   └── ...             # Other components
├── pages/              # Next.js pages
├── styles/             # Global styles and themes
├── public/             # Static assets
├── netlify.toml        # Netlify deployment configuration
└── next.config.js      # Next.js configuration
```

## Build for Production

Build the static export:
```bash
npm run build
```

The build output will be in the `out/` directory, ready for static hosting.

For local testing of the production build:
```bash
npm run build
npx serve out
```

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the build configuration.

### Deploy to Netlify

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. The site will build and deploy automatically on every push

The build process:
- Uses npm to install dependencies
- Runs `npm run build` to create the static export
- Publishes the `out/` directory

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (creates static export in `out/`)
- `npm start` - Start production server (requires build first)
- `npm test` - Run tests
- `npm run eslint:check` - Check code for linting errors
- `npm run eslint:fix` - Fix linting errors automatically
- `npm run prettier:check` - Check code formatting
- `npm run prettier:fix` - Fix code formatting

## License

This project is private and proprietary.

## Contact

- **Email**: kaustubh7205@gmail.com
- **LinkedIn**: [kaustubh-g-3889212b9](https://www.linkedin.com/in/kaustubh-g-3889212b9)
>>>>>>> 9e625b6 (chore: remove comments from tests)
