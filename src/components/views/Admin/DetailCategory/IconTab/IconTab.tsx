import InputFile from "@/components/ui/InputFile";
import { Button, Card, CardBody, CardHeader, Skeleton } from "@heroui/react";
import Image from "next/image";

interface PropsTypes {
  currentIcon: string;
}

const IconTab = (props: PropsTypes) => {
  const { currentIcon } = props;
  return (
    <Card className="w-full p-4 lg:w-1/2">
      <CardHeader className="flex-col items-center">
        <h1 className="w-full text-xl font-bold">Category Icon</h1>
        <p className="text-small text-default-400 w-full">
          Manage icon of this category
        </p>
      </CardHeader>
      <CardBody>
        <form className="flex flex-col gap-4" onSubmit={() => {}}>
          <div className="flex flex-col gap-2">
            <p className="text-small text-default-700 font-medium">
              Cureent Icon
            </p>
            <Skeleton
              isLoaded={!!currentIcon}
              className="aspect-square rounded-lg"
            >
              <Image src={currentIcon} alt="icon" fill className="relative!" />
            </Skeleton>
          </div>
          <InputFile
            name="icon"
            isDropable
            label={
              <p className="text-small text-default-700 mb-2 font-medium">
                Upload New Icon
              </p>
            }
          />
          <Button color="danger" className="mt-2 disabled:bg-default-500">
            Save Change
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default IconTab;
