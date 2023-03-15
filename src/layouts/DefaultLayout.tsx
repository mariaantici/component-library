import React from 'react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

type DefaultLayoutProps = {
    children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="mx-auto max-w-7xl flex-grow container px-6 sm:px-8 xl:px-0">{children}</main>
            <Footer />
        </div>
    );
};