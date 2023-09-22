'use client';
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";
import { FromBottomReveal } from "../framer";

export default function AboutMeSection() {
  return (
    <section id="about" className='mt-32 lg:mt-40 mx-auto max-w-screen-lg px-5 md:px-10 lg:px-16'>
      <FromBottomReveal>
        <div className="flex items-center">
          <span className='font-semibold text-green-500 mr-4 text-2xl hidden md:inline-block'>01.</span>
          <h2 className='font-semibold text-white text-3xl lg:text-4xl'>
            About Me
          </h2>
        </div>
        {/* <div className='ml-10 w-80 h-[1px] hidden lg:block bg-white/30'></div> */}
      </FromBottomReveal>
      <div className="flex max-w-full gap-8 lg:gap-16 flex-col-reverse lg:flex-row">
        <div className="w-auto">
          <FromBottomReveal y={100}>
            <p className='lg:max-w-xl mt-10 text-base font-normal text-gray-300/70'>
              Hello! My name is <span className="font-bold">Ali</span> and I enjoy creating things that live on the internet.I&apos;m a fullstack developer with a passion for creating exceptional digital experiences that exceed user expectations. With years of experience in HTML, Styling (CSS/Tailwind/Bootstrap), Reactjs, Nextjs, Nodejs, MongoDB, Firebase flutter and other modern technologies, I have developed a deep understanding of how to craft functional, user-friendly, and visually stunning websites that help businesses achieve their goals.
              <br />
              In addition to web development, I have a strong background in mobile app development, with expertise in both Android Native and Flutter. Whether it&apos;s designing intuitive interfaces, integrating complex features, or optimizing performance, I have the skills to deliver high-quality mobile apps that meet the unique needs of each project.
              <br /><br />
              Throughout my career, I have maintained a strong focus on user-centered design, human-computer interaction, and accessibility. I believe that the best products are those that are easy to use, visually appealing, and provide a seamless user experience. To achieve this, I work closely with my clients to understand their unique needs and tailor my approach accordingly.
              <br /><br />
              My commitment to collaboration and communication means that I am always striving to exceed my clients expectations. I am comfortable working in both individual and team settings and am always looking for opportunities to learn and grow as a professional.
              <br /><br />
              If yo&apos;re looking for a highly skilled web and mobile developer who can help you achieve your digital goals, then look no further. I am confident that my skills, expertise, and passion for innovation can help bring your vision to life.
            </p>
          </FromBottomReveal>
        </div>
        <div className="w-full lg:w-[400px]">
          <div className="mt-10 md:mt-20 relative group">
            <FromBottomReveal delay={.3} y={100}>
              <Image src={'/images/about-img.webp'} width="400" height="400" className="object-cover w-full object-center rounded-tr rounded-bl aspect-square" alt="Banner Image" />
              {/* <div className="absolute top-0 left-0 translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 rounded-md border-2 -z-[1] border-green-500 transition w-full aspect-square"></div> */}
              <div className="absolute -top-1 -left-1 border-t-4 border-l-4 border-green-500 transition duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 -z-[1] rounded w-[40px] aspect-square"></div>
              <div className="absolute -bottom-1 -right-1 border-b-4 border-r-4 border-green-500 transition duration-500 group-hover:translate-x-2 group-hover:translate-y-2 -z-[1] rounded w-[40px] aspect-square"></div>
              <div className="absolute top-0 left-0 bg-green-400/30 group-hover:bg-green-400/0 z-[1] transition duration-500 w-full rounded-tr rounded-bl aspect-square"></div>
            </FromBottomReveal>
          </div>
          <div className="px-0 py-16 hidden">
            <FromBottomReveal y={100}>
              <ul className="flex gap-2 flex-col">
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">HTML</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">CSS</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">Tailwind CSS</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">Bootstrap</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">Javascript / Typescript</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">React JS</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">Next JS</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">Node JS</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">Mongodb</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">Contentful CMS</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                {/* <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">Android</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">Kotlin</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li>
                <li className="text-base font-normal list-none text-white/70 flex items-center gap-1">
                  <FaCaretRight className="text-green-500" />
                  <span className="ml-1 min-w-max">Flutter</span>
                  <div className='ml-5 w-full h-[1px] bg-white/20'></div>
                </li> */}
              </ul>
            </FromBottomReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
