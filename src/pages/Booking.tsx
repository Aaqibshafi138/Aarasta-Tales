import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, Camera, Video, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const packages = [
  {
    name: "Essential",
    price: "₹50,000",
    description: "Perfect for intimate celebrations",
    features: [
      "6 hours coverage",
      "1 photographer",
      "300+ edited photos",
      "Online gallery",
      "Print release",
    ],
  },
  {
    name: "Signature",
    price: "₹1,20,000",
    description: "Our most popular package",
    features: [
      "Full day coverage",
      "2 photographers",
      "600+ edited photos",
      "Highlight video",
      "Premium album",
      "Engagement shoot",
    ],
    popular: true,
  },
  {
    name: "Luxe",
    price: "₹2,50,000",
    description: "The complete experience",
    features: [
      "Multi-day coverage",
      "3 photographers",
      "1000+ edited photos",
      "Cinematic film",
      "Premium albums (2)",
      "Pre-wedding shoot",
      "Same-day edit",
    ],
  },
];

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
            <span className="font-elegant text-primary text-lg">Book With Us</span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mt-2 mb-6">
              Reserve Your Date
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              Let us be part of your special moments. Fill out the form below 
              and we'll create a custom proposal for you.
            </p>
            <div className="w-16 h-px bg-gradient-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-20 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative glass-card p-8 rounded-lg ${
                  pkg.popular ? "border-primary/50 gold-glow" : ""
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-wide rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl font-medium text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {pkg.description}
                  </p>
                  <p className="font-display text-4xl font-semibold text-gradient-gold mt-4">
                    {pkg.price}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-foreground/80 font-body text-sm"
                    >
                      <Check className="text-primary flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-gradient-gold text-primary-foreground hover:opacity-90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Choose {pkg.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-elegant text-primary text-lg">Get Started</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
                Inquiry Form
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                  <Input
                    name="eventDate"
                    type="date"
                    placeholder="Event Date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-background border border-border text-foreground font-body"
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="prewedding">Pre-Wedding Shoot</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
                <Textarea
                  name="message"
                  placeholder="Tell us about your vision..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-background border-border"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90"
                >
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-elegant text-primary text-lg">Good to Know</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
                Booking Terms
              </h2>
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="text-primary" size={24} />
                    <h3 className="font-display text-lg font-medium text-foreground">
                      Reservation
                    </h3>
                  </div>
                  <p className="font-body text-muted-foreground text-sm">
                    A 30% non-refundable deposit is required to secure your date. 
                    The remaining balance is due 7 days before your event.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="text-primary" size={24} />
                    <h3 className="font-display text-lg font-medium text-foreground">
                      Delivery Timeline
                    </h3>
                  </div>
                  <p className="font-body text-muted-foreground text-sm">
                    Photos are delivered within 4-6 weeks. Videos take 8-12 weeks. 
                    Albums require an additional 4 weeks after design approval.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Camera className="text-primary" size={24} />
                    <h3 className="font-display text-lg font-medium text-foreground">
                      What's Included
                    </h3>
                  </div>
                  <p className="font-body text-muted-foreground text-sm">
                    All packages include professional editing, color correction, 
                    and a secure online gallery with download access.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Video className="text-primary" size={24} />
                    <h3 className="font-display text-lg font-medium text-foreground">
                      Travel Policy
                    </h3>
                  </div>
                  <p className="font-body text-muted-foreground text-sm">
                    Travel within Srinagar is included. For destination events, 
                    travel and accommodation expenses are additional.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
