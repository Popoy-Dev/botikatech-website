import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BotikaTech — Offline Pharmacy Management Software',
  description:
    'BotikaTech is an offline pharmacy POS and management desktop app. Track inventory, sales, customers, and reports — all on your own computer. Download for macOS, Windows, and Linux.',
  keywords: [
    'pharmacy software',
    'pharmacy POS',
    'offline pharmacy management',
    'BotikaTech',
    'inventory management',
    'drugstore software',
  ],
  openGraph: {
    title: 'BotikaTech — Offline Pharmacy Management Software',
    description:
      'Run your pharmacy offline with BotikaTech. Inventory, sales, reports, and backups in one desktop app.',
    type: 'website',
  },
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
