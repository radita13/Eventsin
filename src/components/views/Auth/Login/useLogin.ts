import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "@/types/Auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const loginSchema = yup.object().shape({
  identifire: yup.string().required("Please input your email / username"),
  password: yup.string().required("Please input your password"),
});

const useLogin = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const callbackURL: string = (router.query.callbackURL as string) || "/";

  // handler login form
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const loginServices = async (payload: ILogin) => {
    const result = await signIn("credentials", {
      ...payload,
      redirect: false,
      callbackURL,
    });
    if (result?.error && result?.status === 401) {
      throw new Error("Login failed");
    }
  };

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginServices,
    onError: (error) => {
      setError("root", { message: error.message });
    },
    onSuccess: () => {
      router.push(callbackURL);
      reset();
    },
  });

  const handlerLogin = (data: ILogin) => mutateLogin(data);

  return {
    isVisible,
    toggleVisibility,
    control,
    handleSubmit,
    errors,
    handlerLogin,
    isPendingLogin,
  };
};

export default useLogin;
