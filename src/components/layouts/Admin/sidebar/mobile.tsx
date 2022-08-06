import { Stack, Divider, Box } from "@chakra-ui/layout";
import React, { useContext, useEffect } from "react";
import NavItem from "./nav-item";
import { RiDashboardLine } from "react-icons/ri";
import { HiOutlineFolder } from "react-icons/hi";
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
import Info from "../navbar/info";

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

            <Info pl={5}/>
            <NavItem name="主页" href="/admin" icon={RiDashboardLine} />
            <NavItem name="封面" href="/admin/cover" icon={HiOutlineFolder} />

            {isOpen ? (
              <Divider />
            ) : (
              <Box textTransform="uppercase" px={8} pt={4}>
                鼠鼠们 🐭
              </Box>
            )}

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
