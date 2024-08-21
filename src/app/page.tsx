import Image from "next/image";
import Hero from "./components/section/hero";
import AboutUs from "./components/section/aboutus";

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto max-w-[1338px]">
      <Hero />
      <AboutUs />
    </main>
  );
}
