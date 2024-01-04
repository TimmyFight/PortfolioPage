import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Chip from './Chip';

describe('Chip', () => {
  it('The Chip rendered', () => {
    render(<Chip technology="Next.js" />);
    const chip = screen.getByTestId('chip');

    expect(chip.textContent).toBe('Next.js');
  });
});
