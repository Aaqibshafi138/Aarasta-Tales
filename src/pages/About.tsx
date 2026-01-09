import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import heroKashmir from "@/assets/hero-kashmir-1.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroKashmir})` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-4">
            Our Story
          </h1>
          <p className="font-elegant text-xl text-primary">
            Where Passion Meets Artistry
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-elegant text-primary text-lg">The Beginning</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
                Born From Love for Visual Stories
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Aaraasta Tales was founded in 2014 in the enchanting valley of Kashmir, 
                driven by a deep passion for capturing life's most precious moments. 
                What began as a small studio has grown into one of Kashmir's premier 
                photography and videography production houses.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Our name "Aaraasta" comes from the Kashmiri word meaning "adorned" or 
                "decorated" — a reflection of our commitment to embellish every moment 
                we capture with artistic excellence.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Today, we continue to push the boundaries of visual storytelling, 
                combining traditional techniques with modern technology to create 
                timeless memories for our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src={heroKashmir}
                  alt="Kashmir Valley"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-primary/30 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Our Philosophy"
            title="What Drives Us"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description:
                  "We capture genuine emotions and real moments, never staged or artificial.",
              },
              {
                title: "Excellence",
                description:
                  "Every project receives our complete dedication and pursuit of perfection.",
              },
              {
                title: "Storytelling",
                description:
                  "We don't just take photos — we craft narratives that resonate for generations.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-lg text-center"
              >
                <h3 className="font-display text-2xl font-medium text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            eyebrow="The Creatives"
            title="Meet Our Team"
            subtitle="Passionate artists dedicated to capturing your story"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Amir Shah", role: "Lead Photographer & Founder" },
              { name: "Fatima Bhat", role: "Creative Director" },
              { name: "Riyaz Ahmed", role: "Lead Cinematographer" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto rounded-full bg-secondary mb-6 flex items-center justify-center">
                  <span className="font-display text-4xl text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  {member.name}
                </h3>
                <p className="font-body text-sm text-primary mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
