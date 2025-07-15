import { Center, Container } from "@chakra-ui/react";
import { Drawer } from "./drawer";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Background } from "./background";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container fluid>
      <Background />
      <Center>
        <Navbar />
        <Drawer />
          {children}
        <Footer />
      </Center>
    </Container>
  )
}
