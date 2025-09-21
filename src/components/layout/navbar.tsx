import { Box, Button, Center, HStack, Icon } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { LuBriefcase, LuMail, LuTerminal, LuUser } from "react-icons/lu";

interface Link {
  name: string;
  href: string;
  icon: ReactNode;
}

export const Navbar = () => {

  const links: Link[] = [
    { name: "Home", href: "#hero", icon: <LuTerminal /> },
    { name: "Sobre", href: "#about", icon: <LuUser /> },
    { name: "Projetos", href: "#projects", icon: <LuBriefcase /> },
    { name: "Contato", href: "#contact", icon: <LuMail /> },
  ];

  return (
    <Center>
      <Box mt={4} px={3} py={3} hideBelow={"sm"} rounded={"full"} shadow="md" borderWidth={0.2}>
        <HStack>
          {links.map(({ name, href, icon }, index) => (
            <Button key={index} rounded="full" asChild variant={"ghost"}
              color={"gray.300"} _hover={{ color: "cyan.500" }}
              _active={{ color: "cyan.600" }} fontWeight="semibold">
              <a href={href}><Icon size={"sm"}>{icon}</Icon> {name}</a>
            </Button>
          ))}
        </HStack>
      </Box>
    </Center>
  )
}
