import React from "react";
import Header from "parts/Header";
import PageErrorMessage from "parts/PageErrorMessage";
import Sitemap from "parts/HomePage/Sitemap";
import Footer from "parts/Footer";
export default function NotFound() {
  return (
    <>
      <Header />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}
