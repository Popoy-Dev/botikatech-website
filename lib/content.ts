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
    'A complete pharmacy point-of-sale and management system that runs entirely on your own computer. Start with the Windows installer, with a macOS build also available.',
  facebookLabel: 'BotikaTech on Facebook',
  facebookUrl: 'https://www.facebook.com/botikatech',
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
    description:
      'Download the Windows .exe installer first for the fastest setup, then install and launch BotikaTech.',
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
  /** Display price shown on the pricing cards. */
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
    price: '₱99',
    period: '/ month',
    features: ['All features included', 'Single computer', 'Email & Facebook support'],
  },
  {
    name: 'Six Months',
    duration: 'sixmonth',
    price: '₱545',
    period: '/ 6 months',
    features: ['All features included', 'Single computer', 'Priority support', 'Save vs. monthly'],
  },
  {
    name: 'One Year',
    duration: 'oneyear',
    price: '₱999',
    period: '/ year',
    highlight: true,
    features: [
      'All features included',
      'Single computer',
      'Priority support',
      'Best yearly value',
      'About ₱2.74/day',
    ],
  },
  {
    name: 'One-Time',
    duration: 'onetime',
    price: '₱—',
    period: 'once',
    features: ['All features included', 'Lifetime activation', 'Single computer', 'No recurring fees'],
  },
];

export type UserProofType = 'image' | 'video';

export interface UserProofItem {
  type: UserProofType;
  title?: string;
  caption?: string;
  storeName?: string;
  imageSrc?: string;
  videoUrl?: string;
  facebookEmbedSrc?: string;
  embedHeight?: number;
  postUrl?: string;
}

/**
 * Social proof content for real stores/users.
 * - imageSrc should reference files from /public (e.g. /proof/store-1.jpg)
 * - videoUrl can be YouTube/Facebook links for fallback
 * - facebookEmbedSrc can use a Facebook plugin post.php URL
 */
export const userProofItems: UserProofItem[] = [
  {
    type: 'video',
    facebookEmbedSrc:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122179266452112517%26set%3Da.122094284954112517%26type%3D3&show_text=true&width=500',
    embedHeight: 250,
  },
  {
    type: 'video',
    facebookEmbedSrc:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbotikatech%2Fposts%2Fpfbid0yADRoVtfYa1sWenGMsuTcQYUZ7Q7GRgumGWfVKDSeH6PwJcmodUchuo1mZmge8PRl&show_text=true&width=500',
    embedHeight: 686,
  },
  {
    type: 'video',
    facebookEmbedSrc:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbotikatech%2Fposts%2Fpfbid0DMSarRyy2X6rkUF38XRuqvyjHSQ9nYkEA2axVnVxhQoEHPuLpF48rdvWkck7kiCcl&show_text=true&width=500',
    embedHeight: 745,
  },
  {
    type: 'video',
    facebookEmbedSrc:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbotikatech%2Fposts%2Fpfbid031QiinTuBWmPGw85BmANEgpWxemVTAkoAYgqfcgoiyX2p97addo6s8yW7JjcTUxT4l&show_text=true&width=500',
    embedHeight: 686,
  },
  {
    type: 'video',
    facebookEmbedSrc:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbotikatech%2Fposts%2Fpfbid0BxWxCFiy767hR5dJNFFjRLQnVNwKuGim1BGn4PD77jfYV1jbWRzU34HV7PZWQENal&show_text=true&width=500',
    embedHeight: 556,
  },
  {
    type: 'video',
    facebookEmbedSrc:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbotikatech%2Fposts%2Fpfbid02HUikYVM7VcsABg43Yab9NnfKzLasdk66Aoo7z6FV5jwNNnBuec1n69h2iMZQrHDAl&show_text=true&width=500',
    embedHeight: 679,
  },
  {
    type: 'video',
    facebookEmbedSrc:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbotikatech%2Fposts%2Fpfbid0Dj4keZRLr3FFCGrxSSMBcBJysR8PW7ggPWQQDmrTaiQSKgHtCxR2XAA8sDJs388Ml&show_text=true&width=500',
    embedHeight: 575,
  },
  {
    type: 'video',
    facebookEmbedSrc:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbotikatech%2Fposts%2Fpfbid02fPhzBuK8212ZCMpEgJajuhJ31F79ECUbjTG21QEWvHY9GkAchuuGsiA7bMAWghZRl&show_text=true&width=500',
    embedHeight: 556,
  },
  {
    type: 'video',
    facebookEmbedSrc:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbotikatech%2Fposts%2Fpfbid02GHoszc7KhAHeKmw9fiaMADZoJj5nhCtc1EW1fuvWufsc211u81kG2wRj1Se4Apsjl&show_text=true&width=500',
    embedHeight: 660,
  },
  {
    type: 'video',
    facebookEmbedSrc:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbotikatech%2Fposts%2Fpfbid02jcmuCgwPHBf2goHkYg5YUFQPGtgkiibYCuARycf17oeoZ99dnyPQkS2y9ciWtiTDl&show_text=true&width=500',
    embedHeight: 712,
  },
];
