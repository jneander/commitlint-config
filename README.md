# @jneander/commitlint-config

Shareable [commitlint](https://commitlint.js.org/) configuration for consistent commits across
repositories.

## Installation

```console
npm install @commitlint/cli @jneander/commitlint-config --save-dev
```

## Usage

Add this to your `package.json`:

```json
// package.json
{
  "scripts": {
    "lint:commits": "commitlint --from origin/main --to HEAD"
  },
  "commitlint": {
    "extends": "@jneander/commitlint-config"
  }
}
```

Now when you run `npm run lint:commits` commitlint will lint your recent commits.
