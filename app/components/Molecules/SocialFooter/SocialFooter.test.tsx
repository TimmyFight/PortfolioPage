import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { SOCIAL_ITEMS } from '@/constants';

import SocialFooter from './SocialFooter';

describe('MainFooter', () => {
  it('The Social Links are rendered according to imported constant', () => {
    render(<SocialFooter />);
    const socialFooter = screen.getByTestId('socialFooter');
    const socialLinks = socialFooter.querySelectorAll('a');
    socialLinks.forEach((link: HTMLElement) => {
      const isLinkInConst = SOCIAL_ITEMS.find(
        (socialItem) => socialItem.href === link.getAttribute('href'),
      );
      expect(isLinkInConst).toBeDefined();
    });
  });
  it('The Social Links will be open in the new tab', () => {
    render(<SocialFooter />);
    const socialFooter = screen.getByTestId('socialFooter');
    const socialLinks = socialFooter.querySelectorAll('a');
    socialLinks.forEach((link: HTMLElement) => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });
});
