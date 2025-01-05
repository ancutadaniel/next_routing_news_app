import "./globals.css";

export const metadata = {
  title: "Main Layout",
  description: "Main Layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
