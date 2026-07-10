import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import InvestorsFinancialDashboard from "./InvestorsFinancialDashboard";

const IMG = "https://chargeronwheels.in/wp-content/uploads";

function Section({ className, children, id }) {
  return (
    <section id={id} className={cn("px-4 py-14 sm:px-6 sm:py-20 lg:px-8", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function GradientTitle({ children, className, as: Comp = "h2" }) {
  return (
    <Comp
      className={cn(
        "bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}

function TextCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold leading-snug sm:text-xl">
        <span className="bg-gradient-to-r from-green-600 to-emerald-800 bg-clip-text text-transparent">{title}</span>
      </h3>
      <p className="mt-3 text-base leading-relaxed text-gray-600">{children}</p>
    </div>
  );
}

function ImageTextCard({ src, title, children }) {
  return (
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
      <img src={src} alt={title} loading="lazy" className="mb-4 h-28 w-28 object-contain" />
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{children}</p>
    </div>
  );
}

const InvestorsPitchDeck = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "JIXEV – Investor Pitch Deck";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-green-50/80 via-white to-blue-50/40">
      <div className="mx-auto flex max-w-6xl justify-end px-4 pt-28 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex rounded-full border border-green-600 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-50"
        >
          Back Our Vision
        </Link>
      </div>

      <Section className="pt-4">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
         JIXEV
        </p>
        <GradientTitle className="text-center leading-tight">
          Empowering
          <br />
          EV-Ready Living.
        </GradientTitle>
        <div className="mt-8 flex justify-center">
          <img
            src="/image7.jpeg" //image1.jpeg
            alt="JIXEV"
            className="max-h-72 w-full max-w-4xl object-contain"
            loading="lazy"
          />
        </div>
      </Section>

      <Section className="bg-white/70">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          The EV Charging Challenge in Housing Societies
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-600">
          Traditional fixed chargers create significant hurdles for both real estate developers and residents, slowing
          down the transition to electric mobility.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <TextCard title="Extremely Costly">
            Significant upfront investment in wiring, transformers, and charger hardware, costing residents ₹1.25–₹2
            lakh per installation.
          </TextCard>
          <TextCard title="Complex & Slow">
            Requires extensive civil work, multiple approvals from DISCOMs, and long installation timelines.
          </TextCard>
          <TextCard title="High Safety Risks">
            Extensive basement wiring increases fire hazards, often leading to Fire NOC rejections for developers.
          </TextCard>
          <TextCard title="Compliance Issues">
            Builders struggle to meet the mandated 20% EV-ready parking spaces due to cost and safety constraints.
          </TextCard>
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Our Solution: JIXEV
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
          JIXEV is a revolutionary mobile DC fast charger that brings the charging station directly to the
          EV, eliminating all the problems of fixed infrastructure.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TextCard title="Mobile DC Fast Charging">
            A self-powered van delivers up to 60kW of fast charging directly to a resident&apos;s parking spot.
          </TextCard>
          <TextCard title="No Fixed Infrastructure">
            Zero need for trenching, cabling, or expensive power upgrades. We are a plug-and-play solution.
          </TextCard>
          <TextCard title="App-Driven Convenience">
            Residents can request charging, track sessions, and pay online through our intuitive mobile app.
          </TextCard>
          <TextCard title="Human-Assisted Service">
            A trained operator manages every charging session, ensuring safety and a seamless user experience.
          </TextCard>
          <TextCard title="Battery Powered (BESS)">
            Our system relies on its own battery storage, reducing grid dependency and enabling strategic off-peak
            charging.
          </TextCard>
          <TextCard title="Inherently Fire-Safe">
            By eliminating permanent basement wiring, we operate in open, monitored conditions, drastically minimizing
            fire risk.
          </TextCard>
        </div>
      </Section>

      <Section className="bg-white/80">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          The Undeniable Advantages of JIXEV
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-gray-600">
          We deliver unparalleled value to every stakeholder in the residential ecosystem. Explore the benefits tailored
          for each group.
        </p>
        <Tabs defaultValue="developers" className="w-full">
          <TabsList className="mx-auto mb-8 flex h-auto w-full max-w-md flex-wrap justify-center gap-2 rounded-full bg-gray-200 p-1 sm:flex-nowrap">
            <TabsTrigger value="developers" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow">
              For Developers
            </TabsTrigger>
            <TabsTrigger value="residents" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow">
              For Residents
            </TabsTrigger>
          </TabsList>
          <TabsContent value="developers">
            <div className="grid gap-6 sm:grid-cols-2">
              <TextCard title="Zero Installation Cost">Eliminate all upfront CAPEX on charging infrastructure.</TextCard>
              <TextCard title="Effortless Compliance">
                Meet EV charging mandates and secure Fire NOCs without safety risks.
              </TextCard>
              <TextCard title="No Extra Power Load">
                Avoid costly upgrades to sanctioned electrical load for the society.
              </TextCard>
              <TextCard title="On-Demand Scalability">
                Deploy chargers only as EV adoption grows, ensuring no underutilized assets.
              </TextCard>
            </div>
          </TabsContent>
          <TabsContent value="residents">
            <div className="grid gap-6 sm:grid-cols-2">
              <TextCard title="Save ₹1.25–₹2 Lakh">No need to purchase and install a personal fixed charger.</TextCard>
              <TextCard title="Ultra-Fast Charging">
                Power up in 30 mins with 60kW DC charging, not 6-12 hours.
              </TextCard>
              <TextCard title="Total Convenience">
                Get your EV charged at your own parking spot, on your schedule.
              </TextCard>
              <TextCard title="Guaranteed Uptime">
                Our fleet of backup vans ensures you always have access to charging.
              </TextCard>
            </div>
          </TabsContent>
        </Tabs>
      </Section>

    
      <Section className="bg-slate-50/90">
        <InvestorsFinancialDashboard />
      </Section>

      <Section>
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Our Strategy: Tapping into High-Growth Markets &amp; Building Key Partnerships
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
          We are perfectly positioned at the intersection of surging EV adoption and supportive government regulations,
          actively collaborating with industry leaders and expanding our business model.
        </p>
        <div className="grid gap-10 md:grid-cols-3">
          <ImageTextCard src={`${IMG}/2025/09/Surging-EV-Adoption-1.png`} title="Surging EV Adoption">
            India&apos;s EV market is experiencing exponential growth, creating massive, untapped demand for convenient
            charging solutions within residential complexes.
          </ImageTextCard>
          <ImageTextCard src={`${IMG}/2025/09/Favorable-Regulations-1.png`} title="Favorable Regulations">
            Government mandates (MBBL &amp; URDPFI) require new buildings to have 20% EV-ready parking, creating a
            compliance-driven need for solutions like JIXEV.
          </ImageTextCard>
          <ImageTextCard src={`${IMG}/2025/09/De-licensed-Activity-1.png`} title="De-licensed Activity">
            Ministry of Power guidelines have de-licensed the setup of public charging stations, removing bureaucratic
            hurdles and encouraging private sector innovation.
          </ImageTextCard>
        </div>
      </Section>

      <Section className="bg-white/80">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Expanding Our Reach: Partnerships with Facility Management Companies
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
          We are developing a strategic second line of business by partnering with leading Facility Management (FM)
          companies. This allows us to create efficient charging clusters catering to multiple societies within a 2-3km
          radius.
        </p>
        <div className="grid gap-10 md:grid-cols-3">
          <ImageTextCard src={`${IMG}/2025/09/The-FM-Opportunity-1.png`} title="The FM Opportunity">
            FM companies like CBRE, JLL, Enviro, and Abante manage vast real estate portfolios, providing a direct
            channel to numerous residential and commercial properties.
          </ImageTextCard>
          <ImageTextCard src={`${IMG}/2025/09/The-Cluster-Model-1.png`} title="The Cluster Model">
            By deploying JIXEV units in 2-3km clusters, we can efficiently serve multiple societies,
            maximizing utilization and market penetration within a concentrated geographic area.
          </ImageTextCard>
          <ImageTextCard src={`${IMG}/2025/09/Mutual-Benefits-1.png`} title="Mutual Benefits">
            FM partners can offer a premium, hassle-free EV charging service to their clients without CAPEX or
            operational burden, enhancing their service portfolio and client satisfaction.
          </ImageTextCard>
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Geographic Strategy: Golf Course Road Cluster Example
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-gray-600">
          Visualizing our cluster strategy: A single JIXEV van can efficiently serve multiple high-density
          residential societies within a compact 2-3km radius along key corridors like Golf Course Road.
        </p>
        <img
          src={`${IMG}/2025/09/Cluster.png`}
          alt="Cluster map"
          loading="lazy"
          className="mx-auto w-full max-w-5xl rounded-2xl shadow-lg"
        />
      </Section>

      <Section className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white">
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase text-green-600">Residential Projects</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">New Constructions in Metro Cities</h2>
            <p className="mt-4 text-gray-600">
              With India&apos;s metro cities adding <strong>1.3 million</strong> new homes, developers have a golden
              opportunity. By integrating JIXEV, they can offer a zero-CAPEX, future-ready EV charging solution that
              satisfies regulatory requirements and attracts eco-conscious buyers, enhancing project value without
              increasing costs.
            </p>
          </div>
          <img
            src={`${IMG}/2025/09/Residential-Projects.jpg`}
            alt="Residential projects"
            loading="lazy"
            className="h-64 w-full rounded-2xl object-cover shadow-md lg:h-auto lg:min-h-[280px]"
          />
        </div>

        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:flex-row-reverse">
          <img
            src={`${IMG}/2025/09/electric-car-4276419_640.jpg`}
            alt="EV charging"
            loading="lazy"
            className="order-2 h-64 w-full rounded-2xl object-cover shadow-md lg:order-1 lg:h-auto lg:min-h-[280px]"
          />
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase text-green-600">Existing Developed Projects</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">The Retrofit Challenge</h2>
            <p className="mt-4 text-gray-600">
              For millions living in existing apartments, installing a personal EV charger is a maze of high costs and
              logistical hurdles. Since early public infrastructure catered to 2/3-wheelers, car owners are left behind.
              JIXEV elegantly bypasses these barriers, offering a simple, accessible charging solution for everyone.
            </p>
          </div>
        </div>

        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase text-green-600">Facility Management</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">B2B Channel Strategy</h2>
            <p className="mt-4 text-gray-600">
              Strategic alliances with Facility Management firms provide a direct and efficient channel to vast property
              portfolios. This B2B approach enables rapid, streamlined deployment across numerous residential and
              commercial sites, fostering scalable growth and creating dense, efficient service networks.
            </p>
          </div>
          <img
            src={`${IMG}/2025/09/charge-on-wheel-4.png`}
            alt="JIXEV"
            loading="lazy"
            className="h-64 w-full rounded-2xl object-contain shadow-md lg:h-auto"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-green-600">OEMs</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">Synergistic OEM Partnerships</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            With the Indian EV market projected to hit <strong className="text-green-600">700,000</strong> annual sales
            by 2030, the focus of leading OEMs like Tata and Mahindra is on highway infrastructure. This creates a
            critical gap for the daily, at-home charging experience. JIXEV fills this void perfectly, offering a
            synergistic partnership that completes the EV ownership experience and makes it seamless for new buyers.
          </p>
        </div>
      </Section>

      <Section className="bg-white/90">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">Business Market for JIXEV</h2>
        <Tabs defaultValue="residential" className="w-full">
          <TabsList className="mx-auto mb-8 flex h-auto min-h-12 w-full flex-col flex-wrap justify-stretch gap-2 rounded-2xl bg-gray-200 p-2 sm:flex-row sm:justify-center lg:max-w-4xl">
            <TabsTrigger value="residential" className="flex-1 rounded-xl data-[state=active]:bg-white">
              Residential Projects
            </TabsTrigger>
            <TabsTrigger value="existing" className="flex-1 rounded-xl data-[state=active]:bg-white">
              Existing Developed Projects
            </TabsTrigger>
            <TabsTrigger value="fm" className="flex-1 rounded-xl data-[state=active]:bg-white">
              Facility Management
            </TabsTrigger>
            <TabsTrigger value="oem" className="flex-1 rounded-xl data-[state=active]:bg-white">
              OEMs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="residential" className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
            <h3 className="text-xl font-bold text-gray-900">New Constructions in Metro Cities</h3>
            <p className="mt-4 text-gray-600">
              With India&apos;s metro cities adding <strong className="text-green-600">1.3 million</strong> new homes,
              developers have a golden opportunity. By integrating JIXEV, they can offer a zero-CAPEX, future-ready EV
              charging solution that satisfies regulatory requirements and attracts eco-conscious buyers, enhancing
              project value without increasing costs.
            </p>
          </TabsContent>
          <TabsContent value="existing" className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
            <h3 className="text-xl font-bold text-gray-900">The Retrofit Challenge</h3>
            <p className="mt-4 text-gray-600">
              For millions living in existing apartments, installing a personal EV charger is a maze of high costs and
              logistical hurdles. Since early public infrastructure catered to 2/3-wheelers, car owners are left behind.
              JIXEV elegantly bypasses these barriers, offering a simple, accessible charging solution for everyone.
            </p>
          </TabsContent>
          <TabsContent value="fm" className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
            <h3 className="text-xl font-bold text-gray-900">B2B Channel Strategy</h3>
            <p className="mt-4 text-gray-600">
              Strategic alliances with Facility Management firms provide a direct and efficient channel to vast property
              portfolios. This B2B approach enables rapid, streamlined deployment across numerous residential and commercial
              sites, fostering scalable growth and creating dense, efficient service networks.
            </p>
          </TabsContent>
          <TabsContent value="oem" className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
            <h3 className="text-xl font-bold text-gray-900">Synergistic OEM Partnerships</h3>
            <p className="mt-4 text-gray-600">
              With the Indian EV market projected to hit <strong className="text-green-600">700,000</strong> annual
              sales by 2030, the focus of leading OEMs like Tata and Mahindra is on highway infrastructure. This creates
              a critical gap for the daily, at-home charging experience. JIXEV fills this void perfectly, offering a
              synergistic partnership that completes the EV ownership experience and makes it seamless for new buyers.
            </p>
          </TabsContent>
        </Tabs>
      </Section>

      <Section className="pb-8">
        <p className="text-center text-sm text-gray-600">
          Empowering EV-Ready Living. On-demand, mobile EV charging brought directly to your doorstep. Developed by
          Roving Salvatory Technologies Pvt. Ltd.
        </p>
      </Section>
    </div>
  );
};

export default InvestorsPitchDeck;
