'use client'
import Image from "next/image";
import { FaCaretRight, FaChevronRight } from "react-icons/fa"
import { FadeReveal, FromBottomReveal, FromLeftReveal, FromRightReveal, PopupReveal } from "../components/RevealComponents";
import { motion } from 'framer-motion'
import { useState } from "react";


export default function Home() {
  return (
    <main className='mx-auto max-w-screen-lg overflow-hidden'>
      <HomeSection />
      <AboutMeSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
    </main>
  )
}





function TestimonialSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What clients saying
        </h1>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="flex items-start max-w-6xl mx-auto mt-16">
          <button title="left arrow" className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div>
            <p className="flex items-center text-center text-gray-500 lg:mx-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
              eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
              minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
              fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
              quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
            </p>

            <div className="flex flex-col items-center justify-center mt-8">
              <Image className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <div className="mt-4 text-center">
                <h1 className="font-semibold text-gray-800 dark:text-white">Mia Brown</h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">Marketer</span>
              </div>
            </div>
          </div>

          <button title="right arrow" className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}





function ContactSection() {

  return (
    <section id="contact" className='mt-40 pb-10'>
      <div className="max-w-4xl mx-auto gap-16">
        <FromBottomReveal>
          <div className='flex flex-col justify-center texce items-center'>
            <span className='font-semibold text-green-500 text-base'>02. What&apos;s Next?</span>
            <h1 className='font-bold text-white text-5xl'>
              Get In Touch
            </h1>
          </div>
        </FromBottomReveal>
        <div className="mt-20 flex">
          <div className="w-1/2">
            <FromLeftReveal>
              <div>

              </div>
            </FromLeftReveal>
          </div>
          <div className="w-1/2">
            <FromRightReveal>
              <div className="p-8 bg-theme-light rounded theme-shadow">
                <form action="#" className="w-full">
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-nomral text-white">Your email address (So we can reply to you)</label>
                    <input type="email" id="email" className="py-3 px-5 theme-shadow appearance-none border-none outline-none rounded-sm bg-white/5 text-white min-w-full" placeholder="" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-nomral text-white">Subject</label>
                    <input type="email" id="email" className="py-3 px-5 theme-shadow appearance-none border-none outline-none rounded-sm bg-white/5 text-white min-w-full" placeholder="" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-nomral text-white">Message</label>
                    <textarea rows={6} id="email" className="py-3 px-5 theme-shadow appearance-none border-none outline-none rounded-sm bg-white/5 text-white min-w-full" placeholder=""></textarea>
                  </div>
                  <button type="button" className="py-3 px-5 mt-5 text-sm font-medium text-center text-white rounded bg-green-500 w-full hover:bg-green-600">Send message</button>
                </form>
              </div>
            </FromRightReveal>
          </div>
        </div>
      </div>
    </section >
  );
}







function ExperienceSection() {
  const tabs = ["Machine Intelligence 6", "AKSA-SDS"]
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <section id="experience" className='mt-40 pb-10'>
      <div className="max-w-4xl mx-auto gap-16">
        <FromBottomReveal>
          <div className='flex items-center'>
            <h1 className='font-semibold text-white text-4xl min-w-max'>
              <span className='text-green-500 mr-4 text-3xl'>02.</span>
              Where I&apos;ve Worked
            </h1>
            <div className='ml-10 w-80 h-[1px] bg-white/30'></div>
          </div>
        </FromBottomReveal>
        <FromBottomReveal y={150}>
          <div className="flex gap-10 mt-20">
            <nav className="flex flex-col border-l-2 border-white/30 text-sm font-medium">
              {
                tabs.map((tab, index) => (
                  <a key={tab} onClick={() => setCurrentTabIndex(index)}
                    className={`-ml-0.5 border-l-2 text-base 
                    border-current py-2.5 min-w-max px-6
                     ${currentTabIndex === index ? "text-green-500" : "text-white/40"}
                     hover:text-green-500 hover:bg-white/10 transition`
                    }>
                    {tab}
                  </a>
                ))
              }
            </nav>
            <div className="pt-2">
              <h3 className="text-xl font-medium text-white">Web Developer <span className="text-green-500">@ {tabs[currentTabIndex]}</span></h3>
              <p className="text-base text-white mt-1 font-normal">May 2018 - Present</p>
              <ul className="flex gap-4 flex-col mt-5">
                <li className="text-base font-medium list-none text-white/40 flex gap-3">
                  <FaCaretRight className="text-green-500 min-w-max mt-1.5" />
                  <span>Write modern, performant, maintainable code for a diverse array of client and internal projects</span>
                </li>
                <li className="text-base font-medium list-none text-white/40 flex gap-3">
                  <FaCaretRight className="text-green-500 min-w-max mt-1.5" />
                  <span>Work with a variety of different languages, platforms, frameworks, and content management systems such as HTML, CSS, JavaScript, TypeScript, Gatsby, Vite, React and Next.</span>
                </li>
                <li className="text-base font-medium list-none text-white/40 flex gap-3">
                  <FaCaretRight className="text-green-500 min-w-max mt-1.5" />
                  <span>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</span>
                </li>
              </ul>
            </div>
          </div>
        </FromBottomReveal>
      </div>
    </section >
  );
}




function HomeSection() {
  return (
    <section className='mt-16'>
      <FromBottomReveal>
        <p className='text-green-500 font-normal text-lg'>Hi, my name is</p>
      </FromBottomReveal>
      <FromBottomReveal>
        <h1 className='text-7xl font-bold text-white mt-4'>Ali Hussnain.</h1>
      </FromBottomReveal>
      <FromBottomReveal>
        <h1 className='text-6xl font-bold text-white/70 mt-2'>I build things for the web.</h1>
      </FromBottomReveal>
      <FromBottomReveal>
        <div className="mt-10 max-w-2xl">
          <p className="text-base font-normal text-gray-300/70">
            I&apos;m a web and mobile developer focused on creating seamless experiences that exceed user expectations.
            With expertise in design and development, I thrive on solving complex challenges and delivering high-quality products.
            <br /><br />
            Let&apos;s work together to bring your digital vision to life!
          </p>
        </div>
      </FromBottomReveal>
      <div className="mt-20">
        <FromBottomReveal>
          <a href="/" className="border border-green-500 rounded-md px-6 py-3 md:py-4 text-sm font-medium text-green-500 shadow hover:bg-green-500/20 inline-flex items-center">
            Let&apos;s Work Together <FaChevronRight className="ml-3" />
          </a>
        </FromBottomReveal>
      </div>
    </section>
  )
}



function AboutMeSection() {
  return (
    <section id="about" className='mt-40'>
      <div className="flex max-w-full gap-16">
        <div className="w-auto">
          <FromBottomReveal>
            <div className='flex items-center'>
              <h1 className='font-semibold text-white text-4xl min-w-max'>
                <span className='text-green-500 mr-4 text-2xl'>01.</span>
                About Me
              </h1>
              <div className='ml-10 w-80 h-[1px] bg-white/30'></div>
            </div>
          </FromBottomReveal>
          <FromBottomReveal y={100}>
            <p className='max-w-xl mt-10 text-base font-normal text-gray-300/70'>
              Hello! My name is <span className="font-bold">Ali</span> and I enjoy creating things that live on the internet.I&apos;m a software engineer specializing in building web and mobile developer with a passion for creating exceptional digital experiences that exceed user expectations. With years of experience in HTML, CSS, React.js, and Next.js, I have developed a deep understanding of how to craft functional, user-friendly, and visually stunning websites that help businesses achieve their goals.
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
        <div className="w-auto">
          <div className="mt-20 relative group">
            <FromBottomReveal delay={.3} y={100}>
              <Image src={'/images/my-image.jpg'} width="330" height="330" className="object-cover object-center rounded aspect-square" alt="" />
              <div className="absolute top-0 left-0 translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 rounded border-2 -z-[1] border-green-500 transition w-full aspect-square"></div>
            </FromBottomReveal>
          </div>
          <div className="px-0 py-16">
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
                  <span className="ml-1 min-w-max">Javascript</span>
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
                </li>
              </ul>
            </FromBottomReveal>
          </div>
        </div>
      </div>
    </section>
  );
}



function WorkSection() {
  return (
    <section id="work" className='mt-40'>
      <div className="flex align-middle gap-16">
        <div className="w-full">
          <FromBottomReveal y={100}>
            <FromBottomReveal className='flex items-center'>
              <h1 className='font-semibold text-white text-4xl min-w-max'>
                <span className='text-green-500 mr-4 text-2xl'>03.</span>
                Some Projects I&apos;ve Built
              </h1>
              <div className='ml-10 w-80 h-[1px] bg-white/30'></div>
            </FromBottomReveal>
            <FromBottomReveal y={100} className="mt-20 mb-32">
              <div className="flex flex-col gap-44">
                <FeaturedProjectItem />
                <FeaturedProjectItem rtl={true} />
                <FeaturedProjectItem />
                <FeaturedProjectItem rtl={true} />
                <FeaturedProjectItem />
              </div>
            </FromBottomReveal>
          </FromBottomReveal>
        </div>
      </div>
    </section>
  );
}




function FeaturedProjectItem({ rtl = false, className = "" }: { className?: string, rtl?: boolean }) {
  return (
    <FromBottomReveal y={100}>
      <div className={className + " featured-project-item " + (rtl ? "dir-rtl" : "")}>
        <div className="project-info">
          <p className="text-base text-green-500 font-bold">Featured Project</p>
          <a href="#" className="text-3xl font-bold text-white transition hover:text-green-400">WhatsApp Chatbot</a>
          <div className="tagline p-6 mt-2">
            <p className="text-base font-normal text-white">
              A minimal chatbot that uses WhatsApp Business API and provide the full whatsapp functionality, Additionaly it provides automation tools like auto reply (based on previous chat), scheduling messages and some other functions that whatsapp natively do not provide.
            </p>
          </div>
          <div className="flex gap-5 mt-2">
            <p className="text-sm text-white/50">VS Code</p>
            <p className="text-sm text-white/50">Next JS</p>
            <p className="text-sm text-white/50">WhatsApp API</p>
          </div>
        </div>
        <div className="img-container">
          <Image src={"/images/code.jpeg"} height="350" width="700" className="object-cover object-center" alt="" />
        </div>
      </div>
    </FromBottomReveal>
  )
}
