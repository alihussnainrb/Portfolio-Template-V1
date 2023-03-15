import Image from "next/image";
import { FaCaretRight, FaChevronRight } from "react-icons/fa"
import { FromLeftReveal, FromRightReveal, PopupReveal } from "./components/RevealComponents";


export default function Home() {
  return (
    <main className='mx-auto max-w-screen-lg'>
      <section className='mt-16'>
        <p className='text-green-500 font-normal text-lg'>Hi, my name is</p>
        <h1 className='text-7xl font-bold text-white mt-4'>Ali Hussnain.</h1>
        <h1 className='text-6xl font-bold text-white/70 mt-2'>I build things for the web.</h1>
        <div className="mt-10 max-w-2xl">
          <p className="text-base font-normal text-gray-300/70">
            &apos;m a web and mobile developer focused on creating seamless experiences that exceed user expectations.
            With expertise in design and development, I thrive on solving complex challenges and delivering high-quality products.
            <br /><br />
            &apos;s work together to bring your digital vision to life!
          </p>
        </div>
        <div className="mt-20">
          <FromLeftReveal>
            <a href="/" className="border border-green-500 rounded-md px-6 py-3 md:py-4 text-sm font-medium text-green-500 shadow hover:bg-green-500/20 inline-flex items-center">
              Let&apos;s Work Together <FaChevronRight className="ml-3" />
            </a>
          </FromLeftReveal>
        </div>
      </section>
      <section id="about" className='mt-40'>
        <div className="flex max-w-full gap-16">
          <div className="w-auto">
            <FromLeftReveal duration={.8}>
              <div className='flex items-center'>
                <h1 className='font-semibold text-white text-4xl min-w-max'>
                  <span className='text-green-500 mr-4 text-3xl'>01.</span>
                  About Me
                </h1>
                <div className='ml-10 w-80 h-[1px] bg-white/30'></div>
              </div>
            </FromLeftReveal>
            <FromLeftReveal duration={1.1}>
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
            </FromLeftReveal>
          </div>
          <div className="w-auto">
            <div className="mt-20 relative group">
              <FromRightReveal duration={1.5}>
                <Image src={'/images/my-image.jpg'} width="330" height="330" className="object-cover object-center rounded-md aspect-square" alt="" />
                <div className="absolute top-0 left-0 translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 rounded-md border-2 -z-[1] border-green-500 transition w-full aspect-square"></div>
              </FromRightReveal>
            </div>
            <div className="px-0 py-16">
              <FromRightReveal duration={1.5}>
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
              </FromRightReveal>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className='mt-40'>
        <div className="flex align-middle gap-16">
          <div className="w-full">
            <FromLeftReveal>
              <div className='flex items-center'>
                <h1 className='font-semibold text-white text-4xl min-w-max'>
                  <span className='text-green-500 mr-4 text-3xl'>03.</span>
                  Some Things I&apos;ve Built
                </h1>
                <div className='ml-10 w-80 h-[1px] bg-white/30'></div>
              </div>
            </FromLeftReveal>
            <div className="mt-20 mb-32">
              <PopupReveal>
                <FeaturedProjectItem />
              </PopupReveal>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}




function FeaturedProjectItem({ }: { className?: string; }) {
  return (
    <div className="featured-project-item text-end dir-rtl">
      <div className="project-info">
        <p className="text-base text-green-500 font-bold">Featured Project</p>
        <a href="#" className="text-3xl font-bold text-white transition hover:text-green-400">Project Name</a>
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
  )
}
