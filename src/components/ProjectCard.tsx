import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className='group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300'>
            {/* Image */}
            {project.image && (
                <div className='relative h-48 overflow-hidden bg-gray-100'>
                    <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                </div>
            )}

            {/* Content */}
            <div className='p-6'>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                    {project.title}
                </h3>
                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                    {project.description}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className='inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700'>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className='flex gap-3 pt-4 border-t border-gray-100'>
                    {project.link && (
                        <Link
                            href={project.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium'>
                            View Project
                        </Link>
                    )}
                    {project.github && (
                        <Link
                            href={project.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-1 text-center px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium'>
                            GitHub
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
