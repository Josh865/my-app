import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  return <div className="container pt-6">{children}</div>;
}
