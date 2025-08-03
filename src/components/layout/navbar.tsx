import { Box, Button, Center, HStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { BsEnvelope, BsPerson, BsSuitcaseLg, BsTerminal } from "react-icons/bs";

interface Link {
  name: string;
  href: string;
  icon: ReactNode;
}

export const Navbar = () => {
  const links: Link[] = [
    { name: "Home", href: "#hero", icon: <BsTerminal /> },
    { name: "Sobre", href: "#about", icon: <BsPerson /> },
    { name: "Projetos", href: "#projects", icon: <BsSuitcaseLg /> },
    { name: "Contato", href: "#contact", icon: <BsEnvelope /> },
  ];
  return (
    <Center position="fixed" top={4} marginX={"auto"}>
      <Box px={4} py={3} hideBelow={"sm"} colorPalette={"cyan"} rounded={"full"} shadow="md" w="fit-content" borderWidth={0.2}>
        <HStack>
          {links.map(({ name, href, icon }, index) => (
            <Button key={index} rounded="full" asChild variant={"ghost"} color={"gray.300"} _hover={{ color: "cyan.500" }} _active={{ color: "cyan.600" }} fontWeight="semibold">
              <a href={href}>{icon} {name}</a>
            </Button>
          ))}
        </HStack>
      </Box>
    </Center>
  )
}
