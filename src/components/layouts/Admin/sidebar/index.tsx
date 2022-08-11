import { Divider, Spacer, Stack } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { BiBasket } from "react-icons/bi";
import {
  HiOutlineCalendar,
  HiOutlineChat,
  HiOutlineFolder,
} from "react-icons/hi";
import { Box } from "@chakra-ui/react";
import NavItem from "./nav-item";
import { useRouter } from "next/router";
import CollapsedItem from "./collapsed-item";

import { NavContext } from "..";
import { adminPageRoutes } from "../../../../utils/constants";

const Sidebar = () => {
  const router = useRouter();
  const { isOpen } = useContext(NavContext);
  const NavAction = isOpen ? CollapsedItem : NavItem;

  return (
    <Stack
      // layerStyle="card"
      rounded="xl"
      w={isOpen ? "60px" : "300px"}
      transition="width .4s ease-in-out"
      py={8}
      shadow="md"
      minH="full"
      spacing={2}
      fontSize="sm"
      display={["none", "initial"]}
      overflowX={isOpen ? "initial" : "clip"}
      whiteSpace="nowrap"
    >
      <NavAction
        name="主页"
        href="/admin/dashboard"
        icon={RiDashboardLine}
        active={router.pathname === "/admin/dashboard"}
      />
      <NavAction
        name="封面"
        href="/admin/cover"
        icon={HiOutlineFolder}
        active={router.pathname === "/admin/cover"}
      />

      {isOpen ? (
        <Divider />
      ) : (
        <Box textTransform="uppercase" px={8} pt={4}>
          鼠鼠们 🐭
        </Box>
      )}

      {adminPageRoutes.map((props, rid) => (
        <NavAction
          key={`nav-item-${rid}`}
          active={router.pathname === props.href}
          {...props}
        />
      ))}
    </Stack>
  );
};

export default Sidebar;