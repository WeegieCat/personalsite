"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem("theme");
            const prefersDark =
                typeof window !== "undefined" &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches;
            const theme = stored || (prefersDark ? "dark" : "light");
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
                setIsDark(true);
            } else {
                document.documentElement.classList.remove("dark");
                setIsDark(false);
            }
        } catch (e) {
            // ignore
        }
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        try {
            if (next) document.documentElement.classList.add("dark");
            else document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch (e) {
            // ignore
        }
    };

    return (
        <header className='fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-black/60 dark:border-gray-700'>
            <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <Link href='/' className='flex items-center gap-2'>
                        <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
                            <span className='text-white font-bold text-sm'>
                                F
                            </span>
                        </div>
                        <span className='hidden sm:inline font-bold text-lg'>
                            Feynman
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-8'>
                        <Link
                            href='/'
                            className='text-gray-700 hover:text-blue-600 transition-colors'>
                            Home
                        </Link>
                        <Link
                            href='/works'
                            className='text-gray-700 hover:text-blue-600 transition-colors'>
                            Works
                        </Link>
                        <Link
                            href='/blog'
                            className='text-gray-700 hover:text-blue-600 transition-colors'>
                            Blog
                        </Link>
                        <Link
                            href='/inquiry'
                            className='text-gray-700 hover:text-blue-600 transition-colors'>
                            Contact
                        </Link>
                    </div>

                    <div className='flex items-center gap-2'>
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label='Toggle theme'
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200'>
                            {isDark ? (
                                // Sun (light)
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-5 h-5'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.42-1.42M7.05 6.05 5.64 4.64M18.36 5.64l-1.42 1.41M6.34 17.66l-1.41 1.42'
                                    />
                                    <circle
                                        cx='12'
                                        cy='12'
                                        r='3'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                    />
                                </svg>
                            ) : (
                                // Moon (dark)
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-5 h-5'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'
                                    />
                                </svg>
                            )}
                        </button>

                        {/* Mobile menu button */}
                        <button
                            className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200'
                            onClick={() => setIsOpen(!isOpen)}>
                            <svg
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d={
                                        isOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className='md:hidden pb-4'>
                        <Link
                            href='/'
                            className='block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md'>
                            Home
                        </Link>
                        <Link
                            href='/works'
                            className='block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md'>
                            Works
                        </Link>
                        <Link
                            href='/blog'
                            className='block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md'>
                            Blog
                        </Link>
                        <Link
                            href='/inquiry'
                            className='block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md'>
                            Contact
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
