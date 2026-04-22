import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <ContactForm 
          defaultType="candidate"
          title="Ready to Start Your Career?"
          subtitle="Join hundreds of healthcare professionals who have successfully relocated to Germany with our help."
        />
      </main>
      <Footer />
    </>
  );
}
