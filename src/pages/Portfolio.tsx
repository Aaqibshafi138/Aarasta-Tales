import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioPortrait from "@/assets/portfolio-portrait.jpg";
import portfolioLandscape from "@/assets/portfolio-landscape.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroKashmir from "@/assets/hero-kashmir-1.jpg";
import heroCinema from "@/assets/hero-cinema.jpg";

const categories = ["All", "Wedding", "Portrait", "Landscape", "Cinematic"];

const portfolioItems = [
  { id: 1, image: portfolioWedding, category: "Wedding", title: "Sacred Vows" },
  { id: 2, image: portfolioPortrait, category: "Portrait", title: "Elegance" },
  { id: 3, image: portfolioLandscape, category: "Landscape", title: "Valley Dreams" },
  { id: 4, image: heroWedding, category: "Wedding", title: "Golden Hour" },
  { id: 5, image: heroKashmir, category: "Landscape", title: "Kashmir Sunset" },
  { id: 6, image: heroCinema, category: "Cinematic", title: "Behind The Lens" },
  { id: 7, image: portfolioPortrait, category: "Portrait", title: "Traditional Grace" },
  { id: 8, image: heroWedding, category: "Wedding", title: "Love Story" },
  { id: 9, image: portfolioLandscape, category: "Landscape", title: "Mountain Mist" },
];

const videoReels = [
  { id: 1, title: "Wedding Film - Fatima & Ahmad", thumbnail: portfolioWedding },
  { id: 2, title: "Pre-Wedding - Srinagar", thumbnail: heroKashmir },
  { id: 3, title: "Cinematic Highlights", thumbnail: heroCinema },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="font-elegant text-primary text-lg">Our Work</span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mt-2 mb-6">
              Portfolio
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              A collection of our finest work, showcasing the artistry and emotion 
              we bring to every project.
            </p>
            <div className="w-16 h-px bg-gradient-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 px-4">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-body text-sm uppercase tracking-wide rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-gold text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-4">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-body text-xs uppercase tracking-wider text-primary">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl font-medium text-foreground mt-1">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Reels */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-elegant text-primary text-lg">Cinematic</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2">
              Video Reels
            </h2>
            <div className="w-16 h-px bg-gradient-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoReels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <Play className="text-foreground ml-1" size={28} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                  <p className="font-body text-sm text-foreground">{reel.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Portfolio;
