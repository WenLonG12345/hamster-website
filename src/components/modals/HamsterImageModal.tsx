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
  FormLabel
} from "@chakra-ui/react";
import { Photo } from "@prisma/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

type HamsterImageModalProps = {
  data?: Photo | null;
  onClose: () => void;
};

const HamsterImageModal: React.FC<HamsterImageModalProps> = ({
  data,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (data) {
      setValue("description", data.description);
    }
  }, [data]);

  return (
    <Modal isOpen={!!data} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Stack spacing={3}>
            <Center >
            <Image src={data?.url} alt={data?.id} objectFit='contain' h='300px'/>
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
          <Button colorScheme="blue">编辑</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HamsterImageModal;
