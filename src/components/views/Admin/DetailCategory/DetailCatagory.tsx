import { Tab, Tabs } from "@heroui/react";
import IconTab from "./IconTab";
import InfoTab from "./InfoTab";
import useDetailCategory from "./useDetailCategory";

const DetailCatagory = () => {
    const { dataCategory } = useDetailCategory();
    return (
        <Tabs aria-label="Options">
            <Tab key="icon" title="Icon">
                <IconTab currentIcon={dataCategory?.icon} />
            </Tab>
            <Tab key="info" title="Info">
                <InfoTab />
            </Tab>
        </Tabs>
    )
}

export default DetailCatagory;