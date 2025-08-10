import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegister } from "@/types/Auth";
import authServices from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const registerSchema = yup.object().shape({
  fullName: yup.string().required("Please input your fullname"),
  userName: yup.string().required("Please input your username"),
  email: yup
    .string()
    .email("Email format not valid")
    .required("Please input your email"),
  password: yup
    .string()
    .min(8, "Minimal character is 8")
    .required("Please input your password"),
  confirmPassword: yup
    .string()
    .required("Please input your confirm password")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

const useRegister = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState({
    password: false,
    confirmPassword: false,
  });

  // handler toggle visibility password and confirm password
  const handlerToggleVisibility = (key: "password" | "confirmPassword") => {
    setIsVisible({
      ...isVisible,
      [key]: !isVisible[key],
    });
  };

  // handler register form
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const registerServices = async (payload: IRegister) => {
    const result = await authServices.register(payload);
    return result;
  };

  const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
    mutationFn: registerServices,
    onError: (error) => {
      setError("root", { message: error.message });
    },
    onSuccess: () => {
      router.push("/auth/register/success");
      reset();
    },
  });

  const handlerRegister = (data: IRegister) => mutateRegister(data);

  return {
    isVisible,
    handlerToggleVisibility,
    control,
    handleSubmit,
    errors,
    handlerRegister,
    isPendingRegister,
  };
};

export default useRegister;
