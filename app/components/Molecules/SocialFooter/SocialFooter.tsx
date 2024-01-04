import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SOCIAL_ITEMS } from '@/constants';
import Link from 'next/link';

const SocialFooter = () => {
  return (
    <footer
      data-testid="socialFooter"
      className="flex gap-6 items-center max-lg:justify-center lg:absolute lg:bottom-10 max-lg:mt-6"
    >
      {SOCIAL_ITEMS.map((social) => {
        return (
          <Link
            key={social.name}
            href={social.href}
            title={social.name}
            target="_blank"
          >
            {social.name === 'GitHub' && <GitHubIcon />}
            {social.name === 'LinkedIn' && <LinkedInIcon />}
          </Link>
        );
      })}
    </footer>
  );
};

export default SocialFooter;
