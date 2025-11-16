# Hugo Site with Cloudflare Pages Deployment

A modern Hugo static site powered by Vite and Tailwind CSS 4, with automated deployment to Cloudflare Pages via GitHub Actions.

## 🚀 Features

- ⚡ **Fast Development** - Concurrent Vite + Hugo servers with instant hot reload
- 🎨 **Modern CSS** - Tailwind CSS 4 with utility classes and responsive design
- 📱 **Mobile-First** - Responsive layouts built with Tailwind's responsive system
- 🚀 **Performance** - Optimized asset builds with Vite's processing and code splitting
- 📝 **Content Focused** - Hugo's powerful content management with Frontmatter CMS
- 🔧 **Great DX** - Hot reload for CSS, JS, and content changes
- 🛠️ **CI/CD** - Automated deployment to Cloudflare Pages
- 🔒 **Security** - Optimized headers and performance settings
- 🌐 **Global CDN** - Cloudflare's edge network for fast delivery worldwide

## 🛠️ Technology Stack

- **Hugo v0.152.2+extended** - Static site generator with Go templates
- **Vite v7.2.2** - Modern build tool with HMR and optimization
- **Tailwind CSS v4.1.17** - Utility-first CSS framework
- **pnpm v10.20.0** - Fast, disk space efficient package manager
- **Cloudflare Pages** - Global CDN and deployment platform
- **GitHub Actions** - Automated CI/CD pipeline

## 📁 Project Structure

```
hugo-site/
├── content/                    # Hugo content (Markdown files)
│   ├── posts/                 # Blog posts
│   └── about.md               # About page
├── layouts/                    # Hugo templates
│   ├── _default/              # Default templates
│   └── index.html             # Homepage template
├── assets/                     # Source assets for Vite
│   ├── css/main.css           # Tailwind CSS source
│   └── js/main.js             # JavaScript entry point
├── static/                     # Static files (copied directly)
│   ├── _headers               # Cloudflare Pages headers
│   └── robots.txt             # SEO robots file
├── archetypes/                 # Content templates
│   └── default.md             # Default content archetype
├── .github/workflows/          # GitHub Actions workflows
│   └── deploy.yml             # Deployment pipeline
├── hugo.toml                   # Hugo configuration
├── vite.config.js              # Vite configuration
└── package.json               # Node.js dependencies
```

## 🚀 Quick Start

### Prerequisites

- **Hugo v0.152.2+extended** - [Installation guide](https://gohugo.io/installation/)
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **pnpm** - `npm install -g pnpm`

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd hugo-site

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

### Development Commands

```bash
# Start both Hugo and Vite dev servers (recommended)
pnpm dev

# Start Hugo development server only
pnpm dev:hugo

# Start Vite dev server only
pnpm dev:vite

# Build the complete site
pnpm build

# Build Vite assets only
pnpm build:vite

# Build Hugo site only
pnpm build:hugo

# Preview production build locally
pnpm preview
```

## 🌐 Deployment

### Automatic Deployment

The site is automatically deployed to Cloudflare Pages when:

1. **Push to main branch** - Automatic production deployment
2. **Pull requests** - Build verification (no deployment)
3. **Manual workflow dispatch** - On-demand deployment

### Manual Deployment

```bash
# Build and deploy manually
pnpm build
# Deploy public/ directory to your hosting platform
```

### Environment Setup

The workflow uses a **Production** environment with:

- **Environment protection** - Deployments tracked and approved
- **Environment variables** - `HUGO_ENVIRONMENT=production`, `NODE_ENV=production`
- **GitHub Deployments** - Full deployment history and rollback capability

## 🎨 Content Management

### Creating New Content

```bash
# Create new blog post
hugo new content posts/my-first-post.md

# Create new page
hugo new content about.md
```

### Front Matter Format

Content uses YAML front matter:

```yaml
---
title: "My Post Title"
description: "A brief description of the post"
date: 2025-01-16T10:00:00+07:00
draft: false
preview: "/images/preview.jpg"
tags: ["hugo", "tailwind", "vite"]
categories: ["development"]
---
```

### Frontmatter CMS Integration

The project includes VSCode Frontmatter CMS integration:

- **GUI editing** in VSCode
- **Custom content fields**
- **Live preview** integration
- **Auto-default publishing date**

## 🔧 Configuration

### Hugo Configuration (`hugo.toml`)

```toml
baseURL = 'https://www.imsus.dev/'
languageCode = 'en-us'
title = 'My Modern Hugo Site'

[params]
  # Site parameters
  viteDevUrl = "http://localhost:5173"

  # Features for homepage
  [[params.features]]
    icon = "⚡"
    title = "Lightning Fast"
    description = "Built with Hugo, one of the fastest static site generators."
```

### Vite Configuration (`vite.config.js`)

```javascript
export default {
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: 'main.js',
        assetFileNames: 'main.css'
      }
    }
  },
  publicDir: 'static'
}
```

## 🌍 Cloudflare Pages Setup

### Required Secrets

Add these to your GitHub repository secrets:

1. **`CLOUDFLARE_API_TOKEN`** - API token with "Edit Cloudflare Workers" permissions
2. **`CLOUDFLARE_ACCOUNT_ID`** - Your Cloudflare account ID

### Getting Credentials

1. **Account ID**: Found in Cloudflare dashboard sidebar
2. **API Token**:
   - Profile → API Tokens → Create Token
   - Use "Edit Cloudflare Workers" template
   - Gives Pages editing permissions

### Performance Optimization

The `_headers` file configures:

- **Security headers** - X-Frame-Options, X-Content-Type-Options, etc.
- **Cache headers** - 1 year for static assets, 1 hour for HTML
- **Optimization** - Gzip compression, edge caching

## 📊 Performance Features

### Build Optimization

- **Minification** - HTML, CSS, and JavaScript minified
- **Garbage collection** - Hugo removes unused files
- **Asset optimization** - Vite processes and optimizes assets
- **Code splitting** - Optimal bundle sizes

### Caching Strategy

- **Static assets** - 1 year cache with immutable URLs
- **HTML pages** - 1 hour cache for content freshness
- **Images/fonts** - Long-term caching with optimization
- **Edge distribution** - Global CDN delivery

## 🛠️ Development Workflow

### Content Updates

1. **Edit content** in `content/` directory
2. **Preview changes** with `pnpm dev`
3. **Push to main** for automatic deployment

### Template Changes

1. **Modify templates** in `layouts/` directory
2. **Update styles** in `assets/css/`
3. **Test locally** with `pnpm dev`
4. **Deploy automatically** on push

### Custom Domains

1. **Configure domain** in Cloudflare Pages dashboard
2. **Update baseURL** in `hugo.toml`
3. **Deploy** to apply changes

## 🔍 Debugging

### Local Development

```bash
# Check Hugo version
hugo version

# Validate site configuration
hugo config

# Check content files
hugo list all
```

### Build Issues

```bash
# Clean build
rm -rf public/ resources/
pnpm build

# Check for issues
hugo --verbose
```

### Deployment Issues

- **Check GitHub Actions logs** for detailed error messages
- **Verify Cloudflare credentials** in repository secrets
- **Confirm project name** matches Cloudflare Pages project
- **Check permissions** - Production environment may require approval

## 🤝 Contributing

1. **Fork** the repository
2. **Create feature branch** - `git checkout -b feature/amazing-feature`
3. **Make changes** and test locally
4. **Commit changes** - `git commit -m 'Add amazing feature'`
5. **Push to branch** - `git push origin feature/amazing-feature`
6. **Open Pull Request** for review

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hugo** - Fast static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation build tool
- **Cloudflare Pages** - Global hosting platform
- **GitHub Actions** - CI/CD automation

---

Built with ❤️ using Hugo, Vite, and Tailwind CSS