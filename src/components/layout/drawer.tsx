
import { CloseButton, IconButton, Portal, Drawer as UIDrawer } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";

export function Drawer() {
  return (
    <UIDrawer.Root>
      <UIDrawer.Trigger asChild>
        <IconButton
          rounded={"full"}
          variant={"subtle"}
          bg={"gray.muted"}
          borderColor={"colorPalette.800"}
          right={4}
          top={4}
          position={"fixed"}
          zIndex={1000}
          hidden={true}
          >
          <LuMenu />
        </IconButton>
      </UIDrawer.Trigger>
      <Portal>
        <UIDrawer.Backdrop />
        <UIDrawer.Positioner>
          <UIDrawer.Content>
            <UIDrawer.CloseTrigger asChild>
              <CloseButton />
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
