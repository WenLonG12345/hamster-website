import React from "react";
import { withLayout } from "@moxy/next-layout";
import Admin from ".";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import DashboardCoverCard from "../../components/layouts/Admin/dashboard/cover-card";
import { adminPageRoutes } from "../../utils/constants";
import DashboardHamsterCard from "../../components/layouts/Admin/dashboard/hamster-card";
import { useHamsterStore } from "../../hooks/useHamsterStore";

const Dashboard = () => {
  const router = useRouter();

  const allHamster = useHamsterStore((state) => state.hamsters);

  return (
    <Stack>
      <DashboardCoverCard />
      <SimpleGrid columns={[2, 2, 3, 4]} spacing="20px" pt={3} px={10}>
        {adminPageRoutes.map((x) => {
          const hamster = allHamster?.find(item => item.name === x.name);
          return (
            <DashboardHamsterCard
              key={x.name}
              name={x.name}
              href={x.href}
              cover={hamster?.cover}
            />
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};

export default withLayout(<Admin />)(Dashboard);
