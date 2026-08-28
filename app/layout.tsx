import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cardboard Boat Float Lab',
  description: 'An interactive buoyancy and freeboard model for EGGN 1910 students.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
