import { FaGithub, FaRegFolder } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { CSSProperties } from 'react';
import type { Project } from '@/data/projectsList';



enum ProjectItemVariant {
    LARGE,
    SMALL
}

type Props = {
    project: Project
    className?: string
    lgText?: boolean
    variant?: "small" | "large"
    style?: CSSProperties
}



export function ProjectItem({
    className = "",
    style = {}, project,
    // lgText = false,
    variant = "small"
}: Props
) {
    return (
        <div className={"rounded px-6 py-8 h-full flex flex-col justify-between transition duration-300 hover:-translate-y-3 " + className} style={style}>
            <div>
                <div className="flex justify-between items-center">
                    {
                        variant === "small"
                            ? <FaRegFolder className="text-green-500 font-normal text-4xl" />
                            : <a href='#' className={'text-gray-300 font-bold transition hover:text-green-500 text-2xl'}>
                                {project.name}
                            </a>
                    }
                    <div className="flex gap-5">
                        <a aria-disabled={project.github === ""} href={project.github}>
                            <FaGithub className="text-white font-normal text-xl transition hover:text-green-500" />
                        </a>
                        <a aria-disabled={project.github === ""} href={project.preview}>
                            <FiExternalLink className="text-white font-normal text-xl transition hover:text-green-500" />
                        </a>
                    </div>
                </div>
                <div className='mt-8'>
                    {
                        variant === "small" &&
                        <a href='#' className={'text-gray-300 font-bold transition hover:text-green-500 text-lg'}>
                            {project.name}
                        </a>
                    }
                    <p className={"text-gray-300/80 font-normal mt-4 line-clamp-6 " + (variant === "large" ? "text-base" : "text-sm")}>
                        {project.description}
                    </p>
                </div>
            </div>
            <div className="mt-4 flex gap-x-4 gap-y-1 flex-wrap">
                {
                    project.tags.map((tag, index) => (
                        <li key={tag} className={"text-gray-300/60 font-normal " + (index === 0 ? "list-none " : "list-disc ") + (variant === "large" ? "text-sm" : "text-xs")}>
                            {tag}
                        </li>
                    ))
                }
            </div>
        </div>
    );

}
