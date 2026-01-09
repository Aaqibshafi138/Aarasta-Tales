import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portfolioLandscape from "@/assets/portfolio-landscape.jpg";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioPortrait from "@/assets/portfolio-portrait.jpg";

const works = [
  {
    id: 1,
    image: portfolioLandscape,
    category: "Landscape",
    title: "Kashmir Valley",
  },
  {
    id: 2,
    image: portfolioWedding,
    category: "Wedding",
    title: "Sacred Moments",
  },
  {
    id: 3,
    image: portfolioPortrait,
    category: "Portrait",
    title: "Timeless Beauty",
  },
];

const FeaturedWork = () => {
  return (
    <section className="section-padding">
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
            Our Creations
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mt-2">
            Featured Work
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mt-6" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-body text-xs uppercase tracking-wider text-primary">
                  {work.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mt-1">
                  {work.title}
                </h3>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-lg transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-gold text-primary-foreground font-body text-sm uppercase tracking-wider rounded-sm hover-gold-glow transition-all duration-300"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
