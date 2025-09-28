'use client';

import SiteLogo from '@/components/shared/SiteLogo';
import { BsDice6 } from 'react-icons/bs';
import { NAV_LINKS } from '@/constants';
import NavLink from '@/components/shared/navigation/NavLink';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-4'>
      <div>
        <SiteLogo
          href='/'
          text='YAHTZEE'
          icon={BsDice6}
        />
      </div>

      {/* Desktop navigation */}
      <div className='hidden items-center gap-6 sm:flex'>
        {NAV_LINKS.map(({ id, href, label }) => (
          <NavLink
            key={id}
            href={href}
            label={label}
          />
        ))}
      </div>

      {/* Auth buttons */}
      <div className='hidden items-center gap-6 sm:flex'>
        <Button>Register</Button>
        <Button>Login</Button>
      </div>

      {/* Mobile navigation */}
      <div className='sm:hidden'>{/* Mobile links */}</div>
    </nav>
  );
};

export default Navbar;
