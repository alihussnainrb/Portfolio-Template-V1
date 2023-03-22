import { FaGithub, FaRegFolder } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Link from "next/link";
import { CSSProperties } from 'react';
import type { Project } from '@/data/projectsList';



type Props = {
    project: Project
    className?: string
    rtl?: boolean
    lgText?: boolean
    style?: CSSProperties
}

export function ProjectItem({
    rtl = false, className = "",
    style = {}, project,
    lgText: lgText = false,
}: Props
) {
    return (
        <div className={"bg-theme-light rounded px-6 py-8 cursor-pointer h-full transition duration-300 hover:-translate-y-3 " + className} style={style}>
            <div className="flex justify-between items-center">
                <FaRegFolder className="text-green-500 font-normal text-4xl" />
                <div className="flex gap-5">
                    <Link href={"#"}>
                        <FaGithub className="text-white font-normal text-xl transition hover:text-green-500" />
                    </Link>
                    <Link href={"#"}>
                        <FiExternalLink className="text-white font-normal text-xl transition hover:text-green-500" />
                    </Link>
                </div>
            </div>
            <div className='mt-8'>
                <Link href='#' className={'text-gray-300 font-bold transition hover:text-green-500 ' + (lgText ? "text-2xl" : "text-lg")}>
                    {project.name}
                </Link>
                <p className={"text-gray-300/80 font-normal mt-4 " + (lgText ? "text-base" : "text-sm")}>
                    {project.description}
                </p>
                <div className="mt-8 flex gap-x-4 gap-y-1 flex-wrap">
                    {
                        project.tags.map((tag) => (
                            <p key={tag} className={"text-gray-300/60 font-normal " + (lgText ? "text-sm" : "text-xs")}>
                                {tag}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
