import { Box, Button, Text, Image, Flex, Stack, Badge, Card } from "@chakra-ui/react";
import { LuBuilding2, LuExternalLink, LuGithub, LuPackage, LuTruck } from "react-icons/lu";
import { BrandHeading } from "../ui/brand-heading";

export const ProjectSection = () => {
  const projects = [
    {
      name: 'Os Guri do Pacotinho',
      description: 'Plataforma completa de logística para transportadora paranaense. Sistema de rastreamento em tempo real, gestão de entregas, dashboard administrativo e portal do cliente.',
      longDescription: 'Solução completa para transportadora que atua no Paraná, incluindo sistema de gestão de entregas, rastreamento GPS, portal do cliente e dashboard gerencial.',
      stack: ['Laravel', 'Tailwind', 'MySQL', 'PHP'],
      image: 'osguridopacotinho.png',
      link: 'https://osguridopacotinho.com.br',
      isReal: true,
      icon: <LuTruck size={24} />,
      category: 'Transportadora & Logística'
    },
    {
      name: 'Multimed RJ',
      description: 'Site institucional moderno para clínica médica com sistema de agendamento online, portal do paciente e gestão de consultas integrada.',
      longDescription: 'Plataforma médica completa com agendamento online, portal do paciente, histórico médico e sistema de gestão para clínicas.',
      stack: ['WordPress', 'PHP', 'MySQL', 'Elementor'],
      image: 'multimedrj.png',
      link: 'https://multimedrj.com.br',
      isReal: true,
      icon: <LuBuilding2 size={24} />,
      category: 'Saúde & Medicina'
    },
    {
      name: 'Cargas Já',
      description: 'Marketplace de logística conectando transportadores e embarcadores. Sistema de cotações automáticas, rastreamento e gestão financeira.',
      longDescription: 'Plataforma que conecta transportadores e embarcadores, facilitando cotações, agendamentos e acompanhamento de cargas.',
      stack: ['Laravel', 'Tailwind', 'MySQL', 'PHP'],
      image: 'cargasja.png',
      link: 'https://cargasja.com.br',
      isReal: true,
      icon: <LuPackage size={24} />,
      category: 'Marketplace & Logística'
    },
  ];

  const goToLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box as="section" id="projects" px={4} py={20}>
      <Box maxW="7xl" mx="auto">
        <Box textAlign="center" mb={16}>
          <BrandHeading fontSize="4xl" fontWeight="bold" mb={4}>Projetos em Destaque</BrandHeading>
          <Text fontSize="xl" color="gray.500" maxW="3xl" mx="auto">
            Soluções que entregaram resultados reais para empresas e empreendedores
          </Text>
        </Box>

        <Stack gap={16}>
          {projects.map((project, index) => (
            <Flex
              key={index}
              direction={{ base: 'column', lg: index % 2 === 0 ? 'row' : 'row-reverse' }}
              alignItems="center"
            >
              {/* Project Image */}
              <Box w="full" lg={{ w: '50%' }}>
                <Box position="relative" role="group">
                  <Box borderRadius="xl" p={4} borderWidth={2} boxShadow="lg">
                    <Image
                      src={`/imgs/${project.image}`}
                      alt={project.name}
                      borderRadius="lg"
                      objectFit="cover"
                      h={80}
                      w="100%"
                    />
                    {/* Featured Project Badge */}
                    {index === 0 && (
                      <Badge position="absolute" top={8} left={8} colorScheme="blue" px={3} py={1} fontSize="sm" fontWeight="semibold">
                        Projeto Destaque
                      </Badge>
                    )}
                  </Box>
                </Box>
              </Box>

              {/* Project Info */}
              <Box w="full" lg={{ w: '50%' }}>
                <Stack p={4}>
                  <Flex alignItems="center" gap={3}>
                    <Box color="blue.500">
                      {project.icon}
                    </Box>
                    <Text as="span" color="blue.400" fontSize="sm" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide">
                      {project.category}
                    </Text>
                  </Flex>

                  <Text as="h3" fontSize="3xl" fontWeight="bold" color="gray.200">
                    {project.name}
                  </Text>

                  <Text color="gray.500" fontSize="lg">
                    {project.longDescription}
                  </Text>
                </Stack>

                {/* Tech Stack */}
                <Stack p={3}>
                  <Text color="gray.700" fontWeight="semibold">Tecnologias Utilizadas:</Text>
                  <Flex wrap="wrap" gap={2}>
                    {project.stack.map((tech, techIndex) => (
                      <Badge key={techIndex} colorScheme="green">
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                  {/* Action Buttons */}
                  <Flex mt={4}>
                    {project.isReal ? (
                      <Button
                        as="a"
                        onClick={() => goToLink(project.link)}
                        colorScheme="blue"
                      >
                        <LuExternalLink size={16} /> Ver Projeto
                      </Button>
                    ) : (
                      <Button disabled={true} colorScheme="gray">
                        <LuGithub size={16} /> Projeto Interno
                      </Button>
                    )}
                  </Flex>
                </Stack>

              </Box>
            </Flex>
          ))}
        </Stack>

        {/* Call to Action */}
        <Card.Root maxW={"2xl"} mx={"auto"} textAlign={"center"} mt={20}>
          <Card.Body>
            <Text as="h3" fontSize="2xl" fontWeight="bold" color="white" mb={4}>
              Pronto para o próximo projeto?
            </Text>
            <Text color="gray.500" mb={6}>
              Transforme sua ideia em realidade com soluções sob medida
            </Text>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              colorScheme="blue"
              mx={"auto"}
              px={8} py={3}
            >
              Iniciar Conversa
            </Button>

          </Card.Body>
        </Card.Root>
      </Box>
    </Box>
  );
}
