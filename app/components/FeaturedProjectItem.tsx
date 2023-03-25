import { type Project } from "@/data/projectsList";
import Image from "next/image";




type Props = {
  project: Project,
  className?: string,
  rtl?: boolean,
}


export function FeaturedProjectItem({
  project,
  rtl = false,
  className = "",
}: Props
) {
  return (
    <div className={className + " featured-project-item " + (rtl ? "dir-rtl" : "")}>
      <div className="project-info">
        <p className="text-sm text-green-500 font-semibold">Featured Project</p>
        <a href="#" className="text-3xl font-bold text-white transition hover:text-green-400">{project.name}</a>
        <div className="tagline p-6 mt-2">
          <p className="text-base font-normal text-white">
            {project.description}
          </p>
        </div>
        <div className="flex gap-5 my-2 flex-wrap">
          {
            project.tags.map((tag, index) => (
              <p key={index} className="text-sm text-white/50">{tag}</p>
            ))
          }
        </div>
        <a href="#contact" className="border border-green-500 rounded-md px-6 py-3 md:py-2.5 text-sm font-medium text-green-500 shadow bg-green-500/5 hover:bg-green-500/20 inline-flex items-center">
          Learn More
        </a>
      </div>
      <div className="img-container h-[350px] relative group rounded-md overflow-hidden shadow-md shadow-green-300/40 transition blur-[1px] hover:blur-0">
        <Image src={"https:" + (project.image ?? "//source.unsplash.com/random/?coding")}
          height="350" width="700" className="object-cover object-center transition duration-1000 group-hover:scale-125" alt="" />
        <div className="absolute top-0 left-0 bg-green-400/30 group-hover:bg-green-400/0 z-[1] group-hover:border-transparent rounded-md transition w-full h-full"></div>
      </div>
    </div>
  );
}
