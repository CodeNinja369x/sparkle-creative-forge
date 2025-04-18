
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Upload } from "lucide-react";

const SubmitPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      console.log("Form submitted:", { title, description, category });
      
      // Redirect to home after "submission"
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="max-w-3xl mx-auto pt-8 px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center text-mcp-darkpurple hover:text-mcp-purple transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to ideas</span>
        </Link>
      </div>

      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Submit Your MCP Idea</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Title
              </label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a catchy title for your idea"
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-2">
                Category
              </label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Description
              </label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your MCP idea in detail..."
                required
                className="w-full min-h-[200px]"
              />
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">
                Drag and drop an image, or click to browse
              </p>
              <input
                type="file"
                className="hidden"
                accept="image/*"
              />
              <Button
                type="button"
                variant="outline"
                className="mt-4"
              >
                Browse Files
              </Button>
            </div>

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-mcp-purple hover:bg-mcp-darkpurple"
              >
                {isSubmitting ? "Submitting..." : "Submit Idea"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
