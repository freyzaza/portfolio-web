// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Nicholas – AI Enthusiast",
  description: "Portfolio landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
