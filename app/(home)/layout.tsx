import React from "react";
import Navigation from "../Global/Navigation/Navigation";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}

export default BaseLayout;
