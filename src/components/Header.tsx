
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-mcp-purple rounded-lg p-1.5 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="text-xl font-bold text-mcp-dark">MCP Ideas</span>
            </Link>
          </div>

          {/* Search bar - medium screens and up */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search ideas..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-mcp-purple focus:border-transparent"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Link to="/" className="text-mcp-darkpurple hover:text-mcp-purple px-3 py-2 text-sm font-medium hidden sm:block">
              Explore
            </Link>
            <Link to="/submit">
              <Button className="bg-mcp-purple hover:bg-mcp-darkpurple">
                Submit Idea
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
