import { Button, Card, CardBody, Input, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Register = () => {
  const {
    isVisible,
    handlerToggleVisibility,
    control,
    handleSubmit,
    errors,
    handlerRegister,
    isPendingRegister,
  } = useRegister();

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
            <h2 className="text-primary text-xl font-bold">Create Account</h2>
            <p className="text-small mb-4">
              Have an Account?&nbsp;
              <Link href="/auth/login" className="text-primary font-semibold">
                Login here
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
              onSubmit={handleSubmit(handlerRegister)}
            >
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="text"
                      label="Fullname"
                      variant="bordered"
                      autoComplete="off"
                      isInvalid={errors.fullName !== undefined}
                      errorMessage={errors.fullName?.message}
                    />
                  );
                }}
              />

              <Controller
                name="userName"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="text"
                      label="Username"
                      variant="bordered"
                      autoComplete="off"
                      isInvalid={errors.userName !== undefined}
                      errorMessage={errors.userName?.message}
                    />
                  );
                }}
              />

              <Controller
                name="email"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="email"
                      label="Email"
                      variant="bordered"
                      autoComplete="off"
                      isInvalid={errors.email !== undefined}
                      errorMessage={errors.email?.message}
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
                      type={isVisible.password ? "text" : "password"}
                      label="Password"
                      variant="bordered"
                      autoComplete="off"
                      endContent={
                        <button
                          type="button"
                          className="focus:outline-none"
                          onClick={() => handlerToggleVisibility("password")}
                        >
                          {isVisible.password ? (
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

              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type={isVisible.confirmPassword ? "text" : "password"}
                      label="Confirm Password"
                      variant="bordered"
                      autoComplete="off"
                      endContent={
                        <button
                          type="button"
                          className="focus:outline-none"
                          onClick={() =>
                            handlerToggleVisibility("confirmPassword")
                          }
                        >
                          {isVisible.confirmPassword ? (
                            <FaEye className="text-default-400 pointer-events-none text-xl" />
                          ) : (
                            <FaEyeSlash className="text-default-400 pointer-events-none text-xl" />
                          )}
                        </button>
                      }
                      isInvalid={errors.confirmPassword !== undefined}
                      errorMessage={errors.confirmPassword?.message}
                    />
                  );
                }}
              />

              <Button color="primary" size="lg" type="submit">
                {isPendingRegister ? (
                  <Spinner size="sm" color="default" />
                ) : (
                  "Register"
                )}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Register;
