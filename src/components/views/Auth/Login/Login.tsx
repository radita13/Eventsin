import { Button, Card, CardBody, Input, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useLogin from "./useLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Login = () => {
  const {
    isVisible,
    toggleVisibility,
    control,
    handleSubmit,
    errors,
    handlerLogin,
    isPendingLogin,
  } = useLogin();

  console.log(errors);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
        <Image
          src="/images/illustrations/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustrations/auth.svg"
          alt="login"
          className="w-2/3 lg:w-full"
          width={1024}
          height={1024}
        />
      </div>
      <div>
        <Card>
          <CardBody className="p-8">
            <h2 className="text-primary text-2xl font-bold">Login</h2>
            <p className="text-small mb-4 mt-2">
              Don{"'"}t have account ?&nbsp;
              <Link
                href="/auth/register"
                className="text-primary font-semibold"
              >
                Register here
              </Link>
            </p>

            {errors.root && (
              <p className="text-danger-500 mb-2 font-medium">
                {errors?.root?.message}
              </p>
            )}

            <form
              className={cn(
                "flex w-80 flex-col",
                Object.keys(errors).length > 0 ? "gap-2" : "gap-4",
              )}
              onSubmit={handleSubmit(handlerLogin)}
            >
              <Controller
                name="identifire"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="text"
                      label="Email / Username"
                      variant="bordered"
                      autoComplete="off"
                      isInvalid={errors.identifire !== undefined}
                      errorMessage={errors.identifire?.message}
                    />
                  );
                }}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type={isVisible ? "text" : "password"}
                      label="Password"
                      variant="bordered"
                      autoComplete="off"
                      endContent={
                        <button
                          type="button"
                          className="focus:outline-none"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <FaEye className="text-default-400 pointer-events-none text-xl" />
                          ) : (
                            <FaEyeSlash className="text-default-400 pointer-events-none text-xl" />
                          )}
                        </button>
                      }
                      isInvalid={errors.password !== undefined}
                      errorMessage={errors.password?.message}
                    />
                  );
                }}
              />

              <Button color="primary" size="lg" type="submit">
                {isPendingLogin ? (
                  <Spinner size="sm" color="default" />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
