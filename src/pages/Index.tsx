import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IdeaGallery from "@/components/IdeaGallery";
import Footer from "@/components/Footer";
import { ideas } from "@/data/ideas";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Featured Ideas Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Explore Creative Prompts
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover incredible MCP ideas from our community
            </p>
          </div>
          
          <IdeaGallery ideas={ideas} />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Easy steps to get started with creative MCP ideas
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-mcp-light mx-auto">
                  <span className="text-2xl font-bold text-mcp-purple">1</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Browse</h3>
                <p className="mt-2 text-base text-gray-500">
                  Explore our collection of creative prompts from various categories.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-mcp-light mx-auto">
                  <span className="text-2xl font-bold text-mcp-purple">2</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Create</h3>
                <p className="mt-2 text-base text-gray-500">
                  Use the prompts to inspire your own creative work or generate new ideas.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-mcp-light mx-auto">
                  <span className="text-2xl font-bold text-mcp-purple">3</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Share</h3>
                <p className="mt-2 text-base text-gray-500">
                  Submit your own prompts to inspire others in the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
