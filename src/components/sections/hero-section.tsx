"use client"

import { Box, Button, Heading, HStack, Icon, Span, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BsChevronRight, BsCode, BsDatabase, BsGlobe } from "react-icons/bs"

interface Stack {
  name: string;
  icon: React.ReactNode;
}

export const HeroSection = () => {
  const messages = [
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Desenvolvedor Fullstack",
    "Desenvolvedor de Software",
    "Entusiasta de Tecnologia",
    "Apreciador de Café",
    "Aprendiz Contínuo",
    "Criador de Soluções",
    "Explorador de Novas Ideias",
    "Colaborador de Projetos Open Source",
    "Apaixonado por Aprender",
    "Entusiasta de Inteligência Artificial",
    "Desenvolvedor de Aplicações Web",
    "Desenvolvedor de Aplicações Móveis",
    "Desenvolvedor de APIs",
  ];

  const stacks: Stack[] = [
    { name: "Fullstack", icon: <BsCode /> },
    { name: "React & Angular", icon: <BsGlobe /> },
    { name: "SQL & MongoDB", icon: <BsDatabase /> },
    // { name: "Terminal Lover", icon: <FaTerminal /> },
    // { name: "Versátil e Adaptável", icon: <RxDividerVertical /> },
  ]

  const randomIndex = Math.floor(Math.random() * messages.length);
  const [currentMessage, setCurrentMessage] = useState(messages[randomIndex]);
  const [message, setMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  const [deleting, setDeleting] = useState(true);

  useEffect(() => {
    setMessage(currentMessage.slice(0, messageIndex));
  }, [currentMessage, messageIndex]);

  const timer = () => {
    setMessageIndex(deleting ? messageIndex - 1 : messageIndex + 1);
    if (deleting) {
      if (messageIndex <= 0) {
        setMessageIndex(0);
        setDeleting(false);
        const randomIndex = Math.floor(Math.random() * messages.length);
        setCurrentMessage(messages[randomIndex]);
      }
    } else {
      if (messageIndex > currentMessage.length) {
        setMessageIndex(currentMessage.length);
        setDeleting(true);
      }
    }
  };

  setTimeout(timer, 100);

  return (
    <Stack alignItems={"center"} mt={{ base: 48 }} color={"gray.300"}>
      <Button colorPalette={"blue"} bg={"blue.950"} variant={"surface"} rounded={"full"} size="sm">
        <Box rounded={"full"} width={2} height={2} bg={"green"} animation={"pulse"} />
        Disponível para novos projetos
        <Icon width={2} height={2}>
          <BsChevronRight />
        </Icon>
      </Button>
      <Heading as="h1" size="2xl" mt={4} mb={2} colorPalette={"cyan"} fontWeight="bold">
        Matheus Pereira
      </Heading>
      <Heading as={"h2"}>
        <Span color={"purple.500"} fontWeight="bold" mr={2}>{">_"}</Span>
        <Span color={"green.500"} fontWeight="bold" mr={2}>{message}|</Span>
      </Heading>
      <Span as={"h3"} fontWeight={"normal"}>
        Crio soluções digitais completas que <Span fontWeight={"bold"} color={"white"}>transformam ideias em realidade</Span>. Especializado em desenvolvimento web, mobile e sistemas de alta performance.
      </Span>
      <HStack spaceX={4}>
        {stacks.map((stack, index) => (
          <Span key={index} display="inline-flex" alignItems="center" gap={2}>
            <Icon color={"blue.400"} width={4} height={4} fontWeight={"bold"}>{stack.icon}</Icon> {stack.name}
          </Span>
        ))}
      </HStack>
    </Stack>
  )
}
