import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../scss/global.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MCDataForge: The Minecraft Data Pack For All Your Needs',
  description:
    'MCDataForge is a Minecraft data library that provides data packs for all your needs. You can implement these data packs in your websites, apps and games.',
  openGraph: {
    title: 'MCDataForge: The Minecraft Data Pack For All Your Needs',
    description:
      'MCDataForge is a Minecraft data library that provides data packs for all your needs. You can implement these data packs in your websites, apps and games.',
    type: 'website',
    locale: 'en',
    countryName: 'Netherlands',
    siteName: 'MCDataForge',
    url: 'https://MCDataForge.reedroux.biz'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
