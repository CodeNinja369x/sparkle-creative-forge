
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

// Mock idea data (replace with actual data source later)
import { ideas } from "@/data/ideas";

const IdeaPage = () => {
  const { id } = useParams();
  const [idea, setIdea] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const foundIdea = ideas.find(i => i.id === id);
      setIdea(foundIdea);
      setIsLoading(false);
    }, 300);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-mcp-purple text-xl">Loading idea...</div>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Idea not found</h1>
        <p className="text-muted-foreground mb-6">The idea you're looking for doesn't exist or has been removed.</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="max-w-6xl mx-auto pt-8 px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center text-mcp-darkpurple hover:text-mcp-purple transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to ideas</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Hero image */}
          <div className="w-full h-80 bg-mcp-light relative">
            <img 
              src={idea.image} 
              alt={idea.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-mcp-dark">{idea.title}</h1>
                <p className="text-muted-foreground mt-2">
                  Created by <span className="font-medium text-mcp-darkpurple">{idea.author}</span> • {idea.date}
                </p>
                <div className="flex items-center mt-3 space-x-2">
                  <span className="bg-mcp-light text-mcp-darkpurple px-3 py-1 rounded-full text-sm">
                    {idea.category}
                  </span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-mcp-darkpurple hover:text-mcp-purple hover:bg-mcp-light">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-mcp-darkpurple hover:text-mcp-purple hover:bg-mcp-light">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-mcp-darkpurple hover:text-mcp-purple hover:bg-mcp-light">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">{idea.description}</p>
              {idea.longDescription && (
                <div className="mt-4">
                  {idea.longDescription.split('\n').map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Engagement section */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-mcp-purple mr-2" />
                  <span className="text-muted-foreground">{idea.likes} people like this idea</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaPage;
