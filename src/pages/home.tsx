import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectSection } from "@/components/sections/project-section";
import { MainLayout } from "@/components/layout/main-layout";
import { Stack } from "@chakra-ui/react";


export default function Home() {
  return (
    <MainLayout>
      <Stack gap={4}>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </Stack>
    </MainLayout>
  );
}
