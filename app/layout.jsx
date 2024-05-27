import "./global.css";

export const metadata = {
  title: {
    default: "Wilmar HR",
    template: "%s | Wilmar HR",
  },
  description: "Manage your employees in just one app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
