import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

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

describe('Shop page renders tickets/gear links', () => {
  test('Tickets tab renders', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Shop'));
    expect(screen.getByText('Tickets')).toBeInTheDocument();
  })
  test('Gear tab renders', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Shop'));
    expect(screen.getByText('Gear')).toBeInTheDocument();
  })
})

describe('Tickets page renders', () => {
  test('Both tickets sections render', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Shop'));
    await userEvent.click(screen.getByText('Tickets'));
    expect(screen.getByText('Individual Tickets')).toBeInTheDocument();
    expect(screen.getByText('Season Tickets')).toBeInTheDocument();
  })
  test('All individual tickets render', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Shop'));
    await userEvent.click(screen.getByText('Tickets'));
    let flyers = (screen.getAllByText('Carolina Flyers'))
    expect(flyers.length).toBe(2);
    expect(screen.queryByText('New York Empire')).not.toBeInTheDocument();
    expect(screen.getByText('Indianopolis Alley Cats')).toBeInTheDocument();
  })
  test('All season tickets render', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Shop'));
    await userEvent.click(screen.getByText('Tickets'));
    expect(screen.getByText('2023 Ambassador Pass')).toBeInTheDocument();
    expect(screen.queryByText('2023 Hustle Pass')).not.toBeInTheDocument();
    expect(screen.getByText('2023 Ambassador Pass')).toBeInTheDocument();
  })
})

describe('Gear page renders', () => {
  test('Each section header renders', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('Shop'));
    await userEvent.click(screen.getByText('Gear'));
    screen.getByRole('heading', {name: 'Replica Jerseys'});
    screen.getByRole('heading', {name: 'Apparel'});
    screen.getByRole('heading', {name: 'Discs'});
  })
  test('Jerseys render', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Shop'));
    await userEvent.click(screen.getByText('Gear'));
    expect(screen.getByText('2023 Home Kit')).toBeInTheDocument();
    expect(screen.getByText('2023 Away Kit')).toBeInTheDocument();
  })
  test('Apparel items render', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Shop'));
    await userEvent.click(screen.getByText('Gear'));
    expect(screen.getByText('ATL Hustle Purple Sun Hoodie')).toBeInTheDocument();
    expect(screen.getByText('ATL Hustle Purple T-Shirt')).toBeInTheDocument();
    expect(screen.getByText('ATL Hustle Polo')).toBeInTheDocument();
    expect(screen.getByText('ATL Hustle 5 Panel Hat')).toBeInTheDocument();
  })
  test('Discs render', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Shop'));
    await userEvent.click(screen.getByText('Gear'));
    expect(screen.getByText('ATL Hustle Game Disc')).toBeInTheDocument();
    expect(screen.getByText('Hustle Futures Disc')).toBeInTheDocument();
    expect(screen.getByText('ATL Hustle Peach Disc')).toBeInTheDocument();
  })
})
