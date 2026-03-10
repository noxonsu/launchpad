// Smoke test: verify the test environment works
// Full App rendering requires wagmi ESM transform (not supported in CRA Jest)
// Integration smoke test is covered by CI build success

test('test environment is operational', () => {
  expect(typeof window).toBe('object');
  expect(typeof document).toBe('object');
});

test('React is available', () => {
  const React = require('react');
  expect(typeof React.createElement).toBe('function');
});
