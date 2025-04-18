
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface IdeaCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  likes: number;
  image: string;
}

const IdeaCard = ({ id, title, description, category, author, likes, image }: IdeaCardProps) => {
  return (
    <Link 
      to={`/idea/${id}`} 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-mcp-light text-mcp-darkpurple">
            {category}
          </Badge>
          <div className="flex items-center text-gray-500 text-sm">
            <Heart className="h-3.5 w-3.5 mr-1 text-mcp-purple" />
            <span>{likes}</span>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-bold text-mcp-dark line-clamp-1 group-hover:text-mcp-purple transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-gray-500">By {author}</span>
          <span className="text-sm font-medium text-mcp-darkpurple group-hover:text-mcp-purple transition-colors">
            Read more
          </span>
        </div>
      </div>
    </Link>
  );
};

export default IdeaCard;
