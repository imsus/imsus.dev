# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Hugo static site project enhanced with Vite and Tailwind CSS 4. It combines Hugo's powerful static site generation with modern CSS tooling for an optimal development experience.

## Development Commands

### Vite and CSS Development
- `pnpm dev` - Start Vite dev server for CSS processing (port 5173)
- `pnpm build` - Build CSS with Vite and Tailwind CSS 4
- `pnpm preview` - Preview Vite build

### Hugo Development
- `hugo serve` - Start Hugo development server at http://localhost:1313
- `hugo serve -D` - Include draft content in development
- `hugo serve -p 8080` - Use custom port
- `hugo serve --buildDrafts --buildFuture` - Include drafts and future-dated content

### Combined Development
- `pnpm dev` - Run both Vite and Hugo dev servers concurrently (recommended)
- `pnpm build` - Build Vite assets and then generate Hugo site
- `pnpm preview` - Build complete site and serve on port 1337

### Content Creation
- `hugo new content posts/my-first-post.md` - Create new content using archetype
- `hugo new site <name>` - Create new Hugo site (for reference)

### Package Management
- `pnpm install` - Install Node.js dependencies
- `pnpm add <package>` - Add new dependency
- `pnpm add -D <package>` - Add development dependency

### Utilities
- `hugo version` - Check Hugo version (current: v0.152.2+extended)
- `hugo config` - Show configuration
- `hugo help` - Show Hugo help

## Project Structure

### Hugo Core
- `hugo.toml` - Main configuration file (baseURL, languageCode, title, params)
- `content/` - Markdown content files (site pages, posts, etc.)
- `layouts/` - Template files for rendering HTML
- `static/` - Static assets (processed CSS, JS, images, fonts)
- `public/` - Generated static site (Hugo build output)

### Frontend Tooling
- `assets/css/main.css` - Tailwind CSS source file with `@import 'tailwindcss'` and `@source` directives
- `assets/js/main.js` - JavaScript entry point for Vite processing and interactivity
- `vite.config.js` - Vite configuration for CSS and JS processing with custom output naming
- `package.json` - Node.js dependencies and integrated build scripts
- `pnpm-lock.yaml` - pnpm lockfile for reproducible builds
- `frontmatter.json` - VSCode Frontmatter CMS configuration for content management

### Hugo Templates
- `layouts/_default/` - Default templates (baseof.html, single.html, list.html, terms.html, taxonomy.html)
- `layouts/index.html` - Homepage template with modern design and features section
- `archetypes/default.md` - Content template for new posts

### Content Management
- `frontmatter.json` - VSCode Frontmatter CMS integration with custom fields
- `content/` - Organized content with posts section and about page
- `i18n/` - Internationalization support (if enabled)
- `data/` - Data files for dynamic content

### Configuration
- `.gitignore` - Git ignore patterns for Hugo, Node.js, and editors
- `node_modules/` - Installed Node.js packages

## Content Architecture

Hugo organizes content hierarchically in the `content/` directory:
- Content type determined by directory structure (posts, pages, etc.)
- Front matter supports TOML, YAML, or JSON format
- Enhanced archetype with additional fields: description, preview, tags, categories
- Content files use Markdown format with Hugo shortcodes support
- Frontmatter CMS integration provides GUI editing in VSCode with custom fields:
  - Title and description
  - Publishing date with auto-default
  - Content preview image
  - Draft status toggle
  - Tags and categories management

## Configuration

### Hugo Configuration (`hugo.toml`)
- Uses modern TOML syntax for Hugo configuration
- Includes site parameters for features, icons, and content sections
- Configures markup settings for GitHub-style code highlighting
- Extended Hugo version supports advanced features like Hugo Pipes

### Tailwind CSS 4 Configuration
- Content paths automatically detected via `@source` directive in main.css
- Vite integration provides hot reloading and optimized builds
- Utility-first CSS approach with mobile-first responsive design
- Modern Tailwind CSS 4 syntax with simplified configuration

### Frontmatter CMS Configuration
- VSCode extension integration for content management
- Custom content type with enhanced fields (description, preview, tags, categories)
- Live preview server integration on localhost:1313
- GUI-based frontmatter editing with validation

## Technology Stack

- **Hugo v0.152.2+extended** - Static site generator with Go templates
- **Vite v7.2.2** - Modern build tool with HMR and optimization
- **Tailwind CSS v4.1.17** - Utility-first CSS framework with Vite plugin
- **@tailwindcss/vite v4.1.17** - Official Tailwind CSS Vite plugin
- **pnpm v10.20.0** - Fast, disk space efficient package manager
- **concurrently v9.2.1** - Run multiple development servers simultaneously
- **serve v14.2.5** - Static file server for production preview

## Development Workflow

1. **Setup**: Run `pnpm install` to install Node.js dependencies
2. **Development**: Use `pnpm dev` to run both Vite and Hugo servers concurrently
3. **Content Creation**: Use `hugo new content posts/title.md` or Frontmatter CMS in VSCode
4. **Styling**: Edit `assets/css/main.css` for custom Tailwind styles
5. **JavaScript**: Add interactivity in `assets/js/main.js` (processed by Vite)
6. **Building**: Run `pnpm build` to process assets and generate static site
7. **Preview**: Run `pnpm preview` for production preview or check `public/` directory

## Key Features

- ⚡ **Fast Development**: Concurrent Vite + Hugo servers with instant hot reload
- 🎨 **Modern CSS**: Tailwind CSS 4 with utility classes and responsive design
- 📱 **Mobile-First**: Responsive layouts built with Tailwind's responsive system
- 🚀 **Performance**: Optimized asset builds with Vite's processing and code splitting
- 📝 **Content Focused**: Hugo's powerful content management with Frontmatter CMS
- 🔧 **Great DX**: Hot reload for CSS, JS, and content changes
- 🛠️ **Enhanced Tooling**: VSCode integration with custom content types and fields
- ⚡ **JavaScript Support**: Vite-processed JS with modern ES modules and HMR

## Development Notes

- Assets build to `static/` directory as `main.css` and `main.js`
- Hugo development server runs on port 1313, Vite on port 5173
- Use `pnpm dev` for simultaneous development with hot reload
- Frontmatter CMS provides GUI editing in VSCode with live preview
- The site includes modern layouts with navigation, features section, and responsive design
- Generated output in `public/` is ready for deployment to any static host
- Tailwind CSS 4 uses `@source` directive for automatic content scanning
- JavaScript interactivity handled through Vite with ES modules support