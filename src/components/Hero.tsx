
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-mcp-light to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Unleash your</span>{" "}
              <span className="block text-mcp-purple">creative potential</span>
            </h1>
            <p className="mt-6 text-base text-gray-500 sm:text-lg md:text-xl">
              Discover and share incredible Masterpiece Creator Prompts.
              Get inspired, collaborate, and turn your creative visions into reality.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to="/submit">
                  <Button className="w-full bg-mcp-purple hover:bg-mcp-darkpurple flex items-center justify-center">
                    Submit Your Idea
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button variant="outline" className="w-full">
                  Browse Ideas
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-mcp-light rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Creative inspiration"
                  className="w-full rounded-lg opacity-90"
                />
                <div className="absolute inset-0 bg-mcp-purple bg-opacity-20 flex items-center justify-center">
                  <svg 
                    className="h-20 w-20 text-white opacity-80"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path 
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM10.622 8.415l4.879 3.252a.4.4 0 010 .666l-4.88 3.252a.4.4 0 01-.621-.332V8.747a.4.4 0 01.622-.332z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
