import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("lite");
  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = (planName) => {
    sessionStorage.setItem("jixev_contact_plan", planName);
    if (location.pathname === "/") {
      scrollToContact();
    } else {
      navigate("/#contact");
    }
  };

  const litePlans = [
    {
      name: "Home Charge Lite",
      subtitle: "Occasional city rides.",
      price: "20,999",
      features: [
        "24 sessions / year",
        "Up to 30 kWh / session",
        "10 rescue sessions (SOC <20%)",
        "Up to 200 km in ~30 min",
        "2 cars on plan"
      ],
      popular: false
    },
    {
      name: "Home Charge Plus",
      subtitle: "Regular city driver.",
      price: "40,999",
      features: [
        "60 sessions / year",
        "Up to 30 kWh / session",
        "20 rescue sessions",
        "Up to 200 km in ~30 min",
        "2 cars on plan"
      ],
      popular: true
    },
    {
      name: "Home Charge Unlimited",
      subtitle: "High-usage household.",
      price: "76,999",
      features: [
        "Unlimited sessions",
        "Up to 30 kWh / session",
        "20 rescue sessions",
        "Up to 200 km in ~30 min",
        "1 car on plan"
      ],
      popular: false
    }
  ];

  const maxPlans = [
    {
      name: "Home Charge Max Lite",
      subtitle: "Large-battery EVs, longer range.",
      price: "39,999",
      features: [
        "24 sessions / year",
        "Up to 60 kWh / session",
        "10 rescue sessions",
        "Up to 200 km in ~30 min",
        "2 cars on plan"
      ],
      popular: false
    },
    {
      name: "Home Charge Max Plus",
      subtitle: "Long-distance personal use.",
      price: "80,999",
      features: [
        "60 sessions / year",
        "Up to 60 kWh / session",
        "20 rescue sessions",
        "Up to 200 km in ~30 min",
        "2 cars on plan"
      ],
      popular: true
    },
    {
      name: "Home Charge Max Unlimited",
      subtitle: "Premium, fully unlimited.",
      price: "1,52,999",
      features: [
        "Unlimited sessions",
        "Up to 60 kWh / session",
        "20 rescue sessions",
        "Up to 200 km in ~30 min",
        "1 car on plan"
      ],
      popular: false
    }
  ];

  const currentPlans = selectedPlan === "lite" ? litePlans : maxPlans;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Charging Plan
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Flexible plans for every EV owner. No hidden fees, no complexity.
          </p>

          {/* Plan Toggle */}
          <div className="inline-flex bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setSelectedPlan("lite")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedPlan === "lite"
                  ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Lite Plans (30 kWh)
            </button>
            <button
              onClick={() => setSelectedPlan("max")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedPlan === "max"
                  ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Max Plans (60 kWh)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${
                plan.popular ? "ring-4 ring-green-500" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-bl-2xl font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6">{plan.subtitle}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ₹{plan.price}
                  </span>
                  <span className="text-gray-600">/year</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => goToContact(plan.name)}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-lg transform hover:scale-105"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;