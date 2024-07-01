import { useShow, IResourceComponentsProps } from "@refinedev/core";

import { Show, MarkdownField } from "@refinedev/antd";
import { Typography } from "antd";
import { IBusiness } from "../../interfaces";

const { Title, Text } = Typography;

export const BusinessShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow<IBusiness>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <Text>{record?.id}</Text>

            <Title level={5}>Username</Title>
            <Text>{record?.username}</Text>

            <Title level={5}>Email</Title>
            <MarkdownField value={record?.email} />
        </Show>
    );
};
