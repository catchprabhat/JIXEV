import React from "react";
import { Leaf, DollarSign, Activity, Building } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Leaf,
      value: "15+",
      unit: "tons",
      label: "CO₂ & Materials Saved Per Unit",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      value: "₹200000",
      unit: "",
      label: "Saved by Residents Per EV",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Activity,
      value: "99%",
      unit: "",
      label: "Service Uptime",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Building,
      value: "0",
      unit: "",
      label: "Required Site Construction",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800"
            alt="JIXEV Service"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-8"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                  {stat.unit && <span className="text-2xl ml-1">{stat.unit}</span>}
                </div>
                <p className="text-white/90 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            We've engineered a frictionless experience for both residents and property managers.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;