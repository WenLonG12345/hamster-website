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
import {
  RiNumber0,
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
  RiNumber8,
  RiNumber9,
} from "react-icons/ri";
import { NavContext } from "..";

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
        href="/admin"
        icon={RiDashboardLine}
        active={router.pathname === "/admin"}
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

      {routes.map((props, rid) => (
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

export const routes = [
  { name: "灰灰", href: "/admin/huihui", icon: RiNumber1 },
  { name: "米米", href: "/admin/mimi", icon: RiNumber2 },
  { name: "番薯", href: "/admin/fanshu", icon: RiNumber3 },
  { name: "木薯", href: "/admin/mushu", icon: RiNumber4 },
  { name: "豆豆", href: "/admin/doudou", icon: RiNumber5 },
  { name: "小小", href: "/admin/xiaoxiao", icon: RiNumber6 },
  { name: "沫沫", href: "/admin/momo", icon: RiNumber7 },
  { name: "毛豆", href: "/admin/maodou", icon: RiNumber8 },
  { name: "肉包子", href: "/admin/roubaozi", icon: RiNumber9 },
  { name: "小笼包", href: "/admin/xiaolongbao", icon: RiNumber0 },
];

// export const integrations = [
//   {
//     name: "Jira",
//     scheme: "telegram",
//     icon: FaJira,
//   },
//   {
//     name: "Slack",
//     scheme: "orange",
//     icon: FaSlack,
//   },
//   {
//     name: "Intercom",
//     scheme: "blue",
//     icon: FaIntercom,
//   },
// ];
