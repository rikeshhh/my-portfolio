import AboutMe from "@/section/AboutMe";
import Contact from "@/section/Contact";
import Experience from "@/section/Experience";
import HeroSection from "@/section/HeroSection";
import Skill from "@/section/Skills";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
     <HeroSection/>
     <AboutMe/>
     <Contact/>
     <Experience/>
     <Skill/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      footer
      </footer>
    </div>
  );
}
