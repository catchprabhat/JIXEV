import React from "react";
import { Smartphone, Truck, Zap, CheckCircle2 } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Smartphone,
      title: "Request Charging",
      description: "Residents book a charging slot via our user-friendly mobile app.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600",
      color: "from-green-500 to-green-600"
    },
    {
      number: "02",
      icon: Truck,
      title: "JIXEV Arrives",
      description: "Our mobile unit is dispatched to the vehicle's designated parking spot.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "03",
      icon: Zap,
      title: "Safe Charging",
      description: "A trained operator handles the entire process, ensuring a safe and efficient charge.",
      image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=600",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Charge Complete",
      description: "The resident is notified, payment is handled in-app, and our unit departs.",
      image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=600",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Seamless Charging in 4 Simple Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="text-8xl font-bold text-gray-100 absolute -top-8 -left-4 -z-10">
                      {step.number}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    <div className={`mt-6 h-1 w-24 bg-gradient-to-r ${step.color}`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;