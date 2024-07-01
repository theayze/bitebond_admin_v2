import { IResourceComponentsProps } from "@refinedev/core";
import {
    List,
    useTable,
    EditButton,
    ShowButton,
    getDefaultSortOrder,
    DeleteButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";
import { IUser } from "../../interfaces";

export const UserList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps, sorters } = useTable<IUser>({
        initialSorter: [
            {
                field: "$id",
                order: "asc",
            },
        ],
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title="ID"
                    sorter
                    width={100}
                    defaultSortOrder={getDefaultSortOrder("id", sorters)}
                />
                <Table.Column dataIndex="username" title="Username" sorter />

                <Table.Column<IUser>
                    title="Actions"
                    dataIndex="actions"
                    fixed="right"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.id} />
                            <ShowButton hideText size="small" recordItemId={record.id} />
                            <DeleteButton hideText size="small" recordItemId={record.id} />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
