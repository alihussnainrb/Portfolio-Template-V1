'use client';
import { FromBottomReveal, FromLeftReveal } from "@/shared_utils/RevealComponents";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaEnvelope, FaPhone, FaSkype } from "react-icons/fa";

export default function ContactSection() {

  return (
    <section id="contact" className={'mt-48 pb-10 px-16'}>
      <div>
        <FromBottomReveal>
          <div className='flex flex-col justify-center items-center'>
            <span className='font-semibold text-green-500 text-base mb-2'>02. What&apos;s Next?</span>
            <h1 className='font-bold text-white text-5xl'>
              Get In Touch
            </h1>
          </div>
        </FromBottomReveal>
        <div className="grid grid-cols-3 mt-32 gap-8">
          <FromBottomReveal delay={0.2}>
            <div className={"bg-theme-light rotate-12 rounded px-5 py-8 cursor-pointer h-full transition duration-300 hover:translate-y-5 "}>
              <div className="flex justify-center items-center">
                <div className="p-8 rounded-full bg-green-500/5">
                  <FaEnvelope className="text-green-500 font-normal text-4xl" />
                </div>
              </div>
              <div className='mt-8 text-center'>
                <p className="text-gray-300/80 text-base font-normal">
                  alihussnainrrb@gmail.com
                </p>
              </div>
            </div>
          </FromBottomReveal>
          <FromBottomReveal delay={0}>
            <div className={"bg-theme-light rounded -translate-y-8 px-5 py-8 cursor-pointer h-full transition duration-300 hover:translate-y-2 "}>
              <div className="flex justify-center items-center">
                <div className="p-8 rounded-full bg-green-500/5">
                  <FaPhone className="text-green-500 font-normal text-4xl" />
                </div>
              </div>
              <div className='mt-8 text-center'>
                <p className="text-gray-300/80 text-base font-normal">
                  +92 343 5206962
                </p>
              </div>
            </div>
          </FromBottomReveal>
          <FromBottomReveal delay={0.2}>
            <div className={"bg-theme-light -rotate-12 rounded px-5 py-8 cursor-pointer h-full transition duration-300 hover:translate-y-5 "}>
              <div className="flex justify-center items-center">
                <div className="p-8 rounded-full bg-green-500/5">
                  <FaSkype className="text-green-500 font-normal text-4xl" />
                </div>
              </div>
              <div className='mt-8 text-center'>
                <p className="text-gray-300/80 text-base font-normal">
                  Skype ID
                </p>
              </div>
            </div>
          </FromBottomReveal>
        </div>
        <div className="mt-40 relative">
          <div className="max-w-screen-lg w-full absolute -right-10 " style={{ zIndex: -1 }}>
            <Player src={"/lottie/contact.json"} autoplay loop controls={false}
              style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center" }} />
          </div>
          <div className="w-[500px]">
            <FromLeftReveal>
              <div className="px-8 py-5 bg-theme-light rounded theme-shadow">
                <div className="text-center mb-20">
                  <h3 className="text-4xl font-bold text-white">Leave A Message</h3>
                  <p className="text-sm text-white/50 font-normal mt-2">( I will be in touch with you as soon as possible. )</p>
                </div>
                <form action="#" className="w-full">
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-nomral text-white/80">Your email address</label>
                    <input type="email" className="p-3 text-sm font-normal appearance-none border border-white/40 bg-transparent outline-none rounded text-white/80 min-w-full" placeholder="xxxx@yyy.zz" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-nomral text-white/80">Subject</label>
                    <input type="email" className="p-3 text-sm font-normal appearance-none border border-white/40 bg-transparent outline-none rounded text-white/80 min-w-full" placeholder="Let me know how can i help you" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-nomral text-white/80">Message</label>
                    <textarea rows={4} className="p-3 text-sm font-normal appearance-none border border-white/40 bg-transparent outline-none rounded text-white/80 min-w-full" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="button" className="py-3 px-5 mt-5 text-sm font-semibold text-center text-white rounded bg-green-500 w-full hover:bg-green-600">Send message</button>
                </form>
              </div>
            </FromLeftReveal>
          </div>
        </div>
      </div>
    </section>
  );
}



function ContactInfoItem() {
  return (
    <div className={"w-96 bg-theme-light rotate-12 rounded px-5 py-8 cursor-pointer h-full transition hover:-translate-y-3 "}>
      <div className="flex justify-center items-center">
        <div className="p-8 rounded-full bg-green-500/20">
          <FaEnvelope className="text-green-500 font-normal text-4xl" />
        </div>
      </div>
      <div className='mt-8 text-center'>
        <p className="text-gray-300/80 text-base font-normal mt-4">
          alihussnainrrb@gmail.com
        </p>
      </div>
    </div>
  );
}

