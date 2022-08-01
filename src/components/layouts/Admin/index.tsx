import { Box, Stack } from "@chakra-ui/layout";
import React, { createContext } from "react";
import AdminNavBar from "./navbar";
import Sidebar from "./sidebar";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import MobileSidebar from "./sidebar/mobile";
import { useMediaQuery } from "@chakra-ui/media-query";

export const NavContext = createContext<UseDisclosureReturn>(null);

const AdminLayout = ({ children }: any) => {
  const sidebarState = useDisclosure();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <NavContext.Provider value={sidebarState}>
      <Box textStyle="light">
        <AdminNavBar />
        <Box pos="relative" h="max-content">
          <Stack direction="row" spacing={{ md: 5 }}>
            <Sidebar />
            {isSmallScreen && <MobileSidebar />}
            <Box w="full">{children}</Box>
          </Stack>
        </Box>
      </Box>
    </NavContext.Provider>
  );
};

export default AdminLayout;
