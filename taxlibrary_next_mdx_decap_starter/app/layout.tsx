import '../styles/globals.css';
import HeaderTop from '../components/HeaderTop';
import Header from '../components/Header';
import Footer from '../components/Footer';
export const metadata = {
  title: 'The Tax Library - Professional UK Tax Information & Resources',
  description: 'Expert UK Tax Information at Your Fingertips',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeaderTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
