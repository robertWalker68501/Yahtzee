'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

const SiteLogo = ({
  href,
  linkClasses,
  icon: Icon,
  iconClasses,
  text = 'YAHTZEE',
  textClasses,
  onClick,
}: SiteLogoProps) => {
  return (
    <Link
      href={href}
      className={cn('flex items-center gap-3', linkClasses)}
      onClick={onClick}
    >
      {Icon && <Icon className={cn('size-8', iconClasses)} />}
      <span className={cn('text-3xl font-medium', textClasses)}>{text}</span>
    </Link>
  );
};

export default SiteLogo;
