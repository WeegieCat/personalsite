import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-gray-900 text-gray-300'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                {/* Main content */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                    {/* Brand */}
                    <div>
                        <div className='flex items-center gap-2 mb-4'>
                            <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
                                <span className='text-white font-bold text-sm'>
                                    F
                                </span>
                            </div>
                            <span className='font-bold text-white'>
                                Feynman
                            </span>
                        </div>
                        <p className='text-sm text-gray-400'>
                            Web Engineer & Creative Developer
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-white font-semibold mb-4'>
                            Quick Links
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    href='/'
                                    className='text-gray-400 hover:text-white transition-colors'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/projects'
                                    className='text-gray-400 hover:text-white transition-colors'>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/about'
                                    className='text-gray-400 hover:text-white transition-colors'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/contact'
                                    className='text-gray-400 hover:text-white transition-colors'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className='text-white font-semibold mb-4'>
                            Follow
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <a
                                    href='#'
                                    className='text-gray-400 hover:text-white transition-colors'>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-gray-400 hover:text-white transition-colors'>
                                    Twitter / X
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-gray-400 hover:text-white transition-colors'>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-gray-400 hover:text-white transition-colors'>
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className='border-t border-gray-800 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='text-sm text-gray-400'>
                            © {currentYear} Feynman. All rights reserved.
                        </p>
                        <div className='flex gap-6 text-sm'>
                            <Link
                                href='#'
                                className='text-gray-400 hover:text-white transition-colors'>
                                Privacy
                            </Link>
                            <Link
                                href='#'
                                className='text-gray-400 hover:text-white transition-colors'>
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
