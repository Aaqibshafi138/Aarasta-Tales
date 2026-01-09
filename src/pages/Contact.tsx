import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll respond soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <span className="font-elegant text-primary text-lg">Get In Touch</span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mt-2 mb-6">
              Contact Us
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              Have questions or ready to book? We'd love to hear from you. 
              Reach out and let's start your visual journey together.
            </p>
            <div className="w-16 h-px bg-gradient-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Let's Connect
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-1">
                      Studio Location
                    </h3>
                    <p className="font-body text-muted-foreground">
                      123 Boulevard Road, Near Dal Gate<br />
                      Srinagar, Kashmir - 190001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-1">
                      Phone
                    </h3>
                    <p className="font-body text-muted-foreground">
                      <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                        +91 98765 43210
                      </a>
                      <br />
                      <a href="tel:+919876543211" className="hover:text-primary transition-colors">
                        +91 98765 43211
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-1">
                      Email
                    </h3>
                    <p className="font-body text-muted-foreground">
                      <a href="mailto:hello@aaraastastales.com" className="hover:text-primary transition-colors">
                        hello@aaraastastales.com
                      </a>
                      <br />
                      <a href="mailto:bookings@aaraastastales.com" className="hover:text-primary transition-colors">
                        bookings@aaraastastales.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-1">
                      Working Hours
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-display text-lg font-medium text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/aaraastastales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="https://facebook.com/aaraastastales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <Facebook size={22} />
                  </a>
                  <a
                    href="https://youtube.com/aaraastastales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <Youtube size={22} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card p-8 rounded-lg">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="bg-background border-border"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.893267655785!2d74.83!3d34.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzQ4LjAiTiA3NMKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aaraasta Tales Location"
        />
        <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
