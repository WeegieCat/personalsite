"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";

// サンプルプロジェクトデータ
const featuredProjects: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description:
            "Next.js + Tailwind CSS + TypeScript で構築した高速なECサイト。Cloudflare Workers でバックエンド処理を実装。",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
        link: "#",
        github: "#",
        featured: true,
        year: 2025,
    },
    {
        id: "2",
        title: "Real-time Chat Application",
        description:
            "WebSocket を使用したリアルタイムチャットアプリケーション。React + Node.js で実装し、数千のコネクションを処理可能。",
        tags: ["React", "Node.js", "WebSocket", "MongoDB"],
        link: "#",
        github: "#",
        featured: true,
        year: 2025,
    },
    {
        id: "3",
        title: "Design System Component Library",
        description:
            "再利用可能な UI コンポーネントライブラリ。Storybook で管理し、Tailwind CSS で統一されたデザイン。",
        tags: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
        link: "#",
        github: "#",
        featured: true,
        year: 2024,
    },
];

// スキルデータ
const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"],
    tools: ["Git", "Docker", "Cloudflare Workers", "Vercel", "GitHub"],
};

export default function HomePage() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />

            {/* Hero Section */}
            <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex-1'>
                <div className='max-w-4xl mx-auto text-center animate-fade'>
                    <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6'>
                        <span className='gradient-text'>Web Engineer</span>
                        <br />
                        <span className='text-gray-700'>
                            & Creative Developer
                        </span>
                    </h1>

                    <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed'>
                        Next.js、TypeScript、Tailwind CSS
                        を使った高速で拡張性の高いウェブサイト・アプリケーション開発。
                        Cloudflare Workers でのサーバーレス実装も得意です。
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link
                            href='/works'
                            className='px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold'>
                            プロジェクトを見る
                        </Link>
                        <Link
                            href='/inquiry'
                            className='px-8 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors font-semibold border border-gray-300'>
                            お問い合わせ
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
                <div className='max-w-6xl mx-auto'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
                            Featured Projects
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            最新の技術スタックで実装した注目プロジェクト。
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
                        {featuredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className='animate-fade'
                                style={{ animationDelay: `${index * 0.1}s` }}>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>

                    <div className='text-center'>
                        <Link
                            href='/works'
                            className='inline-block px-8 py-3 text-blue-600 hover:text-blue-700 font-semibold border-b-2 border-blue-600'>
                            すべてのプロジェクトを見る →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className='py-20 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-6xl mx-auto'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
                            Skills & Expertise
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            幅広い技術スタックと開発経験を持ちます。
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {/* Frontend */}
                        <div className='card p-8'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-6 flex items-center'>
                                <span className='w-3 h-3 bg-blue-600 rounded-full mr-3'></span>
                                Frontend
                            </h3>
                            <ul className='space-y-3'>
                                {skills.frontend.map((skill) => (
                                    <li
                                        key={skill}
                                        className='flex items-center text-gray-700'>
                                        <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Backend */}
                        <div className='card p-8'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-6 flex items-center'>
                                <span className='w-3 h-3 bg-purple-600 rounded-full mr-3'></span>
                                Backend
                            </h3>
                            <ul className='space-y-3'>
                                {skills.backend.map((skill) => (
                                    <li
                                        key={skill}
                                        className='flex items-center text-gray-700'>
                                        <span className='w-2 h-2 bg-purple-500 rounded-full mr-3'></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tools */}
                        <div className='card p-8'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-6 flex items-center'>
                                <span className='w-3 h-3 bg-pink-600 rounded-full mr-3'></span>
                                Tools & Deployment
                            </h3>
                            <ul className='space-y-3'>
                                {skills.tools.map((skill) => (
                                    <li
                                        key={skill}
                                        className='flex items-center text-gray-700'>
                                        <span className='w-2 h-2 bg-pink-500 rounded-full mr-3'></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600'>
                <div className='max-w-4xl mx-auto text-center text-white'>
                    <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
                        一緒にプロジェクトを作りませんか？
                    </h2>
                    <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                        新しいプロジェクト、改善提案、or 協業のお誘い。
                        <br />
                        お気軽にお問い合わせください。
                    </p>
                    <Link
                        href='/inquiry'
                        className='inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold'>
                        お問い合わせはこちら
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
