import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AfaziaContext from "./components/AfaziaContext";
import ProductArchitecture from "./components/ProductArchitecture";
import PartnerStrip from "./components/PartnerStrip";
import Vision from "./components/Vision";
import ProblemBlock from "./components/ProblemBlock";
import ClinicalFoundation from "./components/ClinicalFoundation";
import MetricsBand from "./components/MetricsBand";
import Testimonials from "./components/Testimonials";
import WhoUsesIt from "./components/WhoUsesIt";
import ClinicalContext from "./components/ClinicalContext";
import NumbersSection from "./components/NumbersSection";
import NewsEvents from "./components/NewsEvents";
import SecuritySection from "./components/SecuritySection";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AfaziaContext />
      <ProductArchitecture />
      <PartnerStrip />
      <Vision />
      <ProblemBlock />
      <ClinicalFoundation />
      <MetricsBand />
      <Testimonials />
      <WhoUsesIt />
      <ClinicalContext />
      <NumbersSection />
      <NewsEvents />
      <SecuritySection />
      <DemoForm />
      <Footer />
    </main>
  );
}
