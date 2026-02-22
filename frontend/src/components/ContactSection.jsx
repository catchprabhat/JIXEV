import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Rotating Text Effect */}
      <div className="absolute top-10 right-10 opacity-20">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold animate-spin" style={{ animationDuration: "20s" }}>
            <div className="text-center">
              let's meet! • let's meet! • let's meet!
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to experience the future of EV charging? Get in touch with us today.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-white/80">+91 9876543210</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-white/80">contact@jixev.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-white/80">Gurugram, Delhi NCR, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://api.whatsapp.com/send?phone=917735537655"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:bg-[#1EBE5D] transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-hidden="true">
          <path d="M16.003 2.667c-7.36 0-13.336 5.976-13.336 13.336 0 2.34.616 4.624 1.784 6.636l-1.89 6.914 7.08-1.86a13.256 13.256 0 0 0 6.362 1.62h.002c7.36 0 13.336-5.976 13.336-13.336S23.363 2.667 16.003 2.667Zm0 24.01h-.002a11.1 11.1 0 0 1-5.664-1.548l-.406-.242-4.2 1.104 1.124-4.11-.264-.422a11.08 11.08 0 0 1-1.7-5.886c0-6.126 4.986-11.112 11.112-11.112 6.126 0 11.112 4.986 11.112 11.112 0 6.126-4.986 11.112-11.112 11.112Zm6.092-8.31c-.332-.166-1.964-.97-2.268-1.082-.304-.11-.526-.166-.748.166-.222.332-.86 1.082-1.054 1.304-.194.222-.388.25-.72.084-.332-.166-1.402-.516-2.67-1.648-.986-.878-1.652-1.964-1.846-2.296-.194-.332-.02-.512.146-.678.15-.15.332-.388.498-.582.166-.194.222-.332.332-.554.11-.222.056-.416-.028-.582-.084-.166-.748-1.804-1.026-2.47-.27-.65-.546-.562-.748-.572l-.638-.012c-.222 0-.582.084-.886.416-.304.332-1.166 1.138-1.166 2.776 0 1.638 1.194 3.22 1.36 3.442.166.222 2.35 3.59 5.694 5.034.796.344 1.418.55 1.902.704.798.254 1.524.218 2.098.132.64-.096 1.964-.804 2.24-1.582.276-.778.276-1.444.194-1.582-.082-.138-.304-.222-.636-.388Z" />
        </svg>
      </a>
    </section>
  );
};

export default ContactSection;
