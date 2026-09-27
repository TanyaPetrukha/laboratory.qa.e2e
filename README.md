## Description

This project is a learning environment for E2E testing with Playwright. It contains automated tests for various UI components and user interactions, helping QA engineers practice writing end-to-end tests.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in a specific file

```bash
npx playwright test tests/sortable-table.spec.ts
```

### Run tests in headed mode (see browser)

```bash
npx playwright test --headed
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### View test report

```bash
npx playwright show-report
```

**Author**: Tetiana Petrukha
