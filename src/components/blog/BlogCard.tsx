import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  index?: number;
}

const BlogCard = ({ slug, title, excerpt, image, category, date, readTime, index = 0 }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/blog/${slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-body uppercase tracking-wider rounded">
            {category}
          </span>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {readTime}
            </span>
          </div>
          
          <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>
          
          <span className="inline-flex items-center gap-2 text-primary font-body text-sm group-hover:gap-3 transition-all duration-300">
            Read More <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
