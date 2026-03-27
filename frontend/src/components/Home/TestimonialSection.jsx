import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import robotImg from "../../assets/testimonial-img.jpg";

const testimonials = [
  {
    text: "This AI product has completely transformed the way our team operates. From automating repetitive task providing smart insights, it’s allowed us to focus more on strategy and branded active creativity!",
    name: "Guy Hawkins",
    role: "Head of Digital Strategy, NovaTech",
    image: "https://i.pravatar.cc/40?img=1",
  },
  {
    text: "This AI product has completely transformed the way our team operates. From automating repetitive task providing smart insights, it’s allowed us to focus more on strategy and branded active creativity!",
    name: "Guy Hawkins",
    role: "Head of Digital Strategy, NovaTech",
    image: "https://i.pravatar.cc/40?img=2",
  },
  {
    text: "AI tools helped us scale faster and improve decision making with real-time analytics and insights!",
    name: "Sarah Lee",
    role: "Product Manager, TechCorp",
    image: "https://i.pravatar.cc/40?img=3",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) =>
      prev >= testimonials.length - 2 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 1
    );
  };

  return (
    <section className="bg-[#f5f6fa] py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <p className="text-red-500 text-xs font-semibold tracking-widest mb-4">
            ● TESTIMONIAL
          </p>

          <h2 className="text-[42px] md:text-[52px] leading-[60px] font-semibold text-[#0b1b3f] mb-12">
            Hear what our about customer say about our AI agency
          </h2>

          {/* SLIDER */}
          <div className="relative">

            {/* CARDS WRAPPER */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-700"
                style={{
                  transform: `translateX(-${index * 50}%)`,
                }}
              >
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="min-w-[48%] bg-white rounded-[30px] p-8 shadow-sm relative"
                  >
                    {/* STARS */}
                    <div className="flex mb-4 text-orange-400">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                    </div>

                    {/* TEXT */}
                    <p className="text-gray-600 text-sm leading-6 mb-6">
                      {item.text}
                    </p>

                    {/* USER */}
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold text-[#0b1b3f] text-sm">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-xs">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* QUOTE */}
                    <div className="absolute bottom-6 right-6 text-orange-400 text-4xl">
                      ”
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ RIGHT SIDE FLOATING ARROWS (LIKE IMAGE) */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block">
          <img
            src={robotImg}
            alt="AI"
            className="w-full h-[520px] object-cover rounded-[30px]"
          />
        </div>
      </div>
    </section>
  );
}