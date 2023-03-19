'use client';
import { FaChevronRight } from "react-icons/fa";
import { FromBottomReveal } from "@/shared_utils/RevealComponents";
import { Player } from "@lottiefiles/react-lottie-player";
import Typewriter from 'typewriter-effect';

export function HomeSection() {
  return (
    <section className='mt-16 px-16'>
      <div>
        <div>
          <FromBottomReveal>
            <p className='text-green-500 font-medium text-base'>Hi, my name is</p>
          </FromBottomReveal>
          <FromBottomReveal>
            <h1 className='text-7xl font-extrabold text-white mt-2'>Ali Hussnain.</h1>
          </FromBottomReveal>
          <FromBottomReveal>
            <h1 className="text-5xl font-bold text-gray-400 mt-2">
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
            </h1>
          </FromBottomReveal>
          <FromBottomReveal>
            <div className="mt-10 max-w-xl">
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
              <a href="#contact" className="border border-green-500 rounded-md px-6 py-3 text-sm font-medium text-green-500 shadow hover:bg-green-500/20 inline-flex items-center">
                Get In Touch <FaChevronRight className="ml-3" />
              </a>
            </FromBottomReveal>
          </div>
        </div>
        <div className="w-1/2 absolute top-16 right-0" style={{ zIndex: -1 }}>
          <Player src={"/lottie/home.json"} autoplay loop controls={false} className="aspect-square" style={{ width: 500, height: 500 }}></Player>
        </div>
      </div>
    </section>
  );
}
