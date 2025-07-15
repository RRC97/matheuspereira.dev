
import { CloseButton, IconButton, Portal, Drawer as UIDrawer } from "@chakra-ui/react";
import { BsMenuButton } from "react-icons/bs";

export function Drawer() {
  return (
    <UIDrawer.Root>
      <UIDrawer.Trigger asChild>
        <IconButton rounded={"full"} colorPalette={"cyan"} variant={"subtle"} right={4} top={4} position={"fixed"} zIndex={1000}>
          <BsMenuButton />
        </IconButton>
      </UIDrawer.Trigger>
      <Portal>
        <UIDrawer.Backdrop />
        <UIDrawer.Positioner>

          <UIDrawer.Content>
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
            <UIDrawer.CloseTrigger asChild>
              <CloseButton size={"sm"} />
            </UIDrawer.CloseTrigger>
          </UIDrawer.Content>
        </UIDrawer.Positioner>
      </Portal>
    </UIDrawer.Root>
  );
}
