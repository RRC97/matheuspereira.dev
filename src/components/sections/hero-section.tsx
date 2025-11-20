import { Box, Button, Center, Heading, HStack, Icon, Span, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BsChevronRight } from "react-icons/bs"
import { LuArrowDown, LuChevronRight, LuCode, LuDatabase, LuGlobe, LuTerminal } from "react-icons/lu";
import { useNavigate } from "react-router";

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
    { name: "Fullstack", icon: <LuCode /> },
    { name: "React & Angular", icon: <LuGlobe /> },
    { name: "SQL & MongoDB", icon: <LuDatabase /> },
    // { name: "Terminal Lover", icon: <FaTerminal /> },
    // { name: "Versátil e Adaptável", icon: <RxDividerVertical /> },
  ];

  const navigate = useNavigate();

  const randomIndex = Math.floor(Math.random() * messages.length);
  const [currentMessage, setCurrentMessage] = useState(messages[randomIndex]);
  const [message, setMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  const [deleting, setDeleting] = useState(true);

  useEffect(() => {
    setMessage(currentMessage.slice(0, messageIndex));
  }, [currentMessage, messageIndex]);

  const clickButton = (link: string) => {
    navigate(link);
  };

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

  setTimeout(timer, 50);

  return (
    <Center my={32}>
      <Stack maxW={"xl"} alignItems={"center"} gap={6} color={"fg.muted"}>
        <Button variant={"outline"} rounded={"full"} size="sm">
          <Box rounded={"full"} width={2} height={2} bg={"green"} animation={"pulse"} />
          Disponível para novos projetos
          <Icon>
            <BsChevronRight />
          </Icon>
        </Button>
        <Heading size="6xl" fontWeight="bold" color={"white"}>
          Matheus Pereira
        </Heading>
        <Heading size={"3xl"} fontWeight={"medium"}>
          <Icon color={"purple.500"} mr={2} animation={"pulse"}><LuTerminal /></Icon>
          <Span color={"colorPalette.500"} mr={2}>{message}|</Span>
        </Heading>
        <Heading size={"xl"} textAlign={"center"} fontWeight={"normal"}>
          Crio soluções digitais completas que
          <Span fontWeight={"bold"} color={"white"}> transformam ideias em realidade. </Span>
          Especializado em desenvolvimento web, mobile e sistemas de alta performance.
        </Heading>
        <HStack spaceX={4}>
          {stacks.map((stack, index) => (
            <HStack key={index} alignItems="center" justifyContent={"center"} gap={2}>
              <Icon size={"md"} color={"colorPalette.400"}>{stack.icon}</Icon> {stack.name}
            </HStack>
          ))}
        </HStack>
        <HStack>
          <Button onClick={() => clickButton("#projects")} variant={"solid"}>
            Ver Projetos <Icon size={"sm"}><LuArrowDown /></Icon>
          </Button>
          <Button onClick={() => clickButton("#about")} variant={"outline"}>
            Sobre Mim <Icon size={"sm"}><LuChevronRight /></Icon>
          </Button>
        </HStack>
      </Stack>
    </Center>
  )
}
