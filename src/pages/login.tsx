import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  FormHelperText,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import MainLayout from "../components/layouts/user/MainLayout";
import { useRouter } from "next/router";

const AdminLoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // const { data: session, status } = useSession();
  const router = useRouter();
  const toast = useToast();

  const onSubmit = async (v: any) => {
    const res = await signIn("credentials", {
      redirect: false,
      username: v.username,
      password: v.password,
      // callbackUrl: `${window.location.origin}`,
    });

    if (res) {
      const { ok, error, url } = res;
      if (ok) {
        router.replace(window.location.origin);
        toast({
          title: "登入成功！",
          status: "success",
          isClosable: true,
          position: "top-right",
        });
      } else {
        toast({
          title: "登入失败！",
          description: error,
          status: "error",
          isClosable: true,
          position: "top-right",
        });
      }
    }
  };

  return (
    <MainLayout>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} minH='80vh'>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>登入管理员界面</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            管理你可爱的鼠鼠 ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>管理员用户名</FormLabel>
              <Input
                {...register("username", {
                  required: "请输入管理员用户名",
                })}
              />
              {errors.username && (
                <FormHelperText color="red">
                  {errors?.username.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>密码</FormLabel>
              <Input
                type="password"
                {...register("password", {
                  required: "请输入密码",
                })}
              />
              {errors.password && (
                <FormHelperText color="red">
                  {errors.password.message}
                </FormHelperText>
              )}
            </FormControl>

            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={handleSubmit(onSubmit)}
            >
              登入
            </Button>
          </Stack>
        </Box>
      </Stack>
    </MainLayout>
  );
};

export default AdminLoginPage;
