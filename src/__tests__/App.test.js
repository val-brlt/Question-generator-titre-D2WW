import { render, screen } from '@testing-library/react';
import App from '../pages/App';

test('render page accueil', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
