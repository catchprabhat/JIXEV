import React, { useState } from "react";
import { Calendar, Tag } from "lucide-react";

const NewsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const newsArticles = [
    {
      category: "Insights",
      title: "Exicom provides technology support to JIXEV",
      excerpt: "Exicom Tele-Systems Limited (BSE: 544133 | NSE: EXICOM), an Indian manufacturer of EV charging and critical power solutions, announced its partnership with JIXEV...",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800",
      date: "September 2025"
    },
    {
      category: "Insights",
      title: "Exicom backs JIXEV to pilot mobile EV charging, Bridging grid gaps in urban India",
      excerpt: "Exicom Tele Systems Limited, a leading Indian EV charging manufacturer, has partnered with JIXEV, an on-demand mobile EV charging solution...",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800",
      date: "September 2025"
    },
    {
      category: "News",
      title: "Exicom Backs Mobile EV Charging Startup to Address Urban Infrastructure Challenges",
      excerpt: "Leading Indian EV charging manufacturer partners with JIXEV to test and scale mobile charging solutions, targeting grid readiness...",
      image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=800",
      date: "September 2025"
    },
    {
      category: "News",
      title: "Exicom backs an emerging EV Charging concept – EV Charging on Wheels",
      excerpt: "Exicom Tele-Systems Limited (BSE: 544133 | NSE: EXICOM), one of India's leading EV charging and critical power solutions manufacturer...",
      image: "https://images.unsplash.com/photo-1609832994616-d3d3e18a2a8c?q=80&w=800",
      date: "September 2025"
    },
    {
      category: "News",
      title: "Exicom backs mobile EV charging startup 'JIXEV' to strengthen EV ecosystem",
      excerpt: "Exicom Tele-Systems Limited has announced that it is backing JIXEV, a mobile EV charging startup, to scale the EV infrastructure...",
      image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800",
      date: "September 2025"
    },
    {
      category: "Insights",
      title: "Exicom backs Charging on Wheels as Technology Enabler",
      excerpt: "The partnership with Exicom will enable JIXEV to strengthen their technology platform and make early inroads in the market...",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800",
      date: "September 2025"
    }
  ];

  const filteredArticles = activeFilter === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Updates
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["All", "Insights", "News"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:text-gray-900 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  {article.date}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;