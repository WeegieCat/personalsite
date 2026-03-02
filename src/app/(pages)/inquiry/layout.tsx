import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Inquiry",
    description: "Get in touch with me for collaborations and inquiries",
};

export default function InquiryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='min-h-screen pt-20'>
            <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                {children}
            </div>
        </div>
    );
}
