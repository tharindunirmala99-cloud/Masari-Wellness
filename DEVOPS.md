# DevOps Guidelines

This document outlines the DevOps practices, CI/CD pipeline, and deployment strategy for Masari Wellness and Spa.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      GitHub Repository                      │
└────────────────┬────────────────────────────────────────────┘
                 │ Push to main/develop
                 ▼
┌─────────────────────────────────────────────────────────────┐
│            GitHub Actions CI/CD Pipeline                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  │  Lint    │  │   Test   │  │  Build   │  │ Security  │  │
│  └──────────┘  └──────────┘  └──────────┘  └───────────┘  │
└────────────────┬────────────────────────────────────────────┘
                 │ On Success
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                   Netlify Deployment                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Production Environment (main)                        │  │
│  │ - CDN Distribution                                   │  │
│  │ - SSL/TLS Certificate                               │  │
│  │ - Automatic Backups                                 │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────┬────────────────────────────────────────────┘
                 │
    ┌────────────┴────────────┬──────────────────┐
    ▼                         ▼                  ▼
┌─────────────┐      ┌──────────────┐    ┌─────────────┐
│   Sentry    │      │ Lighthouse   │    │  Analytics  │
│ (Errors)    │      │(Performance) │    │  (Usage)    │
└─────────────┘      └──────────────┘    └─────────────┘
```

## CI/CD Pipeline Stages

### 1. Lint Stage ✓
- **Tool:** ESLint
- **Configuration:** `.eslintrc.cjs`
- **Action:** Checks code quality and consistency
- **Failure:** Blocks PR/deployment

### 2. Test Stage ✓
- **Framework:** Vitest + React Testing Library
- **Coverage:** Target >70%
- **Reports:** Codecov integration
- **Failure:** Blocks deployment

### 3. Build Stage ✓
- **Tool:** Vite
- **Optimization:** Tree-shaking, code splitting
- **Output:** `/dist` directory
- **Bundle Analysis:** Monitors build size

### 4. Security Stage ✓
- **npm audit:** Dependency vulnerability check
- **Snyk:** Advanced security scanning (optional)
- **Failure:** Warning (non-blocking)

### 5. Deploy Stage ✓
- **Platform:** Netlify
- **Trigger:** Successful main branch push
- **Zero-downtime:** Atomic deployments
- **Preview:** Branch deployments for PRs

### 6. Monitor Stage ✓
- **Error Tracking:** Sentry
- **Performance:** Lighthouse CI
- **Status:** Real-time alerts

## Branch Strategy

```
main (production)
 ├── Protected branch
 ├── Requires passing CI
 ├── Requires code review
 └── Auto-deploys on merge

develop (staging)
 ├── Integration branch
 ├── Runs CI only
 └── Deploy preview on PR

feature/feature-name
 ├── Created from develop
 ├── PR to develop
 └── Auto preview deployment
```

## Environment Management

| Environment | Branch | Auto-Deploy | Monitoring |
|-------------|--------|-------------|-----------|
| Production  | main   | Yes         | Full      |
| Staging     | develop| Manual      | Partial   |
| Development | local  | No          | Dev only  |

## Security Best Practices

### 1. Secrets Management
- ✓ Store secrets in GitHub Actions
- ✓ Use environment variables
- ✓ Rotate tokens regularly
- ✓ Never commit `.env` files

### 2. Code Security
- ✓ Dependency vulnerability scanning
- ✓ Static code analysis
- ✓ SAST (Static Application Security Testing)
- ✓ Regular security audits

### 3. Network Security
- ✓ HTTPS enforced (Netlify)
- ✓ Security headers configured
- ✓ CORS properly configured
- ✓ CSP (Content Security Policy) headers

### 4. Data Security
- ✓ No sensitive data in client code
- ✓ API keys in environment variables
- ✓ Regular backups
- ✓ GDPR compliance ready

## Monitoring & Alerting

### Error Tracking (Sentry)
```javascript
// Automatic error capture
- Unhandled exceptions
- Promise rejections
- Console errors
- Network errors

// Alerts configured for:
- Critical errors (immediate)
- Error spike detection
- New error types
```

### Performance Monitoring (Lighthouse)
```
- Core Web Vitals
- lighthouse_score_performance
- lighthouse_score_accessibility
- lighthouse_score_seo
- lighthouse_score_pwa
```

### Uptime Monitoring
- Netlify status page
- GitHub status page
- Real-time alerting

## Rollback Strategy

### Automatic Rollback
- Failed deployment rolls back automatically
- Previous successful build deployed

### Manual Rollback
```bash
# Via Netlify dashboard
1. Deploys → Previous successful deploy
2. Click "Publish deploy"

# Instant rollback (< 1 minute)
```

## Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | > 90 | - |
| First Contentful Paint | < 1.8s | - |
| Largest Contentful Paint | < 2.5s | - |
| Cumulative Layout Shift | < 0.1 | - |
| Build Time | < 60s | - |
| Bundle Size | < 200KB | - |

## Disaster Recovery

### Data Loss Prevention
- ✓ Git history protected
- ✓ Netlify automatic backups
- ✓ Multiple deployment regions

### Recovery Time Objective (RTO)
- Production: < 5 minutes
- Staging: < 15 minutes

### Recovery Point Objective (RPO)
- All commits preserved
- Last successful build available

## Cost Optimization

### Current Services
- Netlify: Starter plan (~$0-50/month)
- GitHub Actions: Free tier (2000 min/month)
- Sentry: Starter plan (~$29/month)

### Optimization Tips
- Monitor build times
- Optimize bundle size
- Use edge caching
- Archive old logs

## Compliance

- ✓ GDPR compliant
- ✓ CCPA ready
- ✓ Accessibility (WCAG 2.1)
- ✓ Security headers configured
- ✓ HTTPS enforced

## Maintenance Schedule

| Task | Frequency |
|------|-----------|
| Dependency updates | Weekly |
| Security audit | Monthly |
| Performance review | Weekly |
| Backup verification | Monthly |
| Incident review | As needed |

## Support & Escalation

1. **Development Team**: Issues with code
2. **DevOps Lead**: Infrastructure issues
3. **Security Team**: Security concerns
4. **Netlify Support**: Hosting issues
5. **Sentry Support**: Monitoring issues

## Related Documents

- [Deployment Guide](./DEPLOYMENT.md)
- [Contributing Guidelines](./CONTRIBUTING.md)
- [README.md](./README.md)
