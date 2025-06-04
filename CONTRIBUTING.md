# Contributing to Vanilla Design System

We love your input! We want to make contributing to Vanilla Design System as easy and transparent as possible.

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Create a changeset for your changes
7. Issue that pull request!

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## Setup

```bash
# Clone your fork
git clone https://github.com/<your-username>/vanilla-design-system.git
cd vanilla-design-system

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

## Development Workflow

### Running Development Servers

```bash
# Run all dev servers (Storybook, Docs, etc.)
pnpm dev

# Run specific apps
pnpm --filter @beauginbey/vanilla-storybook dev
pnpm --filter @beauginbey/vanilla-docs dev
```

### Making Changes

1. **Design Tokens**: Edit files in `packages/tokens/tokens/`
2. **Components**: Add/edit components in `packages/components/src/components/`
3. **Documentation**: Update MDX files in `apps/docs/pages/`
4. **Storybook**: Add stories in `apps/storybook/src/stories/`

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test -- --watch

# Run tests with coverage
pnpm test -- --coverage
```

### Linting and Formatting

```bash
# Run linters
pnpm lint

# Format code
pnpm format

# Type check
pnpm type-check
```

## Creating a Changeset

We use [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs.

```bash
# Create a changeset
pnpm changeset

# Follow the prompts:
# 1. Select which packages have changed
# 2. Select the type of change (major, minor, patch)
# 3. Write a summary of the changes
```

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update documentation if you're changing functionality
3. The PR will be merged once you have the sign-off of maintainers

## Component Guidelines

### Accessibility

- All interactive components must be keyboard accessible
- Use semantic HTML elements
- Include proper ARIA attributes
- Test with screen readers

### TypeScript

- Export prop types for all components
- Use strict typing (avoid `any`)
- Document complex types with JSDoc comments

### Styling

- Use design tokens for all values
- Follow the established patterns for vanilla-extract
- Ensure responsive behavior

### Testing

- Write unit tests for all logic
- Include accessibility tests
- Test all component variants

## Code Style

We use automated tools to maintain code quality:

- **ESLint** for JavaScript/TypeScript linting
- **Prettier** for code formatting
- **Stylelint** for CSS linting

Your code will be automatically formatted when you commit.

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Test additions or modifications
- `chore:` Maintenance tasks

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.