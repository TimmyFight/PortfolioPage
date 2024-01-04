import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import { MAIN_MENU_ITEMS } from '@/constants';
import '@testing-library/jest-dom';
import { renderWithRedux } from '@/lib/utils/testUtils';

describe('Menu', () => {
  it('The Menu rendered with links according to imported constant', () => {
    renderWithRedux(<Menu />);
    const menu = screen.getByTestId('menu');
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach((link: HTMLElement) => {
      const isLinkInConst = MAIN_MENU_ITEMS.find(
        (menuItem) =>
          menuItem.href === link.getAttribute('href') &&
          menuItem.name === link.textContent,
      );

      expect(isLinkInConst).toBeDefined();
    });
  });
});
