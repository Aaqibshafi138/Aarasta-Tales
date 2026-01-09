import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import heroKashmir from "@/assets/hero-kashmir-1.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCinema from "@/assets/hero-cinema.jpg";
import portfolioLandscape from "@/assets/portfolio-landscape.jpg";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioPortrait from "@/assets/portfolio-portrait.jpg";

const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}> = {
  "capturing-kashmir-winter-wedding": {
    title: "Capturing the Magic of a Kashmir Winter Wedding",
    excerpt: "Discover how we captured the ethereal beauty of a traditional Kashmiri wedding set against the stunning backdrop of snow-covered mountains.",
    image: heroWedding,
    category: "Wedding Stories",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    content: [
      "There's something truly magical about a winter wedding in Kashmir. The pristine white snow, the crisp mountain air, and the warm glow of traditional ceremonies create a visual tapestry unlike anything else in the world.",
      "When the Malik family approached us to document their daughter's wedding in Gulmarg, we knew this would be a special project. The venue was a heritage property overlooking the Himalayan ranges, and the forecast promised fresh snowfall on the wedding day.",
      "Our team arrived three days before the wedding to scout locations and plan our shots. We identified key moments throughout the traditional Kashmiri wedding ceremonies – from the intimate Mehndi night to the grand Nikah ceremony.",
      "The morning of the wedding, we woke up to a winter wonderland. Fresh snow had blanketed the entire valley, and the early morning light cast a golden glow over the white landscape. Our drone captured stunning aerial footage of the bridal procession making its way through the snow-covered path.",
      "One of the most challenging yet rewarding aspects was capturing the outdoor pheras in sub-zero temperatures. Our equipment needed constant attention, but the resulting footage – with snowflakes gently falling as the couple took their vows – was absolutely worth every frozen finger.",
      "The key to capturing winter weddings is preparation. We used specialized equipment rated for extreme cold, kept backup batteries warm in our jackets, and had protective covers ready for sudden weather changes. Most importantly, we maintained constant communication with the wedding planners to anticipate key moments.",
      "This wedding reminded us why we do what we do. Every tear, every laugh, every stolen glance between the couple – these are the moments that make our work meaningful. And when set against Kashmir's winter wonderland, they become nothing short of cinematic poetry."
    ]
  },
  "golden-hour-photography-tips": {
    title: "Mastering Golden Hour: Photography Tips for Magical Shots",
    excerpt: "Learn the secrets of capturing breathtaking golden hour photographs in Kashmir's unique landscape.",
    image: portfolioLandscape,
    category: "Photography Tips",
    date: "Dec 28, 2025",
    readTime: "4 min read",
    content: [
      "Golden hour – that magical time just after sunrise or before sunset – is every photographer's dream. In Kashmir, with its dramatic mountains and serene lakes, golden hour takes on an almost otherworldly quality.",
      "The first tip is simple but crucial: arrive early. Golden hour in Kashmir varies significantly with the seasons. In summer, you might need to be in position by 5:30 AM, while winter gives you a more leisurely 7:00 AM start. Use apps like PhotoPills to calculate exact times for your location.",
      "Understanding light direction is essential. During golden hour, the sun is low on the horizon, creating long shadows and warm, directional light. Position your subjects so the light falls on their faces at a pleasing angle – typically about 45 degrees from the camera.",
      "Kashmir's landscape offers unique opportunities for golden hour photography. The still waters of Dal Lake become perfect mirrors during this time, reflecting the warm sky and surrounding mountains. Position yourself to capture both the scene and its reflection for maximum impact.",
      "Don't forget about 'blue hour' – the time just before sunrise or after sunset when the sky takes on a deep blue hue. In Kashmir, this often coincides with lights coming on in houseboats and shikaras, creating a magical blend of warm artificial light and cool natural tones.",
      "Equipment-wise, a fast lens (f/2.8 or wider) helps you shoot handheld as light levels drop. A sturdy tripod is essential for the blue hour. And always shoot in RAW – the dynamic range during these times is extreme, and RAW files give you the flexibility to recover details in post-processing.",
      "Finally, embrace the unpredictable. Kashmir's weather can change rapidly, and some of our best shots have come from unexpected cloud formations or mist rolling in during golden hour. Stay flexible, keep shooting, and let the landscape surprise you."
    ]
  },
  "behind-the-scenes-destination-shoot": {
    title: "Behind the Scenes: A Destination Pre-Wedding Shoot in Gulmarg",
    excerpt: "Take a peek behind the curtain as we share the challenges and triumphs of organizing a destination pre-wedding shoot.",
    image: heroCinema,
    category: "Behind the Scenes",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    content: [
      "Destination pre-wedding shoots are becoming increasingly popular, and it's easy to see why. Couples want their love story told against breathtaking backdrops, and few places on Earth rival Kashmir's natural beauty.",
      "This behind-the-scenes look takes you through our recent shoot with Priya and Arjun in Gulmarg. From the initial planning calls to the final delivery, here's what goes into creating those perfect shots you see on social media.",
      "Planning started two months in advance. We held video calls with the couple to understand their vision, discuss outfit choices, and plan the shot list. For Gulmarg in winter, we advised layered clothing that looked elegant while keeping them warm.",
      "Logistics in a mountain destination are complex. We coordinated with local teams for transportation, identified backup indoor locations in case of weather issues, and arranged for hot beverages and warming tents to keep everyone comfortable between shots.",
      "The shoot day started at 4:30 AM. Our team of five – two photographers, two videographers, and an assistant – loaded equipment into SUVs and made the journey up to Gulmarg. The goal was to catch the first light on the snow-covered meadows.",
      "Despite meticulous planning, challenges arose. The gondola that was supposed to take us to a higher altitude location was delayed due to wind. We quickly pivoted to alternate locations and ended up discovering a beautiful frozen stream that became one of our favorite shots of the day.",
      "Post-shoot, our work continued for weeks. Culling through thousands of images, color grading to match our signature warm aesthetic, and editing the cinematic highlight reel – all while maintaining constant communication with the couple.",
      "The final delivery included 300+ edited images, a 4-minute cinematic film, and a same-day edit that the couple shared at their engagement party. Their reaction when they saw the final product? That's what makes all the early mornings and frozen fingers worthwhile."
    ]
  },
  "kashmir-hidden-photography-locations": {
    title: "Hidden Gems: Secret Photography Locations in Kashmir",
    excerpt: "Explore the lesser-known but absolutely stunning locations in Kashmir that make for perfect photography backdrops.",
    image: heroKashmir,
    category: "Kashmir Diaries",
    date: "Dec 15, 2025",
    readTime: "7 min read",
    content: [
      "While Dal Lake, Gulmarg, and Pahalgam attract most visitors, Kashmir holds countless hidden gems that offer unique photography opportunities. After years of exploring this paradise, we're sharing some of our favorite secret spots.",
      "Doodhpathri, literally meaning 'Valley of Milk', remains relatively unknown to tourists. Located about 42 km from Srinagar, this meadow offers pristine landscapes without the crowds. The rolling hills dotted with wildflowers in summer make for dreamlike pre-wedding shots.",
      "Yusmarg is another treasure. Less commercialized than its famous counterparts, this meadow at the foot of the Sunset Peak offers unobstructed views of pine forests and snow-capped mountains. The golden hour light here is particularly spectacular.",
      "For waterfall shots, skip the popular Aharbal Falls and head to the lesser-known Sindh Valley waterfalls. The journey itself, through winding mountain roads with spectacular views, often provides unexpected photography opportunities.",
      "The ancient Martand Sun Temple ruins offer a completely different aesthetic. Dating back to the 8th century, these ruins provide a dramatic backdrop for couples who want something historically significant in their photos.",
      "For winter shoots, consider Sonamarg before tourist season. The 'Meadow of Gold' transforms into a snow-covered wonderland, and the Thajiwas Glacier nearby offers dramatic ice formations for adventurous couples.",
      "The key to finding these locations is building relationships with locals. Our years of working in Kashmir have connected us with shepherds, forest rangers, and village elders who know paths and viewpoints that don't appear on any map.",
      "Remember, with hidden locations comes responsibility. We always practice Leave No Trace principles and respect local customs. These places remain beautiful because visitors treat them with care."
    ]
  },
  "portrait-lighting-techniques": {
    title: "Portrait Lighting Techniques for Stunning Bridal Photos",
    excerpt: "Master the art of portrait lighting with our comprehensive guide to creating depth, drama, and emotion.",
    image: portfolioPortrait,
    category: "Photography Tips",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    content: [
      "Beautiful bridal portraits are about more than just having a stunning subject – they're about understanding and manipulating light to create mood, dimension, and emotion. Here's our guide to mastering portrait lighting.",
      "Natural light remains our preferred choice for bridal portraits. Window light, specifically, creates soft, flattering illumination that works beautifully on every skin tone. Position your bride at about 45 degrees to a large window for classic, dimensional lighting.",
      "The inverse square law is your friend. Light falls off rapidly as distance increases. Position your bride closer to the light source for soft, even illumination, or move her further away for more dramatic shadows and contrast.",
      "Reflectors are perhaps the most underrated tools in portrait photography. A simple white or silver reflector can fill shadows, add catchlights to eyes, and create that coveted 'glow' in bridal portraits. We carry collapsible reflectors to every shoot.",
      "For indoor ceremonies, especially in Kashmir's beautiful heritage venues, learn to work with mixed lighting. Traditional ceremony spaces often combine natural light from windows with warm tungsten lamps. Custom white balance and strategic positioning can turn this challenge into a creative advantage.",
      "Don't fear dramatic lighting. While soft, even light is flattering, strategic use of shadows can add mystery and depth. Rembrandt lighting, named after the painter, creates a distinctive triangle of light on the shadowed cheek and works beautifully for emotional bridal portraits.",
      "Finally, understand color temperature. The warm light of sunset, the cool tones of overcast days, the golden glow of candles – each creates a different mood. Learn to anticipate and use these temperatures to tell the emotional story of the day."
    ]
  },
  "traditional-kashmiri-wedding-rituals": {
    title: "Documenting Traditional Kashmiri Wedding Rituals",
    excerpt: "An intimate look at how we document the rich cultural heritage and beautiful traditions of Kashmiri weddings.",
    image: portfolioWedding,
    category: "Wedding Stories",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    content: [
      "Kashmiri weddings are a beautiful tapestry of rituals, each carrying deep cultural significance passed down through generations. As photographers, our role is not just to capture images, but to preserve heritage.",
      "The wedding festivities typically begin with Livun, a cleansing ritual held a few days before the wedding. The bride's family cleans and prepares the house, and this intimate gathering offers beautiful opportunities for candid family moments.",
      "Wanvun is one of the most visually spectacular pre-wedding ceremonies. The bride's family gathers for singing traditional songs, and women apply heena while dressed in traditional pheran. The warm indoor lighting and colorful attire create stunning compositional opportunities.",
      "The Devgun ritual involves applying turmeric to the bride. The warm yellow tones of the turmeric, combined with the emotional family moments, make this one of our favorite ceremonies to photograph. We typically use natural light to capture the genuine warmth of these moments.",
      "The Nikah ceremony requires a different approach. It's a solemn, sacred moment that demands respectful distance while still capturing the emotion. We use long lenses to maintain privacy while documenting the reading of the marriage contract.",
      "Wazwan, the traditional Kashmiri feast, is a sensory experience unlike any other. Multiple courses of aromatic dishes served on large copper plates (trami) create incredible visual opportunities. We document both the food itself and the communal experience of sharing it.",
      "Understanding these rituals takes research and respect. Before every Kashmiri wedding, we consult with families to understand their specific traditions and any photography restrictions. Some moments are meant only for family, and we honor those boundaries.",
      "Our goal is to create a visual archive that families can revisit for generations. When grandchildren look at these images decades from now, they should not only see beautiful photographs but also understand the rich cultural heritage that makes Kashmiri weddings so special."
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container-custom px-4 md:px-8 pt-40 pb-20 text-center">
          <h1 className="font-display text-4xl mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-24 md:pt-32">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      </section>

      {/* Content */}
      <article className="relative -mt-32 md:-mt-40 pb-20">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-background/95 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-border/30"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm mb-6"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-body uppercase tracking-wider rounded mb-4">
              {post.category}
            </span>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-border/50 mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground font-body">Share:</span>
                <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={18} />
                </button>
                <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-foreground/90 font-body leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border/50">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-body"
              >
                <ArrowLeft size={16} />
                Back to All Posts
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
