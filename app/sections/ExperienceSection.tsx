'use client'
import { FaCaretRight } from "react-icons/fa";
import { FromBottomReveal } from "@/shared_utils/RevealComponents";
import { useState } from "react";


type Work = {
  companyName: string
  duration: string
  position: string
  description: string
  outcomes: string[]
}

let workList: Work[] = [
  {
    companyName: "Machine Intelligence 6",
    position: "Web Developer",
    duration: "January 2023 - Present",
    description: "",
    outcomes: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, HTML, CSS, Bootstrap, Tailwind CSS, Vite, React and Blade.",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis."
    ]
  },
  {
    companyName: "Aura Grande",
    position: "Fullstack Developer",
    duration: "July 2021 - January 2023",
    description: "As part of my work at Aura Grande, I was involved in a project to design and develop an enterprise management system. This system was built using the Flutter and React.js frameworks, and its purpose was to help company streamline and manage their business operations more efficiently.",
    outcomes: [
      // "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      // "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, HTML, CSS, Bootstrap, Tailwind CSS, Vite, React and Blade.",
      // "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis."
    ]
  }
]

export default function ExperienceSection() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <section id="experience" className='mt-40 pb-10 mx-auto max-w-screen-lg px-5 md:px-10 lg:px-16'>
      <div className="max-w-4xl mx-auto gap-16">
        <FromBottomReveal>
          <div className="flex items-center">
            <span className='font-semibold text-green-500 mr-4 text-2xl hidden md:inline-block'>02.</span>
            <h2 className='font-semibold text-white text-3xl lg:text-4xl'>
              Where I&apos;ve Worked
            </h2>
          </div>
          {/* <div className='ml-10 w-80 h-[1px] hidden lg:block bg-white/30'></div> */}
        </FromBottomReveal>
        <FromBottomReveal y={150}>
          <div className="flex flex-col lg:flex-row gap-10 mt-10 lg:mt-20">
            <div className="overflow-x-scroll lg:overflow-x-visible">
              <nav className="flex lg:flex-col h-full lg:gap-0 min-w-max border-b-4 lg:border-l-4 lg:border-b-0 border-white/10 text-sm font-medium">
                {
                  workList.map((work, index) => (
                    <a key={index} onClick={() => setCurrentTabIndex(index)}
                      className={`-mb-1 lg:-ml-1 lg:mb-0 text-base py-2.5 px-6 lg:px-6 cursor-pointer font-medium min-w-max 
                     ${currentTabIndex === index ?
                          " text-green-500 border-b-4 lg:border-l-4 lg:border-b-0 border-green-500 font-semibold "
                          : " text-gray-300/70 "
                        }
                     hover:text-green-500 hover:bg-gray-300/20 transition hover:font-semibold`}>
                      {work.companyName}
                    </a>
                  ))
                }
              </nav>
            </div>
            <div className="pt-2">
              <h3 className="text-xl font-medium text-white">{workList[currentTabIndex].position} <span className="text-green-500">@ {workList[currentTabIndex].companyName}</span></h3>
              <p className="text-sm text-white mt-1 font-normal">{workList[currentTabIndex].duration}</p>
              <p className="text-base text-gray-300/70 mt-5 font-normal">{workList[currentTabIndex].description}</p>
              <ul className="flex gap-4 flex-col mt-5">
                {
                  workList[currentTabIndex].outcomes.map((outcome, index) => (
                    <li key={index} className="text-base font-normal text-gray-300/70 list-non flex gap-3">
                      <FaCaretRight className="text-green-500 min-w-max mt-1.5" />
                      <span>{outcome}</span>
                    </li>
                  ))
                }

              </ul>
            </div>
          </div>
        </FromBottomReveal>
      </div>
    </section>
  );
}
