import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AfaziaContext from "./components/AfaziaContext";
import PartnerStrip from "./components/PartnerStrip";
import Vision from "./components/Vision";
import ProblemBlock from "./components/ProblemBlock";
import MetricsBand from "./components/MetricsBand";
import Testimonials from "./components/Testimonials";
import WhoUsesIt from "./components/WhoUsesIt";
import ClinicalContext from "./components/ClinicalContext";
import NewsEvents from "./components/NewsEvents";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AfaziaContext />
      <PartnerStrip />
      <Vision />
      <ProblemBlock />
      <MetricsBand />
      <Testimonials />
      <WhoUsesIt />
      <ClinicalContext />
      <NewsEvents />
      <DemoForm />
      <Footer />
    </main>
  );
}
