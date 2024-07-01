// src/components/CustomLayout.tsx

import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { ThemedLayoutV2, ThemedHeaderV2 } from "@refinedev/antd";
import { useNavigation } from "@refinedev/core";

const { Sider } = Layout;

const CustomLayout: React.FC = ({ children }) => {
    const { push } = useNavigation();

    return (
        <ThemedLayoutV2>
            <Sider>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
                    <Menu.Item key="dashboard">
                        <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="posts">
                        <Link to="/posts">Posts</Link>
                    </Menu.Item>
                    <Menu.Item key="users">
                        <Link to="/users">Users</Link>
                    </Menu.Item>
                    <Menu.Item key="businesses">
                        <Link to="/businesses">Businesses</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <ThemedHeaderV2>
                {/* Add your logo or other header items here */}
            </ThemedHeaderV2>
            {children}
        </ThemedLayoutV2>
    );
};

export default CustomLayout;
