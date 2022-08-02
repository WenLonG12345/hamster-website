import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  VStack,
  Image,
  Stack,
  Center,
  Text,
} from "@chakra-ui/react";
import showUploadWidget from "../../utils/upload-widget";
import { ParsedFilesProps, useFileUpload } from "../../hooks/use-file-upload";
import uploadImage from "../../utils/upload";
import { HamsterCoverArgs } from "../../types";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import { useRouter } from "next/router";
import PageHeader from "../../components/layouts/Admin/page-header";

const Cover = () => {
  const dispatch = useDispatch<Dispatch>();
  const coverState = useSelector((state: RootState) => state.coverModel);

  const router = useRouter();
  const [files, selectFiles] = useFileUpload();

  useEffect(() => {
    if (router.isReady) {
      dispatch.coverModel.getCover();
    }
  }, [dispatch.coverModel, router.isReady]);

  return (
    <PageHeader>
      <PageHeader.Title>封面</PageHeader.Title>
      <PageHeader.Description>
        <Center>
          <Stack spacing={3}>
            <Image
              src={files?.source || coverState.coverImg}
              alt="preview"
              objectFit={"contain"}
              width="300px"
            />

            <Button
              onClick={() => {
                selectFiles({
                  accept: "image/*",
                  multiple: false,
                  cb: () => {},
                });
              }}
            >
              上传封面照片
            </Button>
          </Stack>
        </Center>
        <Stack mt="3">
          <Input
            placeholder="封面标题"
            value={coverState.title}
            onChange={(e) => {
              dispatch.coverModel.SET_COVER_DETAIL({
                key: "title",
                value: e.target.value,
              });
            }}
          />
          <Input
            placeholder="封面描述"
            value={coverState.description}
            onChange={(e) => {
              dispatch.coverModel.SET_COVER_DETAIL({
                key: "description",
                value: e.target.value,
              });
            }}
          />
          <Button
            onClick={() =>
              dispatch.coverModel.updateCover({ file: files?.file })
            }
          >
            保存
          </Button>
        </Stack>
      </PageHeader.Description>
    </PageHeader>
  );
};

export default Cover;
