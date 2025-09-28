import { IconType } from 'react-icons';

declare global {
  type SiteLogoProps = {
    href: string;
    linkClasses?: string;
    icon?: IconType;
    iconClasses?: string;
    text: string;
    textClasses?: string;
    onClick?: () => void;
  };

  type NavLink = {
    href: string;
    label: string;
  };
}

export {};
