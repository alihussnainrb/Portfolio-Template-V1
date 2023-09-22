import AboutMeSection from "@/components/sections/AboutMeSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HomeSection from "@/components/sections/HomeSection";
import WorkSection from "@/components/sections/WorkSection";
import cmsApi from "@/server/cms-api";
import { FaGithub, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa"




export default async function Home() {
  const projects = await cmsApi.getProjects()


  return (
    <main className='overflow-hidden max-w-screen-xl mx-auto relative'>
      <HomeSection />
      <AboutMeSection />
      <ExperienceSection />
      <WorkSection featuredProjects={[]} projects={projects} />
      {/* <TestimonialSection /> */}
      <ContactSection />

      <div className="hidden lg:block fixed bottom-0 z-50 right-10 2xl:right-20">
        <div className="flex flex-col items-center justify-center gap-8 after:content-[''] after:block after:h-32 after:w-px after:max-w-[1px] after:bg-white/50">
          <a title="Email" href="mailto:alihussnainrrb@gmail.com" className="text-base font-medium inline-block text-white transition hover:text-green-500 hover:scale-105 cursor-pointer"
            style={{ WebkitWritingMode: "vertical-rl" }}>
            alihussnainrrb@gmail.com
          </a>
        </div>
      </div>
      <div className="hidden lg:block fixed bottom-0 z-50 left-10 2xl:left-20">
        <div className="flex flex-col items-center justify-center gap-8 after:content-[''] after:block after:h-32 after:w-px after:max-w-[1px] after:bg-white/50">
          <div className="flex flex-col justify-center gap-8">
            <a title="Github Account Link" href="https://github.com/alihussnainrb" target="_blank">
              <FaGithub className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
            </a>
            <a title="Twitter Account Link" href="https://twitter.com/alihussnainrb" target="_blank">
              <FaTwitter className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
            </a>
            <a title="Linkedin Account Link" href="https://www.linkedin.com/in/alihussnainrb" target="_blank">
              <FaLinkedinIn className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
            </a>
            <a title="Skype Account Link" href="skype:live:.cid.3d0c704665c411bb?chat">
              <FaSkype className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}





