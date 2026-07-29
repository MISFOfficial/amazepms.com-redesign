import React from "react";
import Navigation from "../Global/Navigation/Navigation";
import Footer from "../Global/Footer/Footer";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}

export default BaseLayout;
