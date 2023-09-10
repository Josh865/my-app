import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  return <main className="container pt-6">{children}</main>;
}
