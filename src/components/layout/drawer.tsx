
import { IconButton, Portal, Drawer as UIDrawer, type IconButtonProps } from "@chakra-ui/react";
import { FaBurger } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";

export function Drawer() {
  const DrawerTriggerButton = ({ children, ...props }: { children: React.ReactNode } & IconButtonProps) => {
    return (
      <IconButton rounded={"full"} variant={"subtle"} bg={"gray.muted"} borderColor={"primary.800"} right={4} top={4} position={"fixed"} zIndex={1000} {...props}>
        {children}
      </IconButton>
    )
  }
  return (
    <UIDrawer.Root>
      <UIDrawer.Trigger asChild>
        <DrawerTriggerButton>
          <LuMenu />
        </DrawerTriggerButton>
      </UIDrawer.Trigger>
      <Portal>
        <UIDrawer.Backdrop />
        <UIDrawer.Positioner height={"lg"} top={10}>
          <UIDrawer.Content>
            <UIDrawer.CloseTrigger asChild>
              <DrawerTriggerButton position={"fixed"}>
                <FaBurger />
              </DrawerTriggerButton>
            </UIDrawer.CloseTrigger>
            <UIDrawer.Header>
              <UIDrawer.Title>Matheus Pereira</UIDrawer.Title>
              <UIDrawer.Description>
                Desenvolvedor de Software
              </UIDrawer.Description>
            </UIDrawer.Header>
            <UIDrawer.Body>
              <p>This is the content of the drawer.</p>
            </UIDrawer.Body>
            <UIDrawer.Footer>
            </UIDrawer.Footer>
          </UIDrawer.Content>
        </UIDrawer.Positioner>
      </Portal>
    </UIDrawer.Root>
  );
}
