import { render, screen } from '@testing-library/react';
import App from './App';

describe('Nav renders correctly', () => {
  test('links render', () => {
    render(<App />);
    screen.getByRole('list');
    let links = screen.getAllByRole('listitem');
    expect(links.length).toBe(3);
  })

  test('logo renders', () => {
    render(<App />);
    screen.getByRole('img');
  })
})


