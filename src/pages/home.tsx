import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectSection } from "@/components/sections/project-section";
import { MainLayout } from "@/components/layout/main-layout";


export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </MainLayout>
  );
}
