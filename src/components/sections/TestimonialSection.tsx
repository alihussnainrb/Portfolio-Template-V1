'use client';
import Image from "next/image";

function TestimonialSection() {
  return (
    <section className={"mt-40"}>
      <div className="container px-6 py-10 mx-auto">
        <h2 className="font-bold text-center text-white text-4xl capitalize">
          What clients saying
        </h2>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-green-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>
        </div>

        <div className="flex items-center max-w-6xl mx-auto mt-16">
          <button title="left arrow" className="mb-32 p-2 text-gray-200 transition-colors duration-300 border rounded-full lg:block hover:bg-gray-100/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div>
            <p className="flex items-center text-center text-gray-400 mx-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
              eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
              minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
              fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
              quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
            </p>

            <div className="flex flex-col items-center justify-center mt-8">
              <Image className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width={700} height={500} alt="" />
              <div className="mt-4 text-center">
                <h4 className="font-semibold text-lg text-white">Client Name</h4>
                <span className="text-sm text-white/70">Marketer</span>
              </div>
            </div>
          </div>

          <button title="right arrow" className="mb-32 p-2 text-gray-200 transition-colors duration-300 border rounded-full lg:block hover:bg-gray-100/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}


export default TestimonialSection;