
import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from 'react-bootstrap';

// Test to verify that react-bootstrap components can be imported and rendered
// This verifies that removing the external unpkg.com scripts doesn't break functionality
test('react-bootstrap Badge component renders without external scripts', () => {
  const { getByText } = render(<Badge>Test Badge</Badge>);
  expect(getByText('Test Badge')).toBeInTheDocument();
});

// Test to verify that React itself works (imported from node_modules, not external scripts)
test('React renders a simple component', () => {
  const TestComponent = () => <div>Hello World</div>;
  const { getByText } = render(<TestComponent />);
  expect(getByText('Hello World')).toBeInTheDocument();
});
