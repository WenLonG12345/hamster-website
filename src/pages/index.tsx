import { Container } from "@chakra-ui/react";
import { Hamster } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../components/layouts/User/MainLayout";
import { getAllHamsters } from "../utils/api";
import { useFetchAxios } from "../utils/common";
import HomeLayout from "../components/layouts/User/home-layout";
import HamsterLayout from "../components/layouts/User/hamster-layout";
import { useRef } from "react";

const Home: NextPage = () => {
  const allHamster = useFetchAxios(getAllHamsters);

  console.log({ allHamster });

  const myRef = useRef<HTMLDivElement | null>(null);

  return (
    <MainLayout>
      <Container maxW={"container.lg"}>
        <HomeLayout onMoreClick={() => myRef.current?.scrollIntoView({behavior: 'smooth'})}/>
        <HamsterLayout hamsters={allHamster} layoutRef={myRef}/>
      </Container>
    </MainLayout>
  );
};

export default Home;
