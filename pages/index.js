import RootLayout from "./layout";
import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/components/homepage/HomePage";

export default function Home() {

  return (
      <RootLayout>
        <Navbar />
        <HomePage />
      </RootLayout>
  );
}
