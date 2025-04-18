
import { useState } from "react";
import IdeaCard from "./IdeaCard";
import { categories } from "@/data/ideas";
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from "lucide-react";

interface IdeaGalleryProps {
  ideas: any[];
}

const IdeaGallery = ({ ideas }: IdeaGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const filteredIdeas = selectedCategory === "all" 
    ? ideas 
    : ideas.filter(idea => idea.category === selectedCategory);

  return (
    <div className="py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        {/* Categories filter */}
        <div className="flex overflow-x-auto pb-2 space-x-2">
          {categories.map(category => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              className={selectedCategory === category.value 
                ? "bg-mcp-purple hover:bg-mcp-darkpurple" 
                : ""}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* View toggle */}
        <div className="flex border rounded-md overflow-hidden">
          <button
            className={`flex items-center px-3 py-2 ${
              viewMode === "grid" ? "bg-mcp-purple text-white" : "bg-white text-gray-500"
            }`}
            onClick={() => setViewMode("grid")}
          >
            <Grid3X3 className="h-4 w-4" />
          </button>
          <button
            className={`flex items-center px-3 py-2 ${
              viewMode === "list" ? "bg-mcp-purple text-white" : "bg-white text-gray-500"
            }`}
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {filteredIdeas.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-lg font-medium text-gray-700">No ideas found</h3>
          <p className="mt-2 text-gray-500">Try selecting a different category</p>
        </div>
      ) : (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredIdeas.map(idea => (
            <IdeaCard 
              key={idea.id}
              id={idea.id}
              title={idea.title}
              description={idea.description}
              category={idea.category}
              author={idea.author}
              likes={idea.likes}
              image={idea.image} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default IdeaGallery;
