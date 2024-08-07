import { useShow, IResourceComponentsProps } from "@refinedev/core";

import { Show, MarkdownField } from "@refinedev/antd";
import { Typography } from "antd";
import { IUser } from "../../interfaces";

const { Title, Text } = Typography;

export const UserShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow<IUser>();
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
