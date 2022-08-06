/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Hamster } from "@prisma/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateHamsterDescription } from "../../utils/api";

type HamsterDescriptionModalProps = {
  data?: Hamster | null;
  onClose: () => void;
  onFinish: (data: any) => void;
};

const HamsterDescriptionModal: React.FC<HamsterDescriptionModalProps> = ({
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
      setValue("description", data.description);
    }
  }, [data]);

  const onSubmit = async (v: any) => {
    if(data) {
      const updateArgs: Hamster = {...data, description: v.description}
      const res = await updateHamsterDescription(updateArgs);
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

      onFinish(resData);
    }
  };

  return (
    <Modal isOpen={!!data} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>仓鼠描述</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Text mb={3}>描述你可爱的仓鼠🐹</Text>
          <Textarea
            {...register("description", {
              required: "请输入仓鼠描述",
            })}
          />
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

export default HamsterDescriptionModal;
