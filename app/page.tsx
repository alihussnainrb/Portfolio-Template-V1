'use client'
import { FaGithub, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa"
import { ContactSection } from "./sections/ContactSection";
import { AboutMeSection } from "./sections/AboutMeSection";
import { HomeSection } from "./sections/HomeSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { WorkSection } from "./sections/WorkSection";



export default function Home() {
  return (
    <main className='overflow-hidden max-w-screen-xl mx-auto relative'>
      <HomeSection />
      <AboutMeSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />

      <div className="fixed bottom-0 z-50 right-10 2xl:right-20">
        <div className="flex flex-col items-center justify-center gap-8 after:content-[''] after:block after:h-32 after:w-px after:max-w-[1px] after:bg-white/50">
          <a href="mailto:alihussnainrrb@gmail.com" className="text-base font-medium inline-block text-white transition hover:text-green-500 hover:scale-105 cursor-pointer"
            style={{ WebkitWritingMode: "vertical-rl" }}>
            alihussnainrrb@gmail.com
          </a>
        </div>
      </div>
      {/* style={{ left: "max(calc(((100vw - 1280px) / 2)), 10px)" }} */}
      <div className="fixed bottom-0 z-50 left-10 2xl:left-20">
        <div className="flex flex-col items-center justify-center gap-8 after:content-[''] after:block after:h-32 after:w-px after:max-w-[1px] after:bg-white/50">
          <div className="flex flex-col justify-center gap-8">
            <a href="https://github.com/alihussnainrb" target="_blank">
              <FaGithub className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
            </a>
            <a href="https://twitter.com/alihussnainrb" target="_blank">
              <FaTwitter className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/alihussnainrb" target="_blank">
              <FaLinkedinIn className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
            </a>
            {/* <FaInstagram className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-110 transition text-xl" /> */}
            <FaSkype className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
          </div>
        </div>
      </div>
    </main>
  )
}






