import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const today = new Date();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full text-base antialiased">
      <body className="grid min-h-full grid-rows-[auto_1fr_auto]">
        <header className="border-b bg-zinc-100 py-6">
          <div className="container">
            <div className="text-2xl font-semibold tracking-tight">Pokemon</div>
            <input />
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t bg-zinc-100 py-6">
          <div className="container">&copy; {today.getFullYear()}</div>
        </footer>
      </body>
    </html>
  );
}
