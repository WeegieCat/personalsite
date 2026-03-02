import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Web engineering articles and technical insights",
};

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='min-h-screen pt-20'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                {children}
            </div>
        </div>
    );
}
