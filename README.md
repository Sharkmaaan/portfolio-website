# Portfolio Website

A modern, responsive portfolio website built with React and styled with Tailwind CSS.

## Tech Stack

- **React** (v19.2.0) - UI library
- **Vite** - Build tool and development server
- **React Router** (v7.11.0) - Client-side routing
- **Tailwind CSS** (v4.1.18) - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library

## Features

- Fast development with Vite HMR (Hot Module Replacement)
- Modern React 19 features
- Responsive design with Tailwind CSS
- Client-side routing with React Router
- Component-based architecture
- ESLint for code quality

## Project Structure

```
website/
├── public/           # Static assets
├── src/
│   ├── assets/      # Images and other assets
│   ├── pages/       # Page components
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx      # Main app component with routing
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
└── vite.config.js   # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Configuration

### Path Aliases

The project is configured with path aliases in [vite.config.js](vite.config.js):
- `@` points to the `./src` directory

### Tailwind CSS

Tailwind CSS is integrated via the Vite plugin and configured with v4 features.

## Utilities

This project includes utility functions for styling:
- `clsx` - Conditional className composition
- `tailwind-merge` - Merge Tailwind CSS classes intelligently
- `class-variance-authority` - Type-safe variant management

## Browser Support

Modern browsers that support ES modules and latest JavaScript features.

## License

This project is private and not licensed for public use.
