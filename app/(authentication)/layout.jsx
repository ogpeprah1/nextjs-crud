import React from "react";

function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen bg-gray-800">{children}</body>
    </html>
  );
}

export default AuthLayout;
