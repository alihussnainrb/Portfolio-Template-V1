'use client';
import { FromBottomReveal, FromLeftReveal } from "@/shared_utils/RevealComponents";
import { FaEnvelope, FaPhone, FaSkype } from "react-icons/fa";

export default function ContactSection() {

  return (
    <section id="contact" className={'mt-40 pb-10 px-16'}>
      <div>
        <FromBottomReveal>
          <div className='flex flex-col justify-center items-center'>
            <h3 className='font-semibold text-green-500 text-base mb-2'>02. What&apos;s Next?</h3>
            <h2 className='font-bold text-white text-5xl'>
              Get In Touch
            </h2>
          </div>
        </FromBottomReveal>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 mt-32 gap-8">
          <FromBottomReveal delay={0.2}>
            <a href="mailto:alihussnainrrb@gmail.com">
              <div className={"rounded theme-shadow px-5 py-8 cursor-pointer h-full transition duration-300 hover:bg-white/5 border border-white/5"}>
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
            </a>
          </FromBottomReveal>
          <FromBottomReveal delay={0}>
            <a href="tel:+923435206962">
              <div className={"rounded theme-shadow px-5 py-8 cursor-pointer h-full transition duration-300 hover:bg-white/5 border border-white/5"}>
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
            </a>
          </FromBottomReveal>
          <FromBottomReveal delay={0.2}>
            <a href="skype:live:.cid.3d0c704665c411bb?chat">
              <div className={"rounded theme-shadow px-5 py-8 cursor-pointer h-full transition duration-300 hover:bg-white/5 border border-white/5"}>
                <div className="flex justify-center items-center">
                  <div className="p-8 rounded-full bg-green-500/5">
                    <FaSkype className="text-green-500 font-normal text-4xl" />
                  </div>
                </div>
                <div className='mt-8 text-center'>
                  <p className="text-gray-300/80 text-base font-normal">
                    Ali Hussnain (Skype Link)
                  </p>
                </div>
              </div>
            </a>
          </FromBottomReveal>
        </div>
        <div className="mt-20 relative flex items-center justify-center">
          <div className="w-full">
            <FromBottomReveal y={150}>
              <div className="px-8 py-10 rounded theme-shadow">
                <div className="text-center mb-10">
                  <h3 className="text-4xl font-bold text-white">Leave A Message</h3>
                  <p className="text-sm text-white/50 font-normal mt-2">I will be in touch with you as soon as possible.</p>
                </div>
                <form action="#" className="w-full">
                  <div className="flex flex-col lg:flex-row lg:gap-5">
                    <div className="w-full lg:w-1/2">
                      <div className="mb-6">
                        <label htmlFor="subject" className="block mb-2 text-sm font-nomral text-white/80">Your email address</label>
                        <input type="email" className="p-3 text-sm font-normal appearance-none border border-white/40 bg-transparent outline-none rounded text-white/80 min-w-full" placeholder="xxxx@yyy.zz" />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="subject" className="block mb-2 text-sm font-nomral text-white/80">Subject</label>
                        <input type="email" className="p-3 text-sm font-normal appearance-none border border-white/40 bg-transparent outline-none rounded text-white/80 min-w-full" placeholder="Let me know how can i help you" />
                      </div>
                    </div>
                    <div className="mb-6 w-full lg:w-1/2">
                      <label htmlFor="subject" className="block mb-2 text-sm font-nomral text-white/80">Message</label>
                      <textarea rows={6} className="p-3 text-sm font-normal appearance-none border border-white/40 bg-transparent outline-none rounded text-white/80 min-w-full" placeholder="Leave a comment..."></textarea>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button type="button" className="py-3 px-5 mt-5 text-sm font-semibold text-center text-white rounded bg-green-500 w-52 hover:bg-green-600">Send message</button>
                  </div>
                </form>
              </div>
            </FromBottomReveal>
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

