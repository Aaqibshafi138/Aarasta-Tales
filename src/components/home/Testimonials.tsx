import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Fatima & Ahmad",
    event: "Wedding, Dal Lake",
    text: "Aaraasta Tales captured our wedding day with such artistry and emotion. Every photograph tells our story beautifully. They truly understand the essence of Kashmiri celebrations.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    event: "Portrait Session",
    text: "The portrait session was an incredible experience. The team made me feel so comfortable, and the results exceeded all my expectations. Pure magic!",
  },
  {
    id: 3,
    name: "Imran & Sara",
    event: "Pre-Wedding Shoot",
    text: "Our pre-wedding shoot in Gulmarg was nothing short of cinematic. The team's vision and attention to detail is unmatched. Highly recommend!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-elegant text-primary text-lg tracking-wide">
            Client Stories
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mt-2">
            What They Say
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mt-6" />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote
                className="text-primary/30 mx-auto mb-6"
                size={48}
                strokeWidth={1}
              />
              <p className="font-elegant text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <div>
                <p className="font-display text-lg font-medium text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="font-body text-sm text-primary mt-1">
                  {testimonials[current].event}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-primary w-6"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
