'use client';
import { FaChevronRight } from "react-icons/fa";
import { FromBottomReveal } from "@/shared_utils/RevealComponents";
import { Player } from "@lottiefiles/react-lottie-player";
import Typewriter from 'typewriter-effect';
import Image from "next/image";

export default function HomeSection() {
  return (
    <section className='mt-16 px-5 md:px-10 lg:px-16'>
      <div className="flex flex-col gap-10 lg:block">
        <div>
          <FromBottomReveal>
            <p className='text-green-500 font-medium lg:text-sm xl:text-base'>Hi, my name is</p>
          </FromBottomReveal>
          <FromBottomReveal>
            <h1 className='text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-extrabold text-white mt-2'>Ali Hussnain.</h1>
          </FromBottomReveal>
          <FromBottomReveal>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-400 mt-2">
              <Typewriter
                options={{
                  strings: [
                    'I build things for the web.',
                    'I build things for mobile.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }} />
            </h2>
          </FromBottomReveal>
          <FromBottomReveal>
            <div className="mt-10 max-w-2xl lg:max-w-lg xl:max-w-xl">
              <p className="text-base font-normal text-gray-300/70">
                I&apos;m a fullstack developer focused on creating seamless experiences that exceed user expectations.
                With expertise in design and development, I thrive on solving complex challenges and delivering high-quality products.
                <br /><br />
                Let&apos;s work together to bring your digital vision to life!
              </p>
            </div>
          </FromBottomReveal>
          <div className="mt-20">
            <FromBottomReveal>
              <a href="#contact" className="border border-green-500 rounded-md px-6 py-3 text-sm font-medium text-green-500 shadow hover:bg-green-500/20 inline-flex items-center">
                Get In Touch <FaChevronRight className="ml-3" />
              </a>
            </FromBottomReveal>
          </div>
        </div>
        <div className="lg:w-1/2 lg:absolute lg:top-16 lg:right-0" style={{ zIndex: -1 }}>
          <Image src={'/images/home.gif'} width="500" height="500" alt="Home Section Animation Image" />
          {/* <Player src={"/lottie/home.json"} autoplay loop controls={false} className="max-w-full" style={{ width: 500, height: 500 }}></Player> */}
        </div>
      </div>
    </section>
  );
}
