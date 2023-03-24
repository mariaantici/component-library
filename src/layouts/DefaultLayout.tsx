import React from 'react';
import Header from '@/sections/Header';
import Sidebar from './Sidebar';
import Footer from '@/sections/Footer';

type DefaultLayoutProps = {
    children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div>
            <Header />
            <div className="h-16 sm:h-24" />
            <div className='max-w-7xl mx-auto flex flex-row px-6 sm:px-8 xl:px-0'>
                <div className='w-52'>
                    <Sidebar />
                </div>
                <main className='mx-auto'>
                    {children}
                    <Footer />
                </main>
            </div>
        </div>
    );
};