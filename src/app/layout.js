import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Copyright Nic Inc. New Color</footer>
      </body>
    </html>
  );
}

export default RootLayout;
