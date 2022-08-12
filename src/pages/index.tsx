import { Container } from "@chakra-ui/react";
import { Hamster } from "@prisma/client";
import type { NextPage } from "next";
import MainLayout from "../components/layouts/user/MainLayout";
import { getAllHamsters } from "../utils/api";
import { useFetchAxios } from "../utils/common";
import HomeLayout from "../components/layouts/user/home-layout";
import HamsterLayout from "../components/layouts/user/hamster-layout";
import { useRef } from "react";
import { serverUrl } from "../utils/constants";
import { IParams } from "../types";

type HomeProps = {
  hamsters: Hamster[];
}

const Home: NextPage<HomeProps> = ({hamsters}) => {
  const myRef = useRef<HTMLDivElement | null>(null);

  return (
    <MainLayout>
      <Container maxW={"container.lg"}>
        <HomeLayout onMoreClick={() => myRef.current?.scrollIntoView({behavior: 'smooth'})}/>
        <HamsterLayout hamsters={hamsters} layoutRef={myRef}/>
      </Container>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${serverUrl}/api/hamster`);
  const data = await res.json();

  return {
    props: {
      hamsters: data
    }
  }
}


export default Home;
