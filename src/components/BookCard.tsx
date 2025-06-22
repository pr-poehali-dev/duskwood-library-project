import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  type: "book" | "game";
  image?: string;
  link?: string;
  description?: string;
}

const BookCard = ({
  title,
  author,
  type,
  image,
  link,
  description,
}: BookCardProps) => {
  const defaultImage =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop";

  const CardContent = () => (
    <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || defaultImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              type === "book"
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-accent-foreground"
            }`}
          >
            {type === "book" ? "Книга" : "Игра"}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-2">{author}</p>
        {description && (
          <p className="text-sm text-foreground/80 line-clamp-2 mb-3">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-accent">
            <Icon name={type === "book" ? "BookOpen" : "Gamepad2"} size={16} />
            <span className="text-xs capitalize">{type}</span>
          </div>
          {link && (
            <Icon
              name="ExternalLink"
              size={16}
              className="text-muted-foreground"
            />
          )}
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default BookCard;
