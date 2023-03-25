import { FromBottomReveal } from "@/shared_utils/RevealComponents"
import { FaGithub, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa"
import { getProjects } from "../cms/projects"
import { ProjectItem } from "../components/ProjectItem"


export const metadata = {
  title: 'Projects | Ali Hussnain',
  description: '',
}



export default async function Progects() {
  const projects = await getProjects(30);

  return (
    <main className='overflow-hidden max-w-screen-xl mx-auto relative'>
      <section className="p-16">
        <FromBottomReveal>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-extrabold text-white text-4xl'>
              My Projects
            </h1>
          </div>
        </FromBottomReveal>
        <div className="flex flex-col mt-24 gap-8">
          {
            projects.map((project, index) => {
              return (
                <div key={index} className="w-full">
                  <FromBottomReveal y={100} once={false}>
                    <ProjectItem project={project} variant="large" className="w-full hover:translate-y-0 border border-white/20 hover:bg-white/5" lgText={true} />
                  </FromBottomReveal>
                </div>
              )
            })
          }
        </div>
      </section>
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






