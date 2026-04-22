import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'TLH Global Careers | Healthcare Jobs in Germany',
  description: 'We connect qualified healthcare professionals with top employers in Germany.',
  icons: {
    icon: 'https://res.cloudinary.com/tlh01/image/upload/q_auto/f_auto/v1776471058/Round_Logo_nczoh2.png',
    shortcut: 'https://res.cloudinary.com/tlh01/image/upload/q_auto/f_auto/v1776471058/Round_Logo_nczoh2.png',
    apple: 'https://res.cloudinary.com/tlh01/image/upload/q_auto/f_auto/v1776471058/Round_Logo_nczoh2.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900 flex flex-col min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
