import { Stack } from "@chakra-ui/layout";
import React, { useContext, useEffect } from "react";
import NavItem from "./nav-item";
import { FiPlus, FiPower, FiSettings } from "react-icons/fi";
import { useRouter } from "next/router";
import { routes } from ".";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { NavContext } from "..";

const MobileSidebar = () => {
  const router = useRouter();

  const { isOpen, onClose } = useContext(NavContext);
  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, []);
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay display={["initial", "none"]}>
        <DrawerContent layerStyle="neutral" py={8}>
          <Stack spacing={2} fontSize="sm">
            <DrawerCloseButton />
            {routes.map((props, rid) => (
              <NavItem
                key={`nav-item-${rid}`}
                active={router.pathname === props.href}
                {...props}
              />
            ))}
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default MobileSidebar;
