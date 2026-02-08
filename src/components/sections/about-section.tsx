import { Box, Link, Container, Text, Grid, Icon, Badge, Heading } from "@chakra-ui/react";
import { LuBriefcase, LuCalendar, LuCode, LuDatabase, LuGlobe, LuMail, LuMapPin, LuSmartphone } from "react-icons/lu";
import { BrandHeading } from "../ui/brand-heading";

export const AboutSection = () => {
  const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Laravel', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Git', category: 'Tools' }
  ];

  const services = [
    {
      icon: <LuGlobe size="24px" />,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas e responsivas com React, Angular e tecnologias de ponta.'
    },
    {
      icon: <LuSmartphone size="24px" />,
      title: 'Apps Mobile',
      description: 'Aplicativos nativos multiplataforma com React Native para iOS e Android.'
    },
    {
      icon: <LuDatabase size="24px" />,
      title: 'Backend & APIs',
      description: 'Sistemas robustos, APIs RESTful e integração com bancos de dados.'
    },
    {
      icon: <LuCode size="24px" />,
      title: 'Sistemas Complexos',
      description: 'Plataformas de e-commerce, dashboards e sistemas de gestão empresarial.'
    }
  ];

  return (
    <Box as="section" id="about" bg="brand.surface" py={20}>
      <Container maxW="7xl">
        <Box textAlign="center" mb="16">
          <BrandHeading fontSize="4xl" fontWeight="bold" mb="4">Sobre Mim</BrandHeading>
          <Text fontSize="xl" color="brand.muted" maxW="3xl" mx="auto">
            Desenvolvedor apaixonado por tecnologia, com foco em criar soluções que fazem a diferença no mundo real.
          </Text>
        </Box>

        <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap="16" alignItems="start" mb="20">
          {/* Left Column - Personal Info */}
          <Box>
            <Box borderWidth="1px" borderRadius="xl" p={4}>
              <Text fontSize="2xl" fontWeight="bold" mb="6">Informações Pessoais</Text>
              <Box>
                <Box display="flex" alignItems="center" gap="3" color="brand.muted" mb="4">
                  <Icon color={"brand.primary"}>
                    <LuBriefcase size="20px" />
                  </Icon>
                  <Text fontWeight="medium">Cargo:</Text>
                  <Text>Desenvolvedor Fullstack Pleno</Text>
                </Box>
                <Box display="flex" alignItems="center" gap="3" color="brand.muted" mb="4">
                  <Icon color={"brand.primary"}>
                    <LuMapPin size="20px" />
                  </Icon>
                  <Text fontWeight="medium">Localização:</Text>
                  <Text>Brasil 🇧🇷</Text>
                </Box>
                <Box display="flex" alignItems="center" gap="3" color="brand.muted" mb="4">
                  <Icon color={"brand.primary"}>
                    <LuMail size="20px" />
                  </Icon>
                  <Text fontWeight="medium">E-mail:</Text>
                  <Link href="mailto:contato@matheuspereira.dev" color="brand.primary" _hover={{ color: 'brand.primary' }} transition="color 0.2s">
                    contato@matheuspereira.dev
                  </Link>
                </Box>
                <Box display="flex" alignItems="center" gap="3" color="brand.muted" mb="4">
                  <Icon color={"brand.primary"}>
                    <LuCalendar size="20px" />
                  </Icon>
                  <Text fontWeight="medium">Experiência:</Text>
                  <Text>4+ anos de desenvolvimento</Text>
                </Box>
              </Box>
            </Box>

          </Box>

          {/* Skills */}
          <Box borderWidth="1px" borderRadius="xl" p="4">
            <Text fontSize="2xl" fontWeight="bold" mb="6">Stack Tecnológico</Text>
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap="3">
              {skills.map((skill, index) => (
                <Badge key={index} bg="brand.secondary" borderRadius="md" p="2">
                  {skill.name}
                </Badge>
              ))}
            </Grid>
          </Box>

          {/* Right Column - Experience */}
          {
            // <Box>
            //   <Box borderWidth="1px" borderRadius="xl" p="8">
            //     <Text fontSize="2xl" fontWeight="bold" mb="6">Experiência Profissional</Text>
            //     <Box>
            //       {/* Professional Experience Entry */}
            //       <Box borderLeft="2px solid" borderColor="brand.primary" pl="6" position="relative" mb="6">
            //         <Box position="absolute" w="3" h="3" bg="brand.primary" borderRadius="full" left="-1.5" top="1" />
            //         <Box mb="3">
            //           <Text fontSize="lg" fontWeight="semibold">Desenvolvedor Fullstack Pleno</Text>
            //           <Text fontSize="sm" color="brand.success" fontWeight="medium">2020 – Presente</Text>
            //         </Box>
            //         <Link fontSize="sm" color="brand.muted" as="a" href="https://smartperformance.com.br" textDecoration="underline">
            //           Smart Performance
            //         </Link>
            //         <Text color="brand.muted" mt="3">
            //           Desenvolvimento de sistemas corporativos, plataformas de CRM e aplicações mobile para coleta de Trade / Comercial.
            //           Especialização em arquiteturas escaláveis, APIs robustas e experiências de usuário excepcionais.
            //         </Text>
            //       </Box>
            //     </Box>
            //   </Box>
            // </Box>
          }
        </Grid>

        {/* Services Section */}
        <Box textAlign="center" mb="12">
          <Text fontSize="3xl" fontWeight="bold" mb="4">Serviços Oferecidos</Text>
          <Text color="brand.muted" fontSize="lg">Soluções completas para suas necessidades digitais</Text>
        </Box>

        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap="6">
          {services.map((service, index) => (
            <Box key={index} borderWidth="1px" borderRadius="xl" p="6" _hover={{ shadow: 'md' }}>
              <Box color="brand.primary" mb="4">
                {service.icon}
              </Box>
              <Text fontSize="xl" fontWeight="semibold" mb="3">{service.title}</Text>
              <Text color="brand.muted" fontSize="sm">{service.description}</Text>
            </Box>
          ))}
        </Grid>
      </Container >
    </Box >
  );
};
