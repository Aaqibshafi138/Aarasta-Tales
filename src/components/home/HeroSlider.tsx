import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroKashmir from "@/assets/hero-kashmir-1.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCinema from "@/assets/hero-cinema.jpg";

const slides = [
  {
    id: 1,
    image: heroKashmir,
    title: "Capturing Kashmir's Soul",
    subtitle: "Where every frame tells a timeless story",
  },
  {
    id: 2,
    image: heroWedding,
    title: "Wedding Chronicles",
    subtitle: "Preserving your most precious moments",
  },
  {
    id: 3,
    image: heroCinema,
    title: "Cinematic Excellence",
    subtitle: "Professional storytelling through visuals",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-px bg-gradient-gold mx-auto mb-8"
          />

          {/* Main Tagline */}
          <h1 className="font-elegant text-xl md:text-2xl text-primary tracking-wide mb-4">
            Adorning Your Moments, Framing Your Stories
          </h1>

          {/* Dynamic Title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-4 text-shadow-soft">
                {slides[currentSlide].title}
              </h2>
              <p className="font-body text-lg md:text-xl text-foreground/80">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/portfolio"
              className="px-8 py-3 bg-gradient-gold text-primary-foreground font-body text-sm uppercase tracking-wider rounded-sm hover-gold-glow transition-all duration-300"
            >
              View Portfolio
            </a>
            <a
              href="/booking"
              className="px-8 py-3 border border-primary/50 text-foreground font-body text-sm uppercase tracking-wider rounded-sm hover:bg-primary/10 transition-all duration-300"
            >
              Book a Session
            </a>
          </motion.div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-primary"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { repeat: Infinity, duration: 2 },
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSlider;
