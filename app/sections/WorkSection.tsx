'use client';
import ProjectsList from "@/data/projectsList";
import { FromBottomReveal } from "@/shared_utils/RevealComponents";
import Link from "next/link";
import { FeaturedProjectItem } from "../components/FeaturedProjectItem";
import { ProjectItem } from "../components/ProjectItem";


export function WorkSection() {
  return (
    <section id="work" className='mt-40 px-16'>
      <div className="w-full">
        <FromBottomReveal y={100}>
          <FromBottomReveal className='flex items-center'>
            <h1 className='font-semibold text-white text-4xl min-w-max'>
              <span className='text-green-500 mr-4 text-2xl'>03.</span>
              Some Projects I&apos;ve Built
            </h1>
            <div className='ml-10 w-80 h-[1px] bg-white/30'></div>
          </FromBottomReveal>
          <FromBottomReveal y={100} className="mt-20">
            <div className="flex flex-col gap-32">
              {
                ProjectsList.filter((project) => project.featured).map((project, index) => {
                  return (
                    <div key={index}>
                      <FromBottomReveal y={200}>
                        <FeaturedProjectItem project={project} rtl={Math.floor(index % 2) === 0} className="w-full" />
                      </FromBottomReveal>
                    </div>
                  )
                })
              }
            </div>
          </FromBottomReveal>
        </FromBottomReveal>
      </div>
      <div className="mt-40">
        <FromBottomReveal>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-extrabold text-white text-3xl'>
              Other Noteworthy Projects
            </h1>
            <a href={"/projects"} className='decorated font-medium mt-2 text-green-500 text-base'>View All Projects</a>
          </div>
        </FromBottomReveal>
        <div className="grid grid-cols-3 mt-24 gap-6">
          {
            ProjectsList.slice(0, 9).map((project, index) => {
              return (
                <div key={index}>
                  <FromBottomReveal y={200} delay={Math.floor(index % 3) * 0.2}>
                    <ProjectItem project={project} className="w-full rotate-2" />
                  </FromBottomReveal>
                </div>
              )
            })
          }
        </div>
        <div className="flex items-center justify-center mt-20 gap-5">
          <button type="button" className="border border-green-500 rounded-md px-6 py-3 text-sm font-medium text-green-500 shadow bg-green-500/5 hover:bg-green-500/20 inline-flex items-center">
            View More
          </button>
          <a href={"/projects"} className="border border-green-500 rounded-md px-6 py-3 text-sm font-medium text-green-500 shadow bg-green-500/5 hover:bg-green-500/20 inline-flex items-center">
            Visit Projects Page
          </a>
        </div>
      </div>
    </section>
  );
}
