import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  const faqCategories = [
    {
      category: "For EV Users & Residents",
      faqs: [
        {
          question: "How does JIXEV work?",
          answer: "JIXEV (Charger on Wheels) brings fast charging directly to your parking spot. Book via app, our unit arrives, charges your EV, and leaves—no fixed installation needed."
        },
        {
          question: "Is it compatible with my EV?",
          answer: "Yes! Our chargers support all major EV models sold in India, including both CCS2 and Type 2 connectors."
        },
        {
          question: "How long does charging take?",
          answer: "Most EVs get a full charge in 60–90 minutes, depending on battery size and state of charge."
        }
      ]
    },
    {
      category: "For Developers & Property Managers",
      faqs: [
        {
          question: "Why is JIXEV better than wired infrastructure?",
          answer: "No construction, no fire risk, no CAPEX. JIXEV is flexible, scalable, and instantly compliant with EV mandates."
        },
        {
          question: "Does JIXEV need building power?",
          answer: "No. JIXEV is a self-powered mobile unit. No wiring, no load on your building's grid."
        },
        {
          question: "Is the model scalable?",
          answer: "Absolutely! JIXEV can be deployed as your community's EV adoption grows—no limit to the number of units."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            FAQs
          </h2>
          <p className="text-xl text-gray-600">
            Here are some of the most common questions we get from residents and developers.
          </p>
        </div>

        {/* FAQ Categories */}
        {faqCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {category.category}
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {category.faqs.map((faq, faqIndex) => (
                <AccordionItem
                  key={faqIndex}
                  value={`item-${catIndex}-${faqIndex}`}
                  className="bg-gray-50 rounded-lg px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-green-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;