import { motion } from "framer-motion";
import { Camera, Video, BookOpen, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description:
      "From weddings to portraits, we capture moments with artistic precision and emotional depth.",
  },
  {
    icon: Video,
    title: "Videography",
    description:
      "Cinematic films that tell your story with breathtaking visuals and compelling narratives.",
  },
  {
    icon: BookOpen,
    title: "Premium Albums",
    description:
      "Handcrafted albums and photobooks that become treasured family heirlooms.",
  },
  {
    icon: Palette,
    title: "Post-Production",
    description:
      "Expert editing, color grading, and retouching to perfect every frame.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-gradient-dark">
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
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mt-2">
            Our Services
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 rounded-lg h-full hover-gold-glow transition-all duration-500 group-hover:border-primary/30">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
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
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-body text-sm uppercase tracking-wide hover:gap-4 transition-all duration-300"
          >
            Explore All Services
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
