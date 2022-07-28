import type { NextPage } from "next";
import React from "react";
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
} from "@chakra-ui/react";
import showUploadWidget from "../utils/upload-widget";
import { ParsedFilesProps, useFileUpload } from "../hooks/use-file-upload";
import uploadImage from "../utils/upload";

const Admin: NextPage = () => {
  const [files, selectFiles] = useFileUpload();

  console.log({ files });

  return (
    <Box>
      <Heading size="lg" mb={5}>
        封面
      </Heading>
      <Center>
        <Stack spacing={3}>
          <Image
            src={files?.source || ""}
            alt="preview"
            objectFit={"contain"}
            width="300px"
          />

          <Button
            onClick={() => {
              selectFiles({
                accept: "image/*",
                multiple: false,
                cb: ({ name, size, source, file }) => {
                  uploadImage(file);
                  // console.log("Files Selected", { name, size, source, file });
                },
              });
            }}
          >
            上传封面照片
          </Button>
        </Stack>
      </Center>
      <Stack mt="3">
        <Input placeholder="封面标题" />
        <Input placeholder="封面描述" />
        <Button>保存</Button>
      </Stack>

    </Box>
  );
};

export default Admin;
