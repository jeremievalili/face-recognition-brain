import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sign in form', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /sign in/i });
  expect(button).toBeInTheDocument();
});
