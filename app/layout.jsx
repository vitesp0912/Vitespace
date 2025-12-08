import './globals.css';
import CustomCursor from '@/assets/CustomCursor';

export const metadata = {
  title: 'HUSTLE - Digital Presence, Made Easy',
  description: 'Websites, systems, and automation - everything your business needs in one place',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        {/* Site-wide custom cursor */}
        <CustomCursor />
      </body>
    </html>
  );
}
