import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/blog/BlogCard";
import heroKashmir from "@/assets/hero-kashmir-1.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCinema from "@/assets/hero-cinema.jpg";
import portfolioLandscape from "@/assets/portfolio-landscape.jpg";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioPortrait from "@/assets/portfolio-portrait.jpg";

const categories = ["All", "Behind the Scenes", "Photography Tips", "Wedding Stories", "Kashmir Diaries"];

const blogPosts = [
  {
    slug: "capturing-kashmir-winter-wedding",
    title: "Capturing the Magic of a Kashmir Winter Wedding",
    excerpt: "Discover how we captured the ethereal beauty of a traditional Kashmiri wedding set against the stunning backdrop of snow-covered mountains. From the intricate rituals to the emotional moments, every frame tells a story.",
    image: heroWedding,
    category: "Wedding Stories",
    date: "Jan 5, 2026",
    readTime: "5 min read",
  },
  {
    slug: "golden-hour-photography-tips",
    title: "Mastering Golden Hour: Photography Tips for Magical Shots",
    excerpt: "Learn the secrets of capturing breathtaking golden hour photographs in Kashmir's unique landscape. We share our top techniques for making the most of that magical lighting.",
    image: portfolioLandscape,
    category: "Photography Tips",
    date: "Dec 28, 2025",
    readTime: "4 min read",
  },
  {
    slug: "behind-the-scenes-destination-shoot",
    title: "Behind the Scenes: A Destination Pre-Wedding Shoot in Gulmarg",
    excerpt: "Take a peek behind the curtain as we share the challenges and triumphs of organizing a destination pre-wedding shoot in the pristine snow of Gulmarg.",
    image: heroCinema,
    category: "Behind the Scenes",
    date: "Dec 20, 2025",
    readTime: "6 min read",
  },
  {
    slug: "kashmir-hidden-photography-locations",
    title: "Hidden Gems: Secret Photography Locations in Kashmir",
    excerpt: "Explore the lesser-known but absolutely stunning locations in Kashmir that make for perfect wedding and portrait photography backdrops.",
    image: heroKashmir,
    category: "Kashmir Diaries",
    date: "Dec 15, 2025",
    readTime: "7 min read",
  },
  {
    slug: "portrait-lighting-techniques",
    title: "Portrait Lighting Techniques for Stunning Bridal Photos",
    excerpt: "Master the art of portrait lighting with our comprehensive guide. Learn how to create depth, drama, and emotion in your bridal photography.",
    image: portfolioPortrait,
    category: "Photography Tips",
    date: "Dec 10, 2025",
    readTime: "5 min read",
  },
  {
    slug: "traditional-kashmiri-wedding-rituals",
    title: "Documenting Traditional Kashmiri Wedding Rituals",
    excerpt: "An intimate look at how we document the rich cultural heritage and beautiful traditions of Kashmiri weddings, preserving memories for generations.",
    image: portfolioWedding,
    category: "Wedding Stories",
    date: "Dec 5, 2025",
    readTime: "8 min read",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container-custom px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-body uppercase tracking-widest rounded-full mb-6">
              Our Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-gradient-gold">
              Stories & Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              Behind-the-scenes stories, photography tips, and featured wedding tales from Kashmir's most beautiful moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/50 text-muted-foreground hover:bg-primary/20 hover:text-primary border border-border/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-20">
        <div className="container-custom px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} {...post} index={index} />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground font-body text-lg">
                No posts found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <SectionTitle
              eyebrow="Stay Updated"
              title="Subscribe to Our Newsletter"
              subtitle="Get the latest photography tips, behind-the-scenes content, and exclusive offers delivered to your inbox."
              centered
            />
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-background border border-border/50 rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
