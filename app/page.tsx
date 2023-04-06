import { FaGithub, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa"
import { getFeaturedProjects, getProjects } from "./cms/projects";
import HomeSection from "./sections/HomeSection";
import AboutMeSection from "./sections/AboutMeSection";
import ExperienceSection from "./sections/ExperienceSection";
import WorkSection from "./sections/WorkSection";
import ContactSection from "./sections/ContactSection";
import TestimonialSection from "./sections/TestimonialSection";



// const HomeSection = dynamic(() => import('./sections/HomeSection'))
// const AboutMeSection = dynamic(() => import('./sections/AboutMeSection'))
// const ExperienceSection = dynamic(() => import('./sections/ExperienceSection'))
// const WorkSection = dynamic(() => import('./sections/WorkSection'))
// const ContactSection = dynamic(() => import('./sections/ContactSection'))



export default async function Home() {
  const featuredProjects = await getFeaturedProjects();
  const projects = await getProjects(9);

  return (
    <main className='overflow-hidden max-w-screen-xl mx-auto relative'>
      <HomeSection />
      <AboutMeSection />
      <ExperienceSection />
      <WorkSection featuredProjects={featuredProjects} projects={projects} />
      {/* <TestimonialSection /> */}
      <ContactSection />

      <div className="hidden lg:block fixed bottom-0 z-50 right-10 2xl:right-20">
        <div className="flex flex-col items-center justify-center gap-8 after:content-[''] after:block after:h-32 after:w-px after:max-w-[1px] after:bg-white/50">
          <a href="mailto:alihussnainrrb@gmail.com" className="text-base font-medium inline-block text-white transition hover:text-green-500 hover:scale-105 cursor-pointer"
            style={{ WebkitWritingMode: "vertical-rl" }}>
            alihussnainrrb@gmail.com
          </a>
        </div>
      </div>
      <div className="hidden lg:block fixed bottom-0 z-50 left-10 2xl:left-20">
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
            <a href="skype:live:.cid.3d0c704665c411bb?chat">
              <FaSkype className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}





