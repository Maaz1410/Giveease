// src/components/ui/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <header className="w-full py-4 bg-gray-800 text-white text-center">
        <h1>GiveEase</h1>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="w-full py-4 bg-gray-800 text-white text-center">
        <p>© 2025 GiveEase</p>
      </footer>
    </div>
  );
};

export default Layout;
