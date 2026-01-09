import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span className="font-elegant text-primary text-lg tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`w-16 h-px bg-gradient-gold mt-6 ${centered ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
};

export default SectionTitle;
