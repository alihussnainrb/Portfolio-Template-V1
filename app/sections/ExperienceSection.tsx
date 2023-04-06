'use client'
import { FaCaretRight } from "react-icons/fa";
import { FromBottomReveal } from "@/shared_utils/RevealComponents";
import { useState } from "react";

export default function ExperienceSection() {
  const tabs = [
    "Machine Intelligence 6",
  ];
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <section id="experience" className='mt-40 pb-10 mx-auto max-w-screen-lg px-5 md:px-10 lg:px-16'>
      <div className="max-w-4xl mx-auto gap-16">
        <FromBottomReveal>
          <div className='flex items-center'>
            <h2 className='font-semibold text-white text-4xl min-w-max'>
              <span className='text-green-500 mr-4 text-3xl'>02.</span>
              Where I&apos;ve Worked
            </h2>
            <div className='ml-10 w-80 h-[1px] bg-white/30'></div>
          </div>
        </FromBottomReveal>
        <FromBottomReveal y={150}>
          <div className="flex flex-col lg:flex-row gap-10 mt-20">
            <div className="overflow-x-scroll lg:overflow-x-visible">
              <nav className="flex lg:flex-col lg:gap-0 min-w-max border-b-4 lg:border-l-4 lg:border-b-0 border-white/40 text-sm font-medium">
                {
                  tabs.map((tab, index) => (
                    <a key={index} onClick={() => setCurrentTabIndex(index)}
                      className={`-mb-1 lg:-ml-1 lg:mb-0 text-base py-2.5 px-6 lg:px-6 cursor-pointer font-medium min-w-max 
                     ${currentTabIndex === index ?
                          " text-green-500 border-b-4 lg:border-l-4 lg:border-b-0 border-green-500 font-semibold "
                          : " text-gray-300/70 "
                        }
                     hover:text-green-500 hover:bg-gray-300/20 transition hover:font-semibold`}>
                      {tab}
                    </a>
                  ))
                }
              </nav>
            </div>
            <div className="pt-2">
              <h3 className="text-xl font-medium text-white">Web Developer <span className="text-green-500">@ {tabs[currentTabIndex]}</span></h3>
              <p className="text-base text-white mt-1 font-normal">Jan 2023 - Present</p>
              <ul className="flex gap-4 flex-col mt-5">
                <li className="text-base font-normal text-gray-300/70 list-non flex gap-3">
                  <FaCaretRight className="text-green-500 min-w-max mt-1.5" />
                  <span>Write modern, performant, maintainable code for a diverse array of client and internal projects</span>
                </li>
                <li className="text-base font-normal text-gray-300/70 list-none flex gap-3">
                  <FaCaretRight className="text-green-500 min-w-max mt-1.5" />
                  <span>Work with a variety of different languages, platforms, frameworks, and content management systems such as HTML, CSS, JavaScript, TypeScript, Gatsby, Vite, React, Sanity and Next.</span>
                </li>
                <li className="text-base font-normal text-gray-300/70 list-none flex gap-3">
                  <FaCaretRight className="text-green-500 min-w-max mt-1.5" />
                  <span>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</span>
                </li>
              </ul>
            </div>
          </div>
        </FromBottomReveal>
      </div>
    </section>
  );
}
