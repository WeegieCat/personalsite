import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Works | Projects",
    description: "A showcase of my web engineering projects and portfolio work",
};

export default function WorksLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='min-h-screen pt-20'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                {children}
            </div>
        </div>
    );
}
