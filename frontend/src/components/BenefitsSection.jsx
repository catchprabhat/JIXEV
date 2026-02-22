import React from "react";
import { MapPin, Calendar, Battery, DollarSign, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      number: "01",
      icon: MapPin,
      title: "Doorstep EV Charging",
      description: "Never worry about finding a charging station again. We bring the charger directly to your home, office, or any location.",
      color: "from-green-500 to-green-600"
    },
    {
      number: "02",
      icon: Calendar,
      title: "On-Demand & Scheduled",
      description: "Get an immediate charge when you need it, or schedule a convenient time that fits your busy lifestyle.",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "03",
      icon: Battery,
      title: "Battery Health Optimized",
      description: "Our smart charging technology ensures optimal battery health and extends the lifespan of your EV.",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "04",
      icon: DollarSign,
      title: "Save Time & Money",
      description: "Avoid public charging queues and expensive home installations. Charge while your EV is idle and save!",
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "05",
      icon: Zap,
      title: "Zero Grid Hassle",
      description: "No need for complex grid setups or electricity connection upgrades. We handle everything.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {benefit.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${benefit.color} group-hover:w-full transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;