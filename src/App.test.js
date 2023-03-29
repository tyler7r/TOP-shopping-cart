import { render, screen } from '@testing-library/react';
import RouteSwitch from './RouteSwitch';

test('renders learn react link', () => {
  render(<RouteSwitch />);
  screen.getByRole('heading', {name: 'Hello World'});
});
