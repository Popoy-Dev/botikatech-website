import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BotikaTech — Offline Pharmacy Management Software',
  description:
    'BotikaTech is an offline pharmacy POS and management desktop app. Track inventory, sales, customers, and reports on your own computer. Download the Windows installer first, with a macOS build also available.',
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
      'Run your pharmacy offline with BotikaTech. Download the Windows installer and manage inventory, sales, reports, and backups in one desktop app.',
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
