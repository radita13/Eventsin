import { Tab, Tabs } from "@heroui/react";
import IconTab from "./IconTab";
import InfoTab from "./InfoTab";

const DetailCatagory = () => {
    return (
        <Tabs aria-label="Options">
            <Tab key="icon" title="Icon">
                <IconTab />
            </Tab>
            <Tab key="info" title="Info">
                <InfoTab />
            </Tab>
        </Tabs>
    )
}

export default DetailCatagory;