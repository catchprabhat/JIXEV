import React from "react";
import { Grid, Crosshair, Cloud } from "lucide-react";

const InfrastructureSection = () => {
  const benefits = [
    {
      icon: Grid,
      title: "Smart Grid Support",
      description: "By charging our units during off-peak hours, we reduce strain on the power grid, support renewable energy integration, and pass the cost savings on to you.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Crosshair,
      title: "Zero Ground Disruption",
      description: "Each JIXEV unit avoids the excavation of 12-15 tons of concrete, steel, and earth. No disruptive retrofitting, no civil works, no noise or dust pollution.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Cloud,
      title: "Reduced Carbon Footprint",
      description: "We cut 3-5 tons of CO₂ annually per charger by eliminating fixed assets and using a modular, efficient battery system. It's the truly clean mobility solution.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            A Smarter Backbone for India's EV Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We enable sustainable EV adoption by eliminating the destructive impact of traditional infrastructure.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-6 transition-all duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;