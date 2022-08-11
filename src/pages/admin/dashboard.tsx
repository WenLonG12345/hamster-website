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

const IMAGE =
  "https://res.cloudinary.com/teo1996/image/upload/v1659765956/hamsters/dpmitlg9ymv6epcajl5i.jpg";

const Dashboard = () => {
  const router = useRouter();

  return (
    <Stack>
      <DashboardCoverCard />
      <SimpleGrid columns={[2,2,3,4]} spacing='20px' pt={3} px={10}>
        {adminPageRoutes.map((x) => {
          return <DashboardHamsterCard key={x.name} name={x.name} href={x.href} />;
        })}
      </SimpleGrid>
    </Stack>
  );
};

export default withLayout(<Admin />)(Dashboard);
