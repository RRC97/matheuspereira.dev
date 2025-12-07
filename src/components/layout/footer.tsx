import { LuMail, LuExternalLink, LuGithub, LuLinkedin, LuHeart, LuCoffee } from "react-icons/lu";
import { Box, Flex, Grid, Heading, Link, Text, Icon, Stack, Card } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Card.Root as="footer" mt={16} variant={"subtle"} borderRadius={"none"}>
      <Card.Body maxW="7xl" mx="auto" pt={12}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="12" mb="12">
          {/* Brand Section */}
          <Box>
            <Heading color="white" mb={3}>Matheus Pereira</Heading>
            <Text color="gray.400" lineHeight="tall" mb={3}>
              Desenvolvedor Fullstack especializado em criar soluções digitais que fazem a diferença.
              Transformando ideias em produtos de sucesso.
            </Text>
            <Flex align="center" gap="2" color="gray.400">
              <Box w="2" h="2" bg="green.400" borderRadius="full" animation="pulse"></Box>
              <Text fontSize="sm">Disponível para novos projetos</Text>
            </Flex>
          </Box>

          {/* Quick Links */}
          <Box>
            <Heading color="white" mb={3}>Links Rápidos</Heading>
            <Stack gap={2}>
              <Link href="#about" color="gray.500">
                Sobre Mim
              </Link>
              <Link href="#projects" color="gray.500">
                Projetos
              </Link>
              <Link href="#contact" color="gray.500">
                Contato
              </Link>
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box>
            <Heading color="white" mb={3}>Contato</Heading>
            <Stack gap={2}>
              <Link href="mailto:contato@matheuspereira.dev" color={"gray.500"}>
                <Icon as={LuMail} boxSize="4" />
                <Text fontSize="sm">contato@matheuspereira.dev</Text>
              </Link>
              <Link href="https://wa.me/5548992183180" target="_blank" rel="noopener noreferrer" color={"gray.500"}>
                <Icon as={LuExternalLink} boxSize="4" />
                <Text fontSize="sm">+55 48 99218-3180</Text>
              </Link>
            </Stack>
          </Box>
        </Grid>

        {/* Divider */}
        <Box />

        {/* Bottom Section */}
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" gap="6" borderColor="gray.800" pt={6} borderTopWidth={1}>
          {/* Social Links */}
          <Flex align="center" gap="6">
            <Link
              href="https://github.com/RRC97"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.600"
            >
              <Icon as={LuGithub} boxSize="5" _groupHover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
              <Text fontSize="sm">GitHub</Text>
            </Link>

            <Link
              href="https://linkedin.com/in/matheuspereiranave"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.600"
            >
              <Icon as={LuLinkedin} boxSize="5" _groupHover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
              <Text fontSize="sm">LinkedIn</Text>
            </Link>

            <Link
              href="mailto:contato@matheuspereira.dev"
              color="gray.600"
            >
              <Icon as={LuMail} boxSize="5" _groupHover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
              <Text fontSize="sm">E-mail</Text>
            </Link>
          </Flex>

          {/* Copyright */}
          <Flex align="center" gap="2" color="gray.600">
            <Text fontSize="sm">© {new Date().getUTCFullYear()} Matheus Pereira — Feito com</Text>
            <Icon as={LuHeart} boxSize="4" color="red.500" animation="pulse" />
            <Text fontSize="sm">e</Text>
            <Icon as={LuCoffee} boxSize="4" color="yellow.600" />
          </Flex>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export { Footer };
