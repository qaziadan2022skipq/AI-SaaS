import { testimonials } from "@/constants/landing-page-constants";
import Image from "next/image";


const Testimonials = () => {
  return (
    <div id="testimonials" className="mt-16 tracking-wide text-center">
      <span className="bg-neutral-900 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Testimonials             
        </span>
      <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl text-center font-bold my-10 lg:my-18 text-white">
        What <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600">People</span>  are saying 
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 text-white text-left rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                {/* <Image
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                /> */}
                <div>
                  <h6 className="text-transparent text-left bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;