import { screen } from '@testing-library/react';
import NavBar from './NavBar';
import '@testing-library/jest-dom';
import { renderWithRedux } from '@/lib/utils/testUtils';

describe('NavBar', () => {
  it('The NavBar has been rendered with MainHeader, Menu and SocialFooter', () => {
    renderWithRedux(<NavBar />);

    const mainHeader = screen.getByTestId('mainHeader');
    const menu = screen.getByTestId('menu');
    const socialFooter = screen.getByTestId('socialFooter');

    expect(mainHeader && menu && socialFooter).toBeTruthy();
  });
});
