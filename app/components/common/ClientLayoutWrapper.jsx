"use client";
import Header from './Header';
import Footer from './Footer';

const ClientLayoutWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default ClientLayoutWrapper;
