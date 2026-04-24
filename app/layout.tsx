import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://tlhglobalcareers.com'),
  title: {
    default: 'TLH Global Careers | Healthcare Jobs in Germany',
    template: '%s | TLH Global Careers'
  },
  description: 'Bridging the gap between qualified healthcare professionals worldwide and top healthcare facilities in Germany. Specialized in nurse recruitment and relocation.',
  keywords: ['healthcare jobs Germany', 'nurse recruitment Germany', 'work in Germany for nurses', 'TLH Global Careers', 'medical jobs Europe'],
  authors: [{ name: 'TLH Global Careers' }],
  creator: 'TLH Global Careers',
  publisher: 'TLH Global Careers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: 'https://res.cloudinary.com/tlh01/image/upload/q_auto/f_auto/v1776471058/Round_Logo_nczoh2.png',
    shortcut: 'https://res.cloudinary.com/tlh01/image/upload/q_auto/f_auto/v1776471058/Round_Logo_nczoh2.png',
    apple: 'https://res.cloudinary.com/tlh01/image/upload/q_auto/f_auto/v1776471058/Round_Logo_nczoh2.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tlhglobalcareers.com',
    siteName: 'TLH Global Careers',
    title: 'TLH Global Careers | Healthcare Jobs in Germany',
    description: 'We connect qualified healthcare professionals with top employers in Germany. Start your career today.',
    images: [
      {
        url: 'https://res.cloudinary.com/tlh01/image/upload/v1776843538/tlh_global_about.jpg',
        width: 1200,
        height: 630,
        alt: 'TLH Global Careers - Healthcare Recruitment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TLH Global Careers | Healthcare Jobs in Germany',
    description: 'Bridging the gap between qualified healthcare professionals worldwide and top healthcare facilities in Germany.',
    images: ['https://res.cloudinary.com/tlh01/image/upload/v1776843538/tlh_global_about.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
