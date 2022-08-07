/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { withLayout } from "@moxy/next-layout";
import Admin from ".";
import PageHeader from "../../components/layouts/Admin/page-header";
import {
  Button,
  IconButton,
  Image,
  SimpleGrid,
  Spinner,
  Box,
  Stack,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiFillEdit } from "react-icons/ai";
import showUploadWidget from "../../utils/upload-widget";
import { useFetchAxios, useFetchAxiosLazy } from "../../utils/common";
import {
  getAllHamsters,
  getPhotoByHamsterId,
  uploadHamsterImage,
} from "../../utils/api";
import { useHamsterStore } from "../../hooks/useHamsterStore";
import HamsterDescriptionModal from "../../components/modals/HamsterDescriptionModal";
import { Hamster, Photo } from "@prisma/client";
import HamsterImageModal from "../../components/modals/HamsterImageModal";
import PageTemplate from "../../components/layouts/Admin/page-template";

const pageName = "灰灰";

const HuiHui = () => {
  const allHamster = useHamsterStore((state) => state.hamsters);
  const updateHamster = useHamsterStore((state) => state.updateHamster);
  const hamster = allHamster?.find((x) => x.name === pageName);

  const [editHamster, setEditHamster] = useState<Hamster | null>(null);
  const [editPhoto, setEditPhoto] = useState<Photo | null>(null);

  const [photos, getPhotos] = useFetchAxiosLazy(getPhotoByHamsterId);

  useEffect(() => {
    if (hamster) {
      getPhotos(hamster.id);
    }
  }, [hamster]);

  return (
    <>
      {/* <PageHeader>
        <PageHeader.Title>灰灰</PageHeader.Title>
        <PageHeader.Actions>
          <HStack>
            <Button
              leftIcon={<AiFillEdit />}
              onClick={() => {
                if (hamster) {
                  setEditHamster(hamster);
                }
              }}
            >
              编辑描述
            </Button>
            <Button
              colorScheme="purple"
              leftIcon={<AiOutlinePlus />}
              onClick={() =>
                showUploadWidget([pageName], async (data) => {
                  const { event, info } = data;

                  if (event === "success") {
                    // successfully upload images
                    const { secure_url } = info;
                    console.log({ info }, { secure_url });
                    const res = await uploadHamsterImage({
                      hamsterId: hamster?.id,
                      url: secure_url,
                    });

                    if (hamster) {
                      getPhotos(hamster.id);
                    }
                  }

                  if (event === "close") {
                    // user close modal dialog
                  }
                })
              }
            >
              添加
            </Button>
          </HStack>
        </PageHeader.Actions>
        <PageHeader.Description>
          <Box
            mb={3}
            bg={useColorModeValue("purple.300", "purple.700")}
            p={3}
            borderRadius="8px"
          >
            <Text color="white" fontWeight="bold">
              仓鼠描述
            </Text>
            <Text color="white" fontWeight="500">
              {hamster?.description}
            </Text>
          </Box>

          <SimpleGrid columns={[2, 3, 4, 5]} spacing="10px">
            {photos?.map((x) => {
              return (
                <Stack key={x.id}>
                  <Box cursor="pointer" onClick={() => setEditPhoto(x)}>
                    <Image
                      src={x.url}
                      alt={x.id}
                      h="200px"
                      objectFit="contain"
                      fallback={<Spinner />}
                    />
                  </Box>
                </Stack>
              );
            })}
          </SimpleGrid>
        </PageHeader.Description>
      </PageHeader> */}

      <PageTemplate
        title="灰灰"
        actions={
          <HStack>
            <Button
              leftIcon={<AiFillEdit />}
              onClick={() => {
                if (hamster) {
                  setEditHamster(hamster);
                }
              }}
            >
              编辑描述
            </Button>
            <Button
              colorScheme="purple"
              leftIcon={<AiOutlinePlus />}
              onClick={() =>
                showUploadWidget([pageName], async (data) => {
                  const { event, info } = data;

                  if (event === "success") {
                    // successfully upload images
                    const { secure_url } = info;
                    console.log({ info }, { secure_url });
                    const res = await uploadHamsterImage({
                      hamsterId: hamster?.id,
                      url: secure_url,
                    });

                    if (hamster) {
                      getPhotos(hamster.id);
                    }
                  }

                  if (event === "close") {
                    // user close modal dialog
                  }
                })
              }
            >
              添加
            </Button>
          </HStack>
        }
        content={
          <>
            <Box
              mb={3}
              bg={useColorModeValue("purple.300", "purple.700")}
              p={3}
              borderRadius="8px"
            >
              <Text color="white" fontWeight="bold">
                仓鼠描述
              </Text>
              <Text color="white" fontWeight="500">
                {hamster?.description}
              </Text>
            </Box>

            <SimpleGrid columns={[2, 3, 4, 5]} spacing="10px">
              {photos?.map((x) => {
                return (
                  <Stack key={x.id}>
                    <Box cursor="pointer" onClick={() => setEditPhoto(x)}>
                      <Image
                        src={x.url}
                        alt={x.id}
                        h="200px"
                        objectFit="contain"
                        fallback={<Spinner />}
                      />
                    </Box>
                  </Stack>
                );
              })}
            </SimpleGrid>
          </>
        }
      />

      <HamsterDescriptionModal
        data={editHamster}
        onClose={() => setEditHamster(null)}
      />

      <HamsterImageModal data={editPhoto} onClose={() => setEditPhoto(null)} />
    </>
  );
};

export default withLayout(<Admin />)(HuiHui);
