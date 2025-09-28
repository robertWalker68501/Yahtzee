import Link from 'next/link';

const NavLink = ({ href, label }: NavLink) => {
  return (
    <Link
      href={href}
      className='tranistion-colors uppercase duration-300 ease-in-out hover:text-gray-400'
    >
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
