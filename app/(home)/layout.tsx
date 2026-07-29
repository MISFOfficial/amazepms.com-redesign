import React from "react";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}

export default BaseLayout;
