import { Box, Container } from "@chakra-ui/react";
import { Drawer } from "./drawer";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Background } from "./background";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box colorPalette={"blue"}>
      <Background />
      <Navbar />
      <Drawer />
      {children}
      <Footer />
    </Box>
  )
}
