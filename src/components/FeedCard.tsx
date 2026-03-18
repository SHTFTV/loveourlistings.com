import { motion } from "framer-motion";

interface FeedCardProps {
  image: string;
  category: string;
  source: string;
  title: string;
  excerpt: string;
  index: number;
}

const FeedCard = ({ image, category, source, title, excerpt, index }: FeedCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-editorial group cursor-pointer bg-background"
    >
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="badge-boutique">{source}</span>
          <span className="font-body text-xs text-muted-foreground tracking-wide uppercase">
            {category}
          </span>
        </div>
        <h3 className="font-display text-xl md:text-2xl text-foreground leading-snug mb-2">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      </div>
    </motion.article>
  );
};

export default FeedCard;
