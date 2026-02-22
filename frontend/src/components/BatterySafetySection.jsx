import React from "react";
import { Shield, Zap, TrendingUp } from "lucide-react";

const BatterySafetySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Is DC Fast Charging Safe for Your Battery?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            It's a common question. Let's look at the science and data to put your mind at ease.
            The short answer: <span className="font-bold text-green-600">Yes, it's overwhelmingly safe.</span>
          </p>
        </div>

        {/* Data Visualization */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Battery Capacity Retention Over Time
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="h-48 flex flex-col justify-end mb-4">
                  <div className="bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg" style={{ height: '95%' }}>
                    <div className="text-white font-bold text-center pt-4">95%</div>
                  </div>
                </div>
                <p className="text-center font-semibold text-gray-800">AC Charging</p>
                <p className="text-center text-sm text-gray-600">After 50,000 miles</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="h-48 flex flex-col justify-end mb-4">
                  <div className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg" style={{ height: '92.5%' }}>
                    <div className="text-white font-bold text-center pt-4">92.5%</div>
                  </div>
                </div>
                <p className="text-center font-semibold text-gray-800">DC Fast Charging</p>
                <p className="text-center text-sm text-gray-600">After 50,000 miles</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="h-48 flex flex-col justify-end mb-4">
                  <div className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg" style={{ height: '90%' }}>
                    <div className="text-white font-bold text-center pt-4">90%</div>
                  </div>
                </div>
                <p className="text-center font-semibold text-gray-800">Industry Average</p>
                <p className="text-center text-sm text-gray-600">After 8 years</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Only 2.5% difference - negligible in real-world usage
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How It Works: Smart & Gentle Power
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <Zap className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Constant Communication</h4>
              </div>
              <p className="text-gray-600">
                Your EV and our charger are always talking, determining the optimal charging speed for maximum battery health.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Shield className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Protective Tapering</h4>
              </div>
              <p className="text-gray-600">
                Charging is fastest at the beginning and automatically slows down as the battery approaches 80% to prevent stress.
              </p>
            </div>
          </div>
        </div>

        {/* Real World Studies */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Proof is in the Data: Real-World Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100 hover:border-green-300 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">50,000 Miles Study</h4>
              <p className="text-gray-600 text-sm text-center">
                After 50,000 miles, EVs charged with DC fast chargers showed only a 2.5% higher battery capacity reduction compared to those using slower AC charging.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">12,500 Tesla Study</h4>
              <p className="text-gray-600 text-sm text-center">
                A study of over 12,500 Teslas found no statistically significant difference in battery degradation between cars that fast-charged over 90% of the time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">Thermal Management</h4>
              <p className="text-gray-600 text-sm text-center">
                Analysis showed that modern EVs with thermal management systems handle DC fast charging effectively. The biggest factor was extreme heat, not charging method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatterySafetySection;