'use client'
import { FaCaretRight } from "react-icons/fa";
import { FromBottomReveal } from "@/shared_utils/RevealComponents";
import { useState } from "react";

export default function ExperienceSection() {
  const tabs = ["Machine Intelligence 6"];
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <section id="experience" className='mt-40 pb-10 mx-auto max-w-screen-lg px-16'>
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
          <div className="flex gap-10 mt-20">
            <nav className="flex flex-col border-l-4 border-white/40 text-sm font-medium">
              {tabs.map((tab, index) => (
                <a key={tab} onClick={() => setCurrentTabIndex(index)}
                  className={`-ml-1 text-base py-2.5 min-w-max px-6 cursor-pointer font-medium
                     ${currentTabIndex === index ? " text-green-500 border-l-4 border-current font-semibold " : " text-gray-300/70 "}
                     hover:text-green-500 hover:bg-gray-300/20 transition hover:font-semibold`}>
                  {tab}
                </a>
              ))}
            </nav>
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
