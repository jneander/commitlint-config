module.exports = {
  extends: ['@commitlint/config-conventional'],

  ignores: [
    // Ignore all release commits.
    message => /^chore\(release\):/m.test(message),
  ],

  rules: {
    'body-max-line-length': [1, 'always', 100],
  },
}
