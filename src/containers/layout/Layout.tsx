import { Email, Footer, Navbar, Social } from '@/containers';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <>
      <Navbar />
      <main className={`${className}`}>{children}</main>
      <Footer />
      {/* <Social /> */}
      {/* <Email /> */}
    </>
  );
};

export default Layout;
