import RootLayout from "./layout";
import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/components/homepage/HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import About from "@/components/about/About";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";
import Services from "@/components/services/Services";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
      <RootLayout>
        <Navbar />
        <HomePage />
        <About />
        <Services />
        <Testimonials />
        <Footer />
      </RootLayout>
  );
}
