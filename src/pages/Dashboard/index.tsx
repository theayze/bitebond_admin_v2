import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { dataProvider } from "@refinedev/appwrite";
import { appwriteClient } from "../../utility";

const DashboardPage: React.FC = () => {
    const [usersCount, setUsersCount] = useState(0);
    const [postsCount, setPostsCount] = useState(0);
    const [businessesCount, setBusinessesCount] = useState(0);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const users = await dataProvider(appwriteClient).getList({
                    resource: "6661baab00273144ede3",
                    pagination: { pageSize: 1, current: 1 },
                });

                const posts = await dataProvider(appwriteClient).getList({
                    resource: "6661bb8100382da78543",
                    pagination: { pageSize: 1, current: 1 },
                });

                const businesses = await dataProvider(appwriteClient).getList({
                    resource: "6679433b00326211ed15",
                    pagination: { pageSize: 1, current: 1 },
                });

                setUsersCount(users.total);
                setPostsCount(posts.total);
                setBusinessesCount(businesses.total);
            } catch (error) {
                console.error("Error fetching counts:", error);
            }
        };

        fetchCounts();
    }, []);

    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Total Users" bordered={false}>
                    {usersCount}
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Total Posts" bordered={false}>
                    {postsCount}
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Total Businesses" bordered={false}>
                    {businessesCount}
                </Card>
            </Col>
        </Row>
    );
};

export default DashboardPage;
