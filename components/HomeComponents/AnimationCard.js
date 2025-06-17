"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/new-home-page/we-work/tech.png",
    category: "Tech/IT",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/new-home-page/we-work/health.png",
    category: "HealthCare",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "/new-home-page/we-work/e-com.png",
    category: "E-Commerce",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "/new-home-page/we-work/hospitality.png",
    category: "Hospitality",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/new-home-page/we-work/ngo.png",
    category: "Not-For-Profits/Ngos",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/new-home-page/we-work/appliances.png",
    category: "Appliances",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/new-home-page/we-work/fashion.png",
    category: "Fashion & Accessories",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/new-home-page/we-work/beauty.png",
    category: "Beauty & Wellness",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/new-home-page/we-work/auto-mobile.png",
    category: "Automobiles",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/new-home-page/we-work/jewelry.png",
    category: "Jewelry",
  },
];

export const AnimatedTestimonials = ({ autoplay = false }) => {
  const categories = [...new Set(testimonials.map((t) => t.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [active, setActive] = useState(0);

  const filteredTestimonials = testimonials.filter(
    (t) => t.category === activeCategory
  );

  const handleNext = () => {
    setActive((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setActive(
      (prev) =>
        (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length
    );
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, activeCategory]);

  // Whenever category changes, reset active testimonial index
  useEffect(() => {
    setActive(0);
  }, [activeCategory]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <>
      <div className="bg-black border-b-2 border-dashed border-[#2D2D2D]">
        <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
          <div>
            <h4 className="text-center text-[#DBDBDB] lg:text-6xl lg:pb-32 pb-12 text-2xl">
              We work with <br className="hidden sm:block" /> those shaping
              what’s next.
            </h4>
          </div>
          <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
            {/* Left Side: Animated Testimonials */}
            <div>
              <div className="relative h-80 w-">
                <AnimatePresence>
                  {filteredTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index)
                          ? 40
                          : filteredTestimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0  origin-bottom"
                    >
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        width={500}
                        height={500}
                        draggable={false}
                        className="lg:mt-16 lg:h-[500px] object-cover"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side: Vertical Tabs */}
            <div className="flex flex-col items-start justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-lg font-semibold transition-all duration-300 w-full text-left flex items-center justify-start gap-2 ${
                    cat === activeCategory
                      ? "bg-black text-white border-b text-xl"
                      : "border-b border-dashed text-[#A8A8A8] hover:bg-black hover:text-white"
                  }`}
                >
                  {cat === activeCategory && (
                    <Image
                    width={4}
                    height={4}
                      src="/new-home-page/red-arrow.png"
                      alt="arrow"
                      className="w-4 h-4"
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
