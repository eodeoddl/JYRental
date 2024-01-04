import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Navigation from '@/components/navigation/navigation_desktop';

export default function HeaderWithFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
