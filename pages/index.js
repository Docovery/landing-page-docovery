import RootLayout from "./layout";
import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/components/homepage/HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
      <RootLayout>
        <Navbar />
        <HomePage />
      </RootLayout>
  );
}
