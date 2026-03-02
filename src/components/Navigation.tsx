"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className='flex gap-8'>
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`transition-colors ${
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "text-gray-600 hover:text-blue-600"
                        }`}>
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}
