# GitHub Actions Deployment for Hugo Site to Cloudflare Pages

This directory contains the GitHub Actions workflow for automatically deploying your Hugo site to Cloudflare Pages.

## Files

- `deploy.yml` - Main workflow file for building and deploying the Hugo site
- `_headers` - Cloudflare Pages cache headers for optimal performance

## Deployment Setup

### 1. Cloudflare Pages Configuration

1. **Create Cloudflare Account**:
   - Sign up at [cloudflare.com](https://cloudflare.com)
   - Verify your email address

2. **Get API Credentials**:
   - Go to **My Profile** → **API Tokens**
   - Create a **Custom Token** with:
     - **Zone** permissions: `Zone:Read`, `Zone:Page Rules:Edit`
     - **Account** permissions: `Account Cloudflare Pages:Edit`
     - **Zone Resources**: `Include All zones` or specific domain
   - Copy the token (you'll need this for GitHub secrets)

   - Go to **Account Home** → **Account ID** (right sidebar)
   - Copy your Account ID

3. **Create Cloudflare Pages Project**:
   - Go to **Pages** in Cloudflare dashboard
   - Click **"Create a project"**
   - Choose **"Connect to Git"**
   - Select your GitHub repository
   - **Project name**: Choose a name (e.g., `my-hugo-site`)
   - **Production branch**: `main`
   - **Build command**: Leave empty (we'll handle this in GitHub Actions)
   - **Build output directory**: `public`

### 2. GitHub Repository Configuration

1. **Add Secrets** in your GitHub repository:
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add new repository secrets:
     - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID

2. **Update `deploy.yml`**:
   - Change `projectName: your-project-name` to your actual Cloudflare Pages project name
   - This is the project name you created in step 3

3. **Update baseURL** in `hugo.toml`:
   ```toml
   baseURL = 'https://your-project.pages.dev/'
   ```
   Replace `your-project` with your actual Cloudflare Pages project name, or use your custom domain.

### 3. Custom Domain Setup (Optional)

1. **In Cloudflare Dashboard**:
   - Go to your Cloudflare Pages project
   - Click **"Custom domains"**
   - Add your custom domain (e.g., `yourdomain.com`)

2. **Update DNS Records**:
   - If your domain is already on Cloudflare, it will automatically work
   - Otherwise, point your domain's A records to Cloudflare's IP addresses

3. **Update baseURL**:
   ```toml
   baseURL = 'https://yourdomain.com/'
   ```

## Workflow Triggers

The workflow triggers on:
- **Push to main branch** - Automatic deployment
- **Pull requests to main** - Build verification
- **Manual workflow dispatch** - On-demand deployment

## Build Process

The workflow performs these steps:

1. **Environment Setup**:
   - Ubuntu latest runner
   - Node.js 18 with pnpm
   - Hugo v0.152.2+extended

2. **Dependencies**:
   - Checks out repository with full history
   - Installs Node.js dependencies with pnpm

3. **Build Steps**:
   - Runs `pnpm build:vite` to process Tailwind CSS and JavaScript
   - Runs `hugo --minify --gc` to generate optimized static site
   - Verifies build output

4. **Deployment**:
   - Deploys to Cloudflare Pages using official Cloudflare action
   - Automatic deployments on main branch pushes

## Environment Variables

- `HUGO_VERSION`: Set to '0.152.2' (matches your local version)
- `NODE_VERSION`: Set to '18' (compatible with current dependencies)

## Performance Optimization

The `_headers` file includes:
- **Security headers** for protection
- **Cache headers** for static assets (1 year)
- **HTML cache settings** (1 hour)
- **Optimal caching for images, fonts, CSS, and JS**

## Permissions Required

The workflow requires these permissions:
- `contents: read` - Access repository files
- `deployments: write` - Deploy to Cloudflare Pages

## Local Development

To test the build process locally:

```bash
# Install dependencies
pnpm install

# Run the complete build process
pnpm build

# Serve locally for testing
pnpm dev
```

## Troubleshooting

### Build Fails
1. Check the Actions tab in GitHub for detailed error logs
2. Ensure all dependencies are in `package.json`
3. Verify Hugo version compatibility

### Deployment Fails
1. Verify your Cloudflare API token has correct permissions
2. Check that your Account ID is correct
3. Ensure the project name matches your Cloudflare Pages project

### Site Not Loading
1. Check that the baseURL is correctly configured
2. Wait a few minutes for Cloudflare to propagate changes
3. Verify the deployment completed successfully in Cloudflare dashboard

## Cloudflare Pages Benefits

- **Free custom domains** - No need for GitHub Pro
- **Global CDN** - Automatic distribution to 200+ locations
- **SSL certificates** - Free and automatic
- **Instant rollbacks** - Deploy previous versions instantly
- **Analytics** - Built-in visitor analytics
- **Wrangler-free locally** - No local Wrangler installation needed

## Customization

You can customize the workflow by:
- Changing the Hugo version
- Modifying build commands
- Adding deployment notifications
- Adjusting cache headers in `_headers`

## Security Notes

- Cloudflare API tokens are stored as GitHub secrets
- The workflow uses official Cloudflare and GitHub Actions
- All secrets are encrypted and not exposed in logs