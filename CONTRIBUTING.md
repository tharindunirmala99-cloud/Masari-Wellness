# Contributing Guidelines

## Code Standards

### Git Workflow
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Commit with clear messages: `git commit -m "feat: add new feature"`
3. Push and create a Pull Request
4. Ensure all checks pass before merging

### Commit Message Format
Follow Conventional Commits:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, missing semicolons, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Build process and dependencies

Example: `feat: add hero image carousel`

### Code Quality

#### Before Committing
```bash
npm run lint:fix      # Fix linting issues
npm run format        # Format code with Prettier
npm run test          # Run all tests
npm run build         # Verify build succeeds
```

#### Pull Request Requirements
- [ ] All tests pass (`npm run test`)
- [ ] No linting errors (`npm run lint`)
- [ ] Code is formatted (`npm run format`)
- [ ] Build succeeds (`npm run build`)
- [ ] Meaningful commit messages
- [ ] Updated documentation if needed

### Component Standards

#### File Structure
```
src/components/ComponentName/
├── ComponentName.jsx
├── ComponentName.module.css
├── ComponentName.test.jsx
└── index.js (optional)
```

#### Testing Requirements
- Write tests for new components and utilities
- Aim for >70% code coverage

## Development Workflow

### Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

### Available Commands
```bash
npm run dev            # Start dev server
npm run build          # Production build
npm run preview        # Preview production build
npm run test           # Run tests once
npm run test:ui        # Interactive test UI
npm run test:coverage  # Tests with coverage report
npm run lint           # Check code quality
npm run lint:fix       # Auto-fix linting issues
npm run format         # Format code with Prettier
npm run format:check   # Check format without changing
```

## Reporting Issues

When reporting bugs, include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment (OS, Node version, etc.)
- Screenshots if applicable
