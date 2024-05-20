import "./global.css";

export const metadata = {
  title: {
    default: "HRR..",
    template: "%s | HRR..",
  },
  description: "Manage your employees in just one app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">{children}</body>
    </html>
  );
}
