/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { withLayout } from "@moxy/next-layout";
import Admin from ".";
import {
  Button,
  SimpleGrid,
  Spinner,
  Box,
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
import HamsterPhoto from "../../components/HamsterPhoto";
import EmptyContent from "../../components/layouts/Admin/empty-content";
import { isEmpty } from "lodash";
import HamsterDetailHeader from "../../components/layouts/User/details/hamster-detail-header";

const pageName = "木薯";

const MuShu = () => {
  const allHamster = useHamsterStore((state) => state.hamsters);
  const updateHamster = useHamsterStore((state) => state.updateHamster);
  const hamster = allHamster?.find((x) => x.name === pageName);

  const [editHamster, setEditHamster] = useState<Hamster | null>(null);
  const [editPhoto, setEditPhoto] = useState<Photo | null>(null);
  const [photoSelect, setPhotoSelect] = useState(false);

  const [photos, isLoading, getPhotos] = useFetchAxiosLazy(getPhotoByHamsterId);

  useEffect(() => {
    if (hamster) {
      getPhotos(hamster.id);
    }
  }, [hamster]);

  const renderPhoto = () => {
    if (isLoading) {
      return <Spinner />;
    }

    if (isEmpty(photos)) {
      return <EmptyContent />;
    }

    return (
      <SimpleGrid columns={[2, 2, 3, 4]} spacing="10px">
        {photos?.map((x) => {
          return (
            <HamsterPhoto
              key={x.id}
              data={x}
              onPhotoClick={(x) => setEditPhoto(x)}
            />
          );
        })}
      </SimpleGrid>
    );
  };

  return (
    <>
      <PageTemplate
        title={pageName}
        actions={
          <Button
            colorScheme="purple"
            size="md"
            isLoading={photoSelect}
            leftIcon={<AiOutlinePlus />}
            onClick={() => {
              setPhotoSelect(true);
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
                  setPhotoSelect(false);
                }
              });
            }}
          >
            添加
          </Button>
        }
        content={
          <>
            <HamsterDetailHeader
              hamster={hamster}
              isAdmin
              setEdit={(hamster) => {
                if (hamster) {
                  setEditHamster(hamster);
                }
              }}
            />
            {renderPhoto()}
          </>
        }
      />

      <HamsterDescriptionModal
        data={editHamster}
        onClose={() => setEditHamster(null)}
      />

      <HamsterImageModal
        data={editPhoto}
        onClose={() => setEditPhoto(null)}
        onFinish={() => {
          setEditPhoto(null);
          if (hamster) {
            getPhotos(hamster.id);
          }
        }}
      />
    </>
  );
};

export default withLayout(<Admin />)(MuShu);
