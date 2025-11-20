import { Box, Button, Text, Image, Flex, Stack, Badge, Link, Heading, Card } from "@chakra-ui/react";
import { LuBuilding2, LuChartBar, LuExternalLink, LuGithub, LuGlobe, LuPackage, LuTruck } from "react-icons/lu";
import { BrandHeading } from "../ui/brand-heading";

export const ProjectSection = () => {
  const projects = [
    {
      name: 'Os Guri do Pacotinho',
      description: 'Plataforma completa de logística para transportadora paranaense. Sistema de rastreamento em tempo real, gestão de entregas, dashboard administrativo e portal do cliente.',
      longDescription: 'Solução completa para transportadora que atua no Paraná, incluindo sistema de gestão de entregas, rastreamento GPS, portal do cliente e dashboard gerencial.',
      stack: ['Laravel', 'Tailwind', 'MySQL', 'PHP'],
      image: 'photo-1586528116311-ad8dd3c8310d',
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
      image: 'photo-1576091160399-112ba8d25d1f',
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
      image: 'photo-1518770660439-4636190af475',
      link: 'https://cargasja.com.br',
      isReal: true,
      icon: <LuPackage size={24} />,
      category: 'Marketplace & Logística'
    },
    {
      name: 'Dashboard Analítico',
      description: 'Painel administrativo avançado com métricas em tempo real, relatórios customizados e integração com múltiplas fontes de dados.',
      longDescription: 'Sistema de Business Intelligence com dashboards interativos, relatórios customizados e análise de dados em tempo real.',
      stack: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Socket.io'],
      image: 'photo-1551288049-bebda4e38f71',
      link: '#',
      isReal: false,
      icon: <LuChartBar size={24} />,
      category: 'Business Intelligence'
    },
    {
      name: 'Landing Page Premium',
      description: 'Landing page de alta conversão otimizada para SEO, com design responsivo, formulários inteligentes e integração com CRM.',
      longDescription: 'Landing page profissional com foco em conversão, otimizada para SEO e integrada com ferramentas de marketing.',
      stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
      image: 'photo-1460925895917-afdab827c52f',
      link: '#',
      isReal: false,
      icon: <LuGlobe size={24} />,
      category: 'Marketing Digital'
    }
  ];

  const goToLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box as="section" id="projects" py={16} px={4}>
      <Box maxW="7xl" mx="auto">
        <Box textAlign="center" mb={16}>
          <BrandHeading fontSize="4xl" fontWeight="bold" mb={4}>Projetos em Destaque</BrandHeading>
          <Text fontSize="xl" color="gray.500" maxW="3xl" mx="auto">
            Soluções que entregaram resultados reais para empresas e empreendedores
          </Text>
        </Box>

        <Stack p={16}>
          {projects.map((project, index) => (
            <Flex
              key={index}
              direction={{ base: 'column', lg: index % 2 === 0 ? 'row' : 'row-reverse' }}
              gap={12}
              alignItems="center"
            >
              {/* Project Image */}
              <Box w="full" lg={{ w: '50%' }}>
                <Box position="relative" role="group">
                  <Box borderRadius="xl" p={4} borderWidth={2} boxShadow="lg">
                    <Image
                      src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
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
              <Box w="full" lg={{ w: '50%' }} p={6}>
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
                </Stack>

                {/* Action Buttons */}
                <Flex gap={4} pt={4}>
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
              </Box>
            </Flex>
          ))}
        </Stack>

        {/* Call to Action */}
        <Card.Root maxW={"2xl"} mx={"auto"} textAlign={"center"}>
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
