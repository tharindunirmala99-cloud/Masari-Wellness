# Serenity Spa - DevOps Implementation

## Quick Start

### Installation
```bash
# Install dependencies
npm install

# Create local environment file
cp .env.example .env.local

# Start development server
npm run dev
```

### Development Commands
```bash
npm run dev              # Start dev server (http://localhost:5173)
npm run build            # Production build
npm run preview          # Preview production build
npm run test             # Run tests with coverage
npm run test:ui          # Interactive test UI
npm run lint             # Check code quality
npm run lint:fix         # Auto-fix linting
npm run format           # Format code with Prettier
```

## DevOps Pipeline Overview

This project includes a complete DevOps pipeline with:

### ✅ Continuous Integration (CI)
- **Linting & Format Checks**: ESLint + Prettier
- **Automated Testing**: Vitest + React Testing Library
- **Build Verification**: Vite optimization
- **Security Scanning**: npm audit + Snyk

### ✅ Continuous Deployment (CD)
- **Auto Deployment**: Push to `main` → Deploy to Netlify
- **Branch Previews**: PR → Preview deployment
- **Performance Audits**: Lighthouse CI
- **Error Monitoring**: Sentry integration

### ✅ Code Quality
- **ESLint Configuration** for consistent code style
- **Prettier** for automatic formatting
- **Git Hooks Ready** (husky integration available)
- **Pre-commit Checks** to catch issues early

### ✅ Testing & Coverage
- **Unit Tests**: Component and utility tests
- **Integration Tests**: User interaction flows
- **Coverage Reports**: Codecov integration
- **Test UI**: Visual test runner interface

### ✅ Monitoring & Analytics
- **Error Tracking**: Sentry for real-time error monitoring
- **Performance Metrics**: Lighthouse CI for Core Web Vitals
- **Deployment Tracking**: Netlify analytics

## GitHub Actions Workflows

### File: `.github/workflows/ci.yml`
Runs on every push and PR:
1. **Lint** - Code quality checks
2. **Test** - Unit tests with coverage
3. **Build** - Production build verification
4. **Security** - Vulnerability scanning

### File: `.github/workflows/deploy.yml`
Runs on successful CI for main branch:
1. **Build** - Production build
2. **Deploy** - Push to Netlify
3. **Audit** - Lighthouse performance check

## Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies & scripts |
| `vite.config.js` | Build configuration |
| `vitest.config.js` | Test configuration |
| `.eslintrc.cjs` | Linting rules |
| `.prettierrc` | Code formatting |
| `netlify.toml` | Netlify deployment config |
| `CONTRIBUTING.md` | Developer guidelines |
| `DEPLOYMENT.md` | Deployment instructions |
| `DEVOPS.md` | DevOps architecture |

## Setup for Deployment

### 1. GitHub Secrets
Add these to your GitHub repository (Settings → Secrets):
```
NETLIFY_AUTH_TOKEN        # From Netlify account
NETLIFY_SITE_ID           # From Netlify site settings
VITE_SENTRY_DSN           # From Sentry project
SNYK_TOKEN                # Optional security scanning
```

### 2. Sentry Setup
- Create account at [sentry.io](https://sentry.io)
- Create React project
- Add DSN to GitHub Secrets

### 3. Netlify Setup
- Create site at [netlify.com](https://netlify.com)
- Get Site ID from settings
- Generate personal access token

### 4. Environment Variables
Create `.env.production`:
```env
VITE_SENTRY_DSN=your-dsn-here
VITE_APP_TITLE=Serenity Spa
```

## Project Structure

```
serenity-spa/
├── .github/workflows/     # GitHub Actions CI/CD
│   ├── ci.yml             # Lint, test, build, security
│   └── deploy.yml         # Deploy to Netlify
├── src/
│   ├── components/        # React components
│   │   ├── Hero/
│   │   ├── Treatments/
│   │   └── ...
│   ├── test/              # Test setup
│   ├── App.jsx
│   └── main.jsx           # Sentry initialization
├── public/                # Static assets
├── dist/                  # Build output (generated)
├── .eslintrc.cjs          # Linting config
├── .prettierrc             # Format config
├── vitest.config.js       # Test config
├── vite.config.js         # Build config
├── netlify.toml           # Deployment config
├── CONTRIBUTING.md        # Dev guidelines
├── DEPLOYMENT.md          # Deployment guide
└── DEVOPS.md              # This doc
```

## Best Practices

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: add hero image carousel
fix: resolve navigation issue
docs: update deployment guide
style: format component styles
test: add hero component tests
```

### Code Quality
- Always run `npm run lint:fix` before committing
- Ensure all tests pass with `npm run test`
- Keep bundle size under 200KB

### Pull Requests
- Create from `develop` branch
- Ensure CI checks pass
- Request code review
- Update documentation if needed

### Performance
- Monitor Lighthouse scores
- Keep bundle size minimal
- Optimize images and assets
- Use code splitting for large components

## Troubleshooting

### CI Pipeline Fails
```bash
# Run locally to debug
npm run lint
npm run test
npm run build
```

### Tests Fail
```bash
# Run test UI for debugging
npm run test:ui

# Check for dependencies
npm install
npm install -D vitest @testing-library/react
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Fails
1. Check GitHub Actions logs
2. Verify Netlify secrets are correct
3. Check `.env.production` variables
4. Review Netlify build logs

## Monitoring Dashboard Links

Once deployed, monitor using:
- **Netlify**: [app.netlify.com](https://app.netlify.com)
- **Sentry**: [sentry.io](https://sentry.io)
- **GitHub Actions**: Your repository → Actions tab
- **Lighthouse**: GitHub Actions workflow artifacts

## Support

For issues or questions:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for setup issues
2. Review [CONTRIBUTING.md](./CONTRIBUTING.md) for dev practices
3. See [DEVOPS.md](./DEVOPS.md) for architecture details
4. Check workflow logs in GitHub Actions

---

**Last Updated**: April 2026
**Maintained By**: Development Team
