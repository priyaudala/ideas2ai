import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import robotImg from "../../assets/testimonial-img.jpg";

const testimonials = [
  {
    text: "This AI product has completely transformed the way our team operates. From automating repetitive task providing smart insights, it’s allowed us to focus more on strategy and branded active creativity!",
    name: "Guy Hawkins",
    role: "Head of Digital Strategy, NovaTech",
    image: "https://i.pravatar.cc/40?img=1",
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) =>
      prev >= testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#f5f6fa] py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-red-500 text-xs font-semibold tracking-widest mb-4">
            ● TESTIMONIAL
          </p>

          <h2 className="text-[42px] md:text-[52px] leading-[60px] font-semibold text-[#0b1b3f] mb-12">
            Hear what our customers say about our AI agency
          </h2>

          {/* SLIDER */}
          <div className="relative">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[30px] p-8 shadow-sm relative"
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
                {testimonials[index].text}
              </p>

              {/* USER */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[index].image}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-[#0b1b3f] text-sm">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-gray-500 text-xs">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>

              {/* QUOTE */}
              <div className="absolute bottom-6 right-6 text-orange-400 text-4xl">
                ”
              </div>
            </motion.div>

            {/* ARROWS */}
            <div className="flex gap-4 mt-6">
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
        <div className="relative flex justify-center">

          {/* IMAGE (STABLE - NO MOVEMENT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={robotImg}
              alt="AI Robot"
              className="w-full max-w-[420px] h-[420px] object-cover rounded-[40px] shadow-xl"
            />

            {/* SOFT GRADIENT BORDER */}
            <div className="absolute inset-0 rounded-[40px] border border-white/30 pointer-events-none"></div>
          </motion.div>

          {/* 🤖 FLOATING BADGE BELOW IMAGE (SMOOTH + SLOW) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-6 bg-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium"
          >
            🤖 AI Powered
          </motion.div>

        </div>
      </div>
    </section>
  );
}