import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InvestorsPitchDeck from "../components/investors/InvestorsPitchDeck";

const InvestorsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <InvestorsPitchDeck />
      </main>
      <Footer />
    </div>
  );
};

export default InvestorsPage;
