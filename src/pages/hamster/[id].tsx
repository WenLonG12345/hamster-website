import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { IParams } from "../../types";
import { serverUrl } from "../../utils/constants";
import React from "react";
import { Hamster, Photo } from "@prisma/client";
import {
  Box,
  Center,
  Container,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import MainLayout from "../../components/layouts/user/MainLayout";
import HamsterDetailHeader from "../../components/layouts/user/details/hamster-detail-header";
import HamsterDetailPhoto from "../../components/layouts/user/details/hamster-detail-photo";

type HamsterDetailPage = {
  photos: Photo[];
  hamsters: Hamster[];
  id: string;
};

const HamsterDetailPage: NextPage<HamsterDetailPage> = ({
  photos,
  hamsters,
  id,
}) => {
  const hamster = hamsters.find((x) => x.id === id);

  if (!hamster) return null;

  return (
    <MainLayout>
      <Container maxW="container.lg">
        <HamsterDetailHeader hamster={hamster}/>
        <SimpleGrid columns={[2, 2, 3, 4]} spacing="10px">
          {photos.map((photo) => {
            return (
              <HamsterDetailPhoto key={photo.id} photo={photo}/>
            );
          })}
        </SimpleGrid>
      </Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${serverUrl}/api/hamster`);
  const data = await res.json();

  const paths = data.map((hamster: { id: any }) => {
    return {
      params: { id: hamster.id },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const res = await fetch(`${serverUrl}/api/photo/${id}`);
  const data = await res.json();

  const allRes = await fetch(`${serverUrl}/api/hamster`);
  const allData = await allRes.json();

  return {
    props: {
      photos: data,
      hamsters: allData,
      id,
    },
  };
};

export default HamsterDetailPage;
