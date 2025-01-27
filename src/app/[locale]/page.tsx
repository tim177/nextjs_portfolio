import AboutSection from "@src/components/pages/home/AboutSection";
import ContactSection from "@src/components/pages/home/ContactSection";
import GreetingSection from "@src/components/pages/home/GreetingSection";
import PortfolioSection from "@src/components/pages/home/PortfolioSection";

export default function Page() {
  return (
    <>
      <GreetingSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
