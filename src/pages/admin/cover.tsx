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
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { withLayout } from "@moxy/next-layout";
import { useForm } from "react-hook-form";
import { ParsedFilesProps, useFileUpload } from "../../hooks/use-file-upload";
import uploadImage from "../../utils/upload";
import { useRouter } from "next/router";
import Admin from ".";
import { useFetchAxios } from "../../utils/common";
import { getCover, updateCoverDetails } from "../../utils/api";
import { HamsterCover } from "../../types";
import PageTemplate from "../../components/layouts/admin/page-template";


const Cover = () => {
  const [files, selectFiles] = useFileUpload();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cover = useFetchAxios(getCover);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      title: cover?.title || "",
      description: cover?.description || "",
    },
  });

  useEffect(() => {
    if (cover) {
      setValue("title", cover.title);
      setValue("description", cover.description);
    }
  }, [cover, setValue]);

  const onSubmit = async (v: any) => {
    setIsSubmitting(true);

    let uploadUrl;
    if (files) {
      const uploadRes = await uploadImage(files.file);
      const { data, status } = uploadRes;
      if (status === 200) {
        const { secure_url } = data;
        uploadUrl = secure_url;
      }
    }
    const updateArgs: HamsterCover = {
      id: cover?.id || "",
      coverImg: uploadUrl || cover?.coverImg,
      title: v.title || cover?.title,
      description: v.description || cover?.description,
    };

    const res = await updateCoverDetails(updateArgs);
    const { data, status } = res;
    if (status === 200) {
      toast({
        title: "保存成功！",
        status: "success",
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "保存失败！",
        status: "error",
        isClosable: true,
        position: "top-right",
      });
    }

    setIsSubmitting(false);
  };

  if (!cover) return null;

  return (
    <PageTemplate
      title="封面"
      content={
        <>
          <Stack spacing={5}>
            <Center bg="blackAlpha.300" py={5} borderRadius="8px">
              <Image
                src={files?.source || cover.coverImg}
                alt="preview"
                objectFit={"contain"}
                width="300px"
              />
            </Center>

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

          <Stack mt="3">
            <FormControl isRequired>
              <FormLabel>封面标题</FormLabel>
              <Input
                placeholder="封面标题"
                {...register("title", {
                  required: "请输入封面标题",
                })}
              />
              {errors.title && (
                <FormHelperText color="red">
                  {errors.title.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl isRequired>
              <FormLabel>封面描述</FormLabel>
              <Textarea
                placeholder="封面描述"
                {...register("description", {
                  required: "请输入封面描述",
                })}
              />
              {errors.title && (
                <FormHelperText color="red">
                  {errors.title.message}
                </FormHelperText>
              )}
            </FormControl>

            <Button onClick={handleSubmit(onSubmit)} isLoading={isSubmitting}>
              保存
            </Button>
          </Stack>
        </>
      }
    />
  );
};

export default withLayout(<Admin />)(Cover);
