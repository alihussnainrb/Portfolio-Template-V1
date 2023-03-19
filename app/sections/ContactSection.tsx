'use client';
import { FromBottomReveal, FromLeftReveal, FromRightReveal } from "@/shared_utils/RevealComponents";
import { Player } from "@lottiefiles/react-lottie-player";

export function ContactSection() {

  return (
    <section id="contact" className={'mt-48 pb-10 mx-auto max-w-screen-xl'}>
      <div>
        <FromBottomReveal>
          <div className='flex flex-col justify-center items-center'>
            <span className='font-semibold text-green-500 text-base mb-2'>02. What&apos;s Next?</span>
            <h1 className='font-bold text-white text-5xl'>
              Get In Touch
            </h1>
          </div>
        </FromBottomReveal>
        <div className="mt-20 relative px-16">
          <div className="max-w-screen-lg w-full absolute -right-10 " style={{ zIndex: -1 }}>
            <Player src={"/lottie/contact.json"} autoplay loop controls={false}
              style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center" }} />
          </div>
          <div className="w-[500px]">
            <FromLeftReveal>
              <div className="px-8 py-5 bg-theme-light rounded theme-shadow">
                <div className="text-center mb-20">
                  <h3 className="text-4xl font-bold text-white">Leave A Message</h3>
                  <p className="text-sm text-white/50 font-normal">( I will be in touch with you as soon as possible. )</p>
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
