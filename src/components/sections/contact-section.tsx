import { Box, Button, Flex, Grid, Icon, Text, VStack, Link, Card, Container, Input, Textarea, Field, Stack } from "@chakra-ui/react";
import { LuCircleCheck, LuClock, LuMail, LuMessageCircle, LuSend, LuStar } from "react-icons/lu";
import { BrandHeading } from "../ui/brand-heading";

export const ContactSection = () => {

  const openWhatsApp = () => {
    window.open('https://wa.me/5548992183180?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:contato@matheuspereira.dev?subject=Contato via Portfólio&body=Olá Matheus, vi seu portfólio e gostaria de conversar sobre um projeto.';
  };

  const benefits = [
    {
      icon: <LuClock className="w-5 h-5" />,
      title: 'Resposta Rápida',
      description: 'Retorno em até 24 horas'
    },
    {
      icon: <LuCircleCheck className="w-5 h-5" />,
      title: 'Consulta Gratuita',
      description: 'Primeira conversa sem compromisso'
    },
    {
      icon: <LuStar className="w-5 h-5" />,
      title: 'Qualidade Garantida',
      description: 'Projetos entregues com excelência'
    }
  ];

  const handleSubmitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    console.log('Form Data:', Object.fromEntries(formData.entries()));
    form.reset();
  };

  return (
    <Box id="contact" py="16" px="4">
      <Container maxW="7xl">
        <Box textAlign="center" mb={16}>
          <BrandHeading fontSize={"4xl"} mb={4}>
            Vamos Trabalhar Juntos?
          </BrandHeading>
          <Text fontSize="xl" color="brand.muted" maxW="3xl" mx="auto">
            Pronto para transformar sua ideia em uma solução digital de sucesso? Entre em contato e vamos conversar sobre seu projeto.
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8} alignItems="start">
          <VStack align="stretch">
            <Card.Root colorPalette={"blue"}>
              <Card.Header>
                <Card.Title>
                  Entre em Contato
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <VStack align="stretch">
                  <form onSubmit={handleSubmitContact}>
                    <VStack align="stretch" gap={4} px={6}>
                      <Field.Root required>
                        <Field.Label>Nome</Field.Label>
                        <label></label>
                        <Input name="name" type="text" placeholder="Seu nome" />
                      </Field.Root>

                      <Field.Root required>
                        <Field.Label>E-mail</Field.Label>
                        <Input name="email" type="email" placeholder="Seu e-mail" />
                      </Field.Root>

                      <Field.Root required>
                        <Field.Label>Assunto</Field.Label>
                        <Input name="subject" type="text" placeholder="Assunto da sua mensagem" />
                      </Field.Root>

                      <Field.Root required>
                        <Field.Label>Mensagem</Field.Label>
                        <Textarea name="message" placeholder="Digite sua mensagem" rows={6} />
                      </Field.Root>

                      <Button type="submit" colorScheme="blue" w="full">
                        Enviar Mensagem
                      </Button>
                    </VStack>
                  </form>

                  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
                    <Box borderRadius="xl" p={6}>
                      <Flex align="center" gap={3} mb={3}>
                        <Icon as={LuMessageCircle} boxSize={6} color="green.500" />
                        <Text fontSize="lg" fontWeight="semibold" color="gray.200">
                          WhatsApp
                        </Text>
                      </Flex>
                      <Text color="gray.600" mb={3} textWrap={"nowrap"}>
                        Resposta mais rápida
                      </Text>
                      <Link href="https://wa.me/5548992183180" color="blue.500" _hover={{ color: "blue.600" }} textWrap={"nowrap"}>
                        +55 48 99218-3180
                      </Link>
                    </Box>

                    <Box borderRadius="xl" p={6}>
                      <Flex align="center" gap={3} mb={3}>
                        <Icon as={LuMail} boxSize={6} color="blue.500" />
                        <Text fontSize="lg" fontWeight="semibold" color="gray.200">
                          E-mail
                        </Text>
                      </Flex>
                      <Text color="gray.600" mb={3} textWrap={"nowrap"}>
                        Para propostas formais
                      </Text>
                      <Link href="mailto:contato@matheuspereira.dev" color="blue.500" _hover={{ color: "blue.600" }} textWrap={"nowrap"}>
                        contato@matheuspereira.dev
                      </Link>
                    </Box>
                  </Grid>
                </VStack>

              </Card.Body>
            </Card.Root>
          </VStack>

          <VStack gap={8} align="stretch">
            <Card.Root>
              <Card.Header>
                <Card.Title>
                  Por que me escolher?
                </Card.Title>
              </Card.Header>

              <Card.Body>
                <Stack gap={6}>
                  {benefits.map((benefit, index) => (
                    <Flex key={index} align="start" gap={3}>
                      <Icon color="blue.500" my={3} size={"lg"}>
                        {benefit.icon}
                      </Icon>
                      <Box>
                        <Text fontWeight="semibold" color="blue.500">
                          {benefit.title}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          {benefit.description}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Stack>
              </Card.Body>
            </Card.Root>

            <Card.Root colorPalette={"blue"}>
              <Card.Header>
                <Card.Title>
                  <Flex align="center" gap={3}>
                    <Box w={3} h={3} bg="green.400" borderRadius="full" />
                    <Text fontWeight="bold" color="green.500">
                      Status: Disponível
                    </Text>
                  </Flex>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <VStack align="start" color="gray.400" mb={6}>
                  <Flex align="center" gap={2}>
                    <Icon as={LuCircleCheck} boxSize={4} color="green.400" />
                    <Text fontSize="sm">Aceitando novos projetos</Text>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <Icon as={LuCircleCheck} boxSize={4} color="green.400" />
                    <Text fontSize="sm">Disponível para reuniões</Text>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <Icon as={LuCircleCheck} boxSize={4} color="green.400" />
                    <Text fontSize="sm">Início imediato para projetos urgentes</Text>
                  </Flex>
                </VStack>

                <Card.Root colorPalette={"blue"} variant={"subtle"}>
                  <Card.Body p={4}>
                    <Text textAlign="center" color="blue.500" fontWeight="medium">
                      🚀 Vamos criar algo incrível juntos!
                    </Text>
                  </Card.Body>
                </Card.Root>
              </Card.Body>
            </Card.Root>
          </VStack>
        </Grid>
      </Container>
    </Box >
  );
};
