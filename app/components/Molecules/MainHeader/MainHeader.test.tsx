import { render, screen } from '@testing-library/react';
import MainHeader from './MainHeader';
import '@testing-library/jest-dom';

describe('MainHeader', () => {
  it('The MainHeader component is rendered correctly', () => {
    render(<MainHeader />);
    const mainHeader = screen.getByTestId('mainHeader');

    expect(mainHeader).toBeInTheDocument();
    expect(mainHeader.querySelector('h1')).toHaveClass('font-bold text-4xl');
    expect(mainHeader.querySelector('h2')).toHaveClass('font-bold text-xl');
    expect(mainHeader.querySelector('p')).toHaveClass('pt-2 text-emerald-700');
  });
});
