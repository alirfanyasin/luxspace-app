import React from "react";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import Sitemap from "parts/HomePage/Sitemap";
import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetails from "parts/Cart/ShippingDetails";
import Footer from "parts/Footer";

export default function Cart(props) {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}
