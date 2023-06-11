'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Header } from './components/header/header';

interface LayoutWrapper {
  children: ReactNode;
}
export const LayoutWrapper = ({ children }: LayoutWrapper) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Header />
      {children}
    </ThemeProvider>
  );
};
