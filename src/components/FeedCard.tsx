import { motion } from "framer-motion";

interface FeedCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  index: number;
}

const FeedCard = ({ image, category, title, excerpt, index }: FeedCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-editorial group cursor-pointer"
    >
      <div className="overflow-hidden h-[450px] bg-card mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80 transition-all duration-700 ease-out"
          loading="lazy"
        />
      </div>
      <span className="badge-category">{category}</span>
      <h3 className="font-display text-2xl md:text-3xl text-foreground leading-snug mt-4 mb-3">
        {title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        {excerpt}
      </p>
    </motion.article>
  );
};

export default FeedCard;
