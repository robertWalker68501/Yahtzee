import { ReactNode } from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-screen w-full flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
