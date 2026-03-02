/**
 * Project type definition
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string;
    tags: string[];
    link?: string;
    github?: string;
    featured?: boolean;
    year?: number;
}

/**
 * Skill type definition
 */
export interface Skill {
    name: string;
    level: "beginner" | "intermediate" | "advanced" | "expert";
    category: "frontend" | "backend" | "devops" | "other";
}

/**
 * Experience type definition
 */
export interface Experience {
    id: string;
    role: string;
    company: string;
    period: {
        start: Date;
        end?: Date;
    };
    description: string;
    skills: string[];
}

/**
 * Blog post type definition
 */
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    date: Date;
    tags: string[];
    featured?: boolean;
}

/**
 * Contact form data
 */
export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
