import React from "react";
import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import JustArrived from "parts/HomePage/JustArrived";
import Clients from "parts/Clients";
import Sitemap from "parts/HomePage/Sitemap";
import Footer from "parts/Footer";

import UseScrollAnchor from "helpers/hooks/UseScrollAnchor";
import UseModalDOM from "helpers/hooks/UseModalDOM";

export default function HomePage(props) {
  UseScrollAnchor();
  UseModalDOM();

  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
