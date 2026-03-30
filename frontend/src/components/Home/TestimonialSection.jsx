import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import robotImg from "../../assets/testimonial-img.jpg";

const testimonials = [
  {
    text: "This AI product has completely transformed the way our team operates. From automating repetitive task providing smart insights, it’s allowed us to focus more on strategy and branded active creativity!",
    name: "Guy Hawkins",
    role: "Head of Digital Strategy, NovaTech",
    image: "https://i.pravatar.cc/80?img=1",
  },
  {
    text: "AI tools helped us scale faster and improve decision making with real-time analytics and insights!",
    name: "Sarah Lee",
    role: "Product Manager, TechCorp",
    image: "https://i.pravatar.cc/80?img=3",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="bg-[#f5f6fa] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <p className="text-red-500 text-[11px] sm:text-xs font-semibold tracking-[0.25em] mb-3 sm:mb-4 text-center lg:text-left">
            ● TESTIMONIAL
          </p>

          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.2] font-semibold text-[#0b1b3f] mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left max-w-[650px]">
            Hear what our customers say about our AI agency
          </h2>

          {/* SLIDER */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[22px] sm:rounded-[30px] p-5 sm:p-7 md:p-8 shadow-sm relative min-h-[280px] sm:min-h-[260px]"
              >
                {/* STARS */}
                <div className="flex mb-4 text-orange-400 gap-1">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        className="w-4 h-4"
                      />
                    ))}
                </div>

                {/* TEXT */}
                <p className="text-gray-600 text-sm sm:text-[15px] leading-6 sm:leading-7 mb-6 sm:mb-8">
                  {testimonials[index].text}
                </p>

                {/* USER */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-[#0b1b3f] text-sm sm:text-base">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-5">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>

                {/* QUOTE */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-orange-300 text-3xl sm:text-5xl font-serif">
                  ”
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ARROWS */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow flex items-center justify-center text-gray-500 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow flex items-center justify-center text-gray-500 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 lg:order-2 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full flex justify-center"
          >
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <img
              src={robotImg}
              alt="AI Robot"
              className="relative z-10 w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[420px] h-[260px] sm:h-[340px] md:h-[400px] lg:h-[420px] object-cover rounded-[28px] sm:rounded-[40px] shadow-xl"
            />

            {/* Soft border */}
            <div className="absolute inset-0 rounded-[28px] sm:rounded-[40px] border border-white/30 pointer-events-none z-20" />
          </motion.div>

          {/* FLOATING BADGE */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-14px] sm:bottom-[-18px] lg:bottom-[-22px] z-30 bg-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg text-xs sm:text-sm font-medium"
          >
            🤖 AI Powered
          </motion.div>
        </div>
      </div>
    </section>
  );
}
