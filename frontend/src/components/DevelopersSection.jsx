import React from "react";
import { CheckCircle, DollarSign, Shield, TrendingUp } from "lucide-react";

const DevelopersSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Instant Compliance",
      description: "Meet the 20% EV-ready mandate with zero construction or delays.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      title: "Massive Cost Savings",
      description: "Avoid lakhs in infrastructure CAPEX and resident installation costs.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Eliminate fire risks associated with basement wiring and fixed chargers.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "Future-Proof & Scalable",
      description: "Deploy on-demand as your community's EV adoption grows.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            A Win-Win for Developers & Residents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We solve the biggest hurdles in residential EV charging, creating value for everyone involved.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 min-h-[300px] flex flex-col justify-end">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;