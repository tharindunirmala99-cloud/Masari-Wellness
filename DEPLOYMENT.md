# Deployment Guide

## Prerequisites

- GitHub repository with Actions enabled
- Netlify account and site
- Sentry account for error tracking

## Setup Instructions

### 1. GitHub Actions Setup

**Required Secrets** in GitHub Repository Settings → Secrets and variables → Actions:

```
NETLIFY_AUTH_TOKEN     # Netlify Personal Access Token
NETLIFY_SITE_ID        # Your Netlify Site ID
VITE_SENTRY_DSN        # Your Sentry DSN
SNYK_TOKEN             # Optional: Snyk security scanning token
```

### 2. Get Netlify Credentials

1. Go to [Netlify](https://app.netlify.com)
2. Create a new site or use existing
3. **Get Site ID:**
   - Go to Site settings → General
   - Copy "API ID"
4. **Get Auth Token:**
   - Go to User settings → Applications → Personal access tokens
   - Create new token with "admin" scope

### 3. Setup Sentry Error Tracking

1. Go to [Sentry.io](https://sentry.io)
2. Create a new React project
3. Copy your DSN
4. Add to GitHub Secrets and `.env.local`

### 4. Environment Variables

Create `.env.production`:
```env
VITE_SENTRY_DSN=your-sentry-dsn
VITE_APP_TITLE=Masari Wellness and Spa
```

## Deployment Workflow

### Automatic Deployment (Main Branch)
1. Push to `main` branch
2. GitHub Actions runs CI pipeline:
   - Linting & code formatting checks
   - Unit tests with coverage
   - Production build
   - Security scanning
3. On success, automatically deploys to Netlify
4. Lighthouse performance audit runs

### Manual Deployment
```bash
npm run build
npm run preview  # Test production build locally

# Deploy using Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

## Monitoring & Debugging

### Sentry Dashboard
- Monitor errors in real-time
- Track performance metrics
- Set up alerts for critical errors

### Netlify Analytics
- View deployment history
- Check build logs
- Monitor site performance

### GitHub Actions
- Check workflow runs in "Actions" tab
- View build logs for failed workflows
- Access test coverage reports

## Rollback Procedure

### Via Netlify
1. Go to Netlify dashboard → Deploys
2. Find previous successful deployment
3. Click "Publish deploy"

### Via GitHub Actions
1. Go to GitHub → Actions
2. Find successful workflow run
3. Check deployment details

## Performance Optimization

### Bundle Analysis
```bash
npm run build
# Check dist/ folder size
```

### Code Coverage
```bash
npm run test:coverage
# View coverage report in coverage/index.html
```

## Security Checklist

- [ ] All secrets added to GitHub Actions
- [ ] `.env.local` is in `.gitignore`
- [ ] No hardcoded sensitive data
- [ ] Dependencies updated (`npm audit`)
- [ ] Security headers configured in netlify.toml
- [ ] HTTPS enabled on Netlify
- [ ] Sentry DSN not exposed in client

## Debugging Deployment Issues

### Build Fails
1. Check GitHub Actions logs
2. Verify Node version compatibility
3. Ensure all environment variables set
4. Check dependency conflicts

### Deployment Fails
1. Verify Netlify auth token valid
2. Check site ID is correct
3. Review Netlify build logs
4. Check for function deployment issues

### Runtime Errors
1. Check browser console for errors
2. Monitor Sentry dashboard
3. Review application logs
4. Check environment variables in Netlify deploy settings

## Support & Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Netlify Docs](https://docs.netlify.com/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Sentry Docs](https://docs.sentry.io/)
