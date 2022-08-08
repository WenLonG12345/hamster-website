/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  FormControl,
  FormHelperText,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Textarea,
  Box,
  Center,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { Photo } from "@prisma/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updatePhotoDescription } from "../../utils/api";

type HamsterImageModalProps = {
  data?: Photo | null;
  onClose: () => void;
  onFinish: () => void;
};

const HamsterImageModal: React.FC<HamsterImageModalProps> = ({
  data,
  onClose,
  onFinish
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const toast = useToast();

  useEffect(() => {
    if (data) {
      setValue("description", data?.description);
    }
  }, [data]);

  const onSubmit = async (v: any) => {
    if(data) {
      const updateArgs: Photo = {...data, description: v.description};
      const res = await updatePhotoDescription(updateArgs);
      const {data: resData, status} = res;
      if (status === 200) {
        toast({
          title: "编辑成功！",
          status: "success",
          isClosable: true,
          position: "top-right",
        });
      } else {
        toast({
          title: "编辑失败！",
          status: "error",
          isClosable: true,
          position: "top-right",
        });
      }

      onFinish();
    }
  };

  return (
    <Modal isOpen={!!data} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody mt={10}>
          <Stack spacing={3}>
            <Center>
              <Image
                src={data?.url}
                alt={data?.id}
                objectFit="contain"
                h="300px"
              />
            </Center>

            <FormControl>
              <FormLabel>仓鼠照片描述</FormLabel>
              <Textarea
                {...register("description", {
                  required: "请输入仓鼠照片描述",
                })}
              />
              {/* {errors.description && (
              <FormHelperText>{errors.description?.message}</FormHelperText>
            )} */}
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            关闭
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
            编辑
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HamsterImageModal;
