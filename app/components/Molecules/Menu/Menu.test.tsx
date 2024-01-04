import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';

import { MAIN_MENU_ITEMS } from '@/constants';
import { renderWithRedux } from '@/lib/utils/testUtils';

import Menu from './Menu';

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
