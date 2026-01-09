import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedWork from "@/components/home/FeaturedWork";
import Testimonials from "@/components/home/Testimonials";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSlider />

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-elegant text-primary text-lg tracking-wide">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
                Crafting Visual Stories in the Heart of Kashmir
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                At Aaraasta Tales, we believe every moment deserves to be immortalized 
                with artistry and emotion. Based in the breathtaking valley of Kashmir, 
                we bring a unique perspective to photography and videography.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Our team of passionate visual storytellers combines technical expertise 
                with creative vision to capture the essence of your most precious moments.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-body text-sm uppercase tracking-wide hover:gap-4 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="glass-card p-6 rounded-lg text-center">
                    <span className="font-display text-4xl font-bold text-gradient-gold">
                      10+
                    </span>
                    <p className="font-body text-sm text-muted-foreground mt-2">
                      Years Experience
                    </p>
                  </div>
                  <div className="glass-card p-6 rounded-lg text-center">
                    <span className="font-display text-4xl font-bold text-gradient-gold">
                      500+
                    </span>
                    <p className="font-body text-sm text-muted-foreground mt-2">
                      Happy Clients
                    </p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="glass-card p-6 rounded-lg text-center">
                    <span className="font-display text-4xl font-bold text-gradient-gold">
                      200+
                    </span>
                    <p className="font-body text-sm text-muted-foreground mt-2">
                      Weddings Covered
                    </p>
                  </div>
                  <div className="glass-card p-6 rounded-lg text-center">
                    <span className="font-display text-4xl font-bold text-gradient-gold">
                      50+
                    </span>
                    <p className="font-body text-sm text-muted-foreground mt-2">
                      Awards Won
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesPreview />

      {/* Featured Work */}
      <FeaturedWork />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
              Ready to Create Your Story?
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Let us capture your precious moments with the artistry and emotion 
              they deserve. Book a consultation today.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-gold text-primary-foreground font-body text-sm uppercase tracking-wider rounded-sm hover-gold-glow transition-all duration-300"
            >
              Book Your Session
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
