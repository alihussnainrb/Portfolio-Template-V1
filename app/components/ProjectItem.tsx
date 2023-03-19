


'use client';
import { FaGithub, FaRegFolder } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Link from "next/link";
import { CSSProperties } from 'react';
import type { Project } from '@/data/projectsList';





export function ProjectItem({ rtl = false, className = "", style = {}, key, project }: { project: Project, className?: string; rtl?: boolean; style?: CSSProperties, key?: any }) {
    return (
        <div className={"bg-theme-light rounded px-6 py-8 cursor-pointer h-full transition hover:-translate-y-3 " + className} style={style}>
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
                <Link href='#' className='text-gray-300 text-lg font-bold transition hover:text-green-500'>
                    {project.name}
                </Link>
                <p className="text-gray-300/80 text-sm font-normal mt-4">
                    {project.description}
                </p>
                <div className="mt-8 flex gap-x-4 gap-y-1 flex-wrap">
                    {
                        project.tags.map((tag) => (
                            <p key={tag} className="text-gray-300/60 text-xs font-normal">
                                {tag}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
