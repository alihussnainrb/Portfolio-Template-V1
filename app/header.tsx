import Image from 'next/image'
import React from 'react'
import { FromTopReveal } from '../shared_utils/RevealComponents'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header aria-label="Site Header" className='pt-4'>
            <div className="mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex h-16 items-center justify-between">
                    <FromTopReveal>
                        <a className="block text-green-500 font-bold text-3xl" href="/">
                            {/* <span className='text-white/80'>{"<"}</span>
                            A<span className='text-white/80'>{" / "}</span>H
                            <span className='text-white/80'>{">"}</span> */}
                            <Image src="/icons/logo.svg" height={60} width={60} alt="" />
                        </a>
                    </FromTopReveal>

                    <div className="md:flex md:items-center md:gap-6">
                        <nav aria-label="Site Nav" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <FromTopReveal duration={.4}>
                                        <a href="/#about" className="text-white transition hover:text-green-500 font-medium">
                                            <span className='text-green-500 mr-1'>01. </span>
                                            About
                                        </a>
                                    </FromTopReveal>
                                </li>
                                <li>
                                    <FromTopReveal duration={.4} delay={0.2}>
                                        <a href="/#experience" className="text-white transition hover:text-green-500 font-medium">
                                            <span className='text-green-500 mr-1'>02. </span>
                                            Experience
                                        </a>
                                    </FromTopReveal>
                                </li>
                                <li>
                                    <FromTopReveal duration={.4} delay={0.4}>
                                        <a href="/#work" className="text-white transition hover:text-green-500 font-medium">
                                            <span className='text-green-500 mr-1'>03. </span>
                                            Work
                                        </a>
                                    </FromTopReveal>
                                </li>
                                <li>
                                    <FromTopReveal duration={.4} delay={0.6}>
                                        <a href="/#contact" className="text-white transition hover:text-green-500 font-medium">
                                            <span className='text-green-500 mr-1'>04. </span>
                                            Contact
                                        </a>
                                    </FromTopReveal>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <FromTopReveal duration={.4} delay={0.8}>
                                    <a href="/" className="border border-green-500 rounded-md px-4 py-1.5 md:py-2 text-sm font-medium text-green-500 shadow hover:bg-green-500/20">
                                        View Resume
                                    </a>
                                </FromTopReveal>
                            </div>

                            {/* <div className="block md:hidden">
                                <button
                                    className="rounded p-2 text-white/80 transition hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}