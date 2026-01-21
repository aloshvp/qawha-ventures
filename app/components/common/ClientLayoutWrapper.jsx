"use client";
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientLayoutWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      // once: true,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
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
