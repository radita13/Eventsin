import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const RegisterSuccess = () => {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 p-4">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          src="/images/illustrations/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustrations/create_account_success.svg"
          alt="logo"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-primary text-xl font-bold">
          Create Account Success
        </h2>
        <p className="text-small text-default-500 font-bold">
          Check your email for account verification
        </p>
        <Button
          variant="bordered"
          color="primary"
          size="lg"
          className="mt-4 w-fit"
          onClick={() => router.push("/")}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
