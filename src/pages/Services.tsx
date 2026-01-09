import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { Camera, Video, BookOpen, Palette, Heart, Star } from "lucide-react";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioPortrait from "@/assets/portfolio-portrait.jpg";
import portfolioLandscape from "@/assets/portfolio-landscape.jpg";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description:
      "Capture the magic of your special day with our signature wedding photography. From intimate ceremonies to grand celebrations, we document every emotion, detail, and moment with artistic precision.",
    features: [
      "Pre-wedding consultation",
      "Full-day coverage",
      "Multiple photographers",
      "Same-day previews",
    ],
    image: portfolioWedding,
  },
  {
    icon: Video,
    title: "Cinematic Videography",
    description:
      "Transform your memories into cinematic masterpieces. Our videography team creates stunning films that tell your story with emotion, artistry, and professional polish.",
    features: [
      "4K Ultra HD filming",
      "Drone aerial shots",
      "Professional audio",
      "Custom soundtrack",
    ],
    image: portfolioLandscape,
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoots",
    description:
      "Create beautiful memories before the big day. Our pre-wedding shoots in Kashmir's stunning locations create romantic, dreamy imagery that sets the tone for your celebration.",
    features: [
      "Location scouting",
      "Wardrobe guidance",
      "Makeup coordination",
      "Multiple locations",
    ],
    image: portfolioPortrait,
  },
  {
    icon: Star,
    title: "Portrait Sessions",
    description:
      "From family portraits to professional headshots, we capture the essence of individuals and groups with flattering lighting and artistic composition.",
    features: [
      "Studio or outdoor",
      "Professional lighting",
      "Retouching included",
      "Digital delivery",
    ],
    image: portfolioPortrait,
  },
  {
    icon: BookOpen,
    title: "Premium Albums",
    description:
      "Transform your photographs into heirloom-quality albums. Our handcrafted albums feature premium materials and exquisite design that will be treasured for generations.",
    features: [
      "Handcrafted binding",
      "Premium papers",
      "Custom designs",
      "Archival quality",
    ],
    image: portfolioWedding,
  },
  {
    icon: Palette,
    title: "Post-Production",
    description:
      "Our expert editing team brings out the best in every image and video. From color grading to retouching, we ensure every deliverable meets our exacting standards.",
    features: [
      "Color correction",
      "Professional retouching",
      "Cinematic grading",
      "Quick turnaround",
    ],
    image: portfolioLandscape,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="font-elegant text-primary text-lg">What We Offer</span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mt-2 mb-6">
              Our Services
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              From capturing your most precious moments to transforming them into 
              timeless keepsakes, we offer comprehensive visual storytelling services.
            </p>
            <div className="w-16 h-px bg-gradient-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20">
        <div className="container-custom">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${
                index !== services.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-foreground/80 font-body text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Packages CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Looking for Custom Packages?
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Every project is unique. Contact us to discuss your specific needs 
              and we'll create a custom package tailored just for you.
            </p>
            <a
              href="/booking"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-gold text-primary-foreground font-body text-sm uppercase tracking-wider rounded-sm hover-gold-glow transition-all duration-300"
            >
              Get a Custom Quote
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
