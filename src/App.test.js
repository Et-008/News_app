import { render, screen } from '@testing-library/react';
import App from './App';
import Navigation from './components/navigation/navbar/navbar';

test('renders Navbar', () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/News App/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Main Content', () => {
  render(<App />);
  const linkEl = screen.getByText(/Main_Content/i);
  expect(linkEl).toBeInTheDocument();
})
