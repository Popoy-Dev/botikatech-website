import {
  Activity,
  Wallet,
  FlaskConical,
  ClipboardList,
  ShoppingCart,
  FileText,
  Users,
  Store,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

export const site = {
  name: 'BotikaTech',
  tagline: 'Offline pharmacy management, made simple.',
  description:
    'A complete pharmacy point-of-sale and management system that runs entirely on your own computer. No internet required, your data stays with you.',
  email: 'support@botikatech.com',
  facebookLabel: 'BotikaTech on Facebook',
  facebookUrl: 'https://www.facebook.com/',
};

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

// Mirrors the desktop app's sidebar modules (src/renderer/screens/Main.tsx).
export const features: Feature[] = [
  {
    title: 'Dashboard',
    description: 'See sales, profit, and stock health at a glance with clean charts and summaries.',
    icon: Activity,
  },
  {
    title: 'Cash Fund',
    description: 'Open and close the register, track cash on hand, and reconcile every shift.',
    icon: Wallet,
  },
  {
    title: 'Products',
    description: 'Manage your medicine catalog with prices, batches, and expiry tracking.',
    icon: FlaskConical,
  },
  {
    title: 'Inventory',
    description: 'Monitor stock levels, get low-stock visibility, and keep shelves accurate.',
    icon: ClipboardList,
  },
  {
    title: 'Orders',
    description: 'Ring up sales fast with a simple point-of-sale built for the counter.',
    icon: ShoppingCart,
  },
  {
    title: 'Reports',
    description: 'Generate sales and inventory reports for any date range in seconds.',
    icon: FileText,
  },
  {
    title: 'Customers',
    description: 'Keep a record of your regulars and their purchase history.',
    icon: Users,
  },
  {
    title: 'Shops',
    description: 'Manage your pharmacy details used across receipts and reports.',
    icon: Store,
  },
  {
    title: 'Backup',
    description: 'Export and restore your data so your records are always safe.',
    icon: ShieldCheck,
  },
];

export interface Step {
  title: string;
  description: string;
}

// Mirrors the activation flow in src/renderer/components/Settings.tsx.
export const activationSteps: Step[] = [
  {
    title: 'Download & install',
    description: 'Grab the installer for your operating system and set up BotikaTech in minutes.',
  },
  {
    title: 'Choose a plan & pay',
    description: 'Pick the plan that fits your pharmacy and complete payment to unlock premium access.',
  },
  {
    title: 'Receive your activation key',
    description: 'We send your unique activation key once your payment is confirmed.',
  },
  {
    title: 'Open Settings → Activation',
    description: 'In the app, go to Settings, select your plan duration, and paste the activation key.',
  },
  {
    title: 'You are activated',
    description: 'Premium features unlock instantly and your remaining days are shown in the app.',
  },
];

export interface Plan {
  name: string;
  duration: string;
  /** Placeholder price — update with your real pricing. */
  price: string;
  period: string;
  highlight?: boolean;
  features: string[];
}

// Plans match the activation durations offered in the desktop app.
export const plans: Plan[] = [
  {
    name: 'One Month',
    duration: 'onemonth',
    price: '₱—',
    period: '/ month',
    features: ['All features included', 'Single computer', 'Email & Facebook support'],
  },
  {
    name: 'Six Months',
    duration: 'sixmonth',
    price: '₱—',
    period: '/ 6 months',
    features: ['All features included', 'Single computer', 'Priority support', 'Save vs. monthly'],
  },
  {
    name: 'One Year',
    duration: 'oneyear',
    price: '₱—',
    period: '/ year',
    highlight: true,
    features: ['All features included', 'Single computer', 'Priority support', 'Best yearly value'],
  },
  {
    name: 'One-Time',
    duration: 'onetime',
    price: '₱—',
    period: 'once',
    features: ['All features included', 'Lifetime activation', 'Single computer', 'No recurring fees'],
  },
];
