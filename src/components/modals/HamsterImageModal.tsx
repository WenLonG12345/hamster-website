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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  useColorModeValue,
} from "@chakra-ui/react";
import { Photo } from "@prisma/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { deletePhoto, updatePhotoDescription } from "../../utils/api";

type HamsterImageModalProps = {
  data?: Photo | null;
  onClose: () => void;
  onFinish: () => void;
};

const HamsterImageModal: React.FC<HamsterImageModalProps> = ({
  data,
  onClose,
  onFinish,
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
    if (data) {
      const updateArgs: Photo = { ...data, description: v.description };
      const res = await updatePhotoDescription(updateArgs);
      const { data: resData, status } = res;
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

  const onDelete = async () => {
    if(data) {
      const res = await deletePhoto(data);
      const {data: resData, status} = res;

      if (status === 200) {
        toast({
          title: "删除成功！",
          status: "success",
          isClosable: true,
          position: "top-right",
        });
      } else {
        toast({
          title: "删除失败！",
          status: "error",
          isClosable: true,
          position: "top-right",
        });
      }

      onFinish();
    }
  }

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
          <Popover placement="top">
            <PopoverTrigger>
              <Button mr={3}>删除</Button>
            </PopoverTrigger>
            <PopoverContent
              bg={useColorModeValue("white", "blue.800")}
              borderColor="gray.500"
              w="200px"
            >
              <PopoverCloseButton />
              <PopoverHeader fontSize="12px" fontWeight="bold" border="0">
                删除照片
              </PopoverHeader>
              <PopoverBody fontSize="14px">你确定删除这张照片吗？</PopoverBody>
              <PopoverFooter
                border="0"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Button size="sm" colorScheme="red" onClick={onDelete}>
                  确定
                </Button>
              </PopoverFooter>
            </PopoverContent>
          </Popover>

          <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
            编辑
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HamsterImageModal;
