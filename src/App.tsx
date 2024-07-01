import { Authenticated, Refine } from "@refinedev/core";
import { dataProvider, liveProvider } from "@refinedev/appwrite";
import {
  ErrorComponent,
  RefineThemes,
  ThemedLayoutV2,
  useNotificationProvider,
} from "@refinedev/antd";
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import "@refinedev/antd/dist/reset.css";

import { App as AntdApp, ConfigProvider } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { appwriteClient } from "./utility";
import { authProvider } from "./authProvider";
import { PostCreate } from "./pages/posts/create";
import { PostEdit } from "./pages/posts/edit";
import { PostList } from "./pages/posts/list";
import { PostShow } from "./pages/posts/show";
import { UserList } from "./pages/users/list";
import { UserCreate } from "./pages/users/create";
import { UserEdit } from "./pages/users/edit";
import { UserShow } from "./pages/users/show";
import { BusinessList } from "./pages/businesses/list";
import { BusinessCreate } from "./pages/businesses/create";
import { BusinessEdit } from "./pages/businesses/edit";
import { BusinessShow } from "./pages/businesses/show";
import { AuthPage } from "./pages/auth";
import { DashboardOutlined } from "@ant-design/icons";
import DashboardPage from "./pages/Dashboard";

const App: React.FC = () => (
  <BrowserRouter>
    <ConfigProvider theme={RefineThemes.Purple}>
      <AntdApp>
        <Refine
          dataProvider={dataProvider(appwriteClient, {
            databaseId: "6661ba4c00026c31860a",
          })}
          liveProvider={liveProvider(appwriteClient, {
            databaseId: "6661ba4c00026c31860a",
          })}
          authProvider={authProvider}
          routerProvider={routerProvider}
          resources={[
            {
              name: "dashboard",
              list: "/dashboard",
              meta: {
                label: "Dashboard",
                icon: <DashboardOutlined />,
              },
            },
            {
              name: "6661bb8100382da78543",
              list: "/posts",
              create: "/posts/create",
              edit: "/posts/edit/:id",
              show: "/posts/show/:id",
              meta: {
                label: "Posts",
              },
            },
            {
              name: "6661baab00273144ede3",
              list: "/users",
              create: "/users/create",
              edit: "/users/edit/:id",
              show: "/users/show/:id",
              meta: {
                label: "Users",
              },
            },
            {
              name: "6679433b00326211ed15",
              list: "/businesses",
              create: "/businesses/create",
              edit: "/businesses/edit/:id",
              show: "/businesses/show/:id",
              meta: {
                label: "Businesses",
              },
            },
          ]}
          notificationProvider={useNotificationProvider}
          options={{
            liveMode: "auto",
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <Routes>
            <Route
              element={
                <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                  <ThemedLayoutV2>
                    <Outlet />
                  </ThemedLayoutV2>
                </Authenticated>
              }
            >
              <Route index element={<NavigateToResource resource="dashboard" />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/posts">
                <Route index element={<PostList />} />
                <Route path="create" element={<PostCreate />} />
                <Route path="edit/:id" element={<PostEdit />} />
                <Route path="show/:id" element={<PostShow />} />
              </Route>
              <Route path="/users">
                <Route index element={<UserList />} />
                <Route path="create" element={<UserCreate />} />
                <Route path="edit/:id" element={<UserEdit />} />
                <Route path="show/:id" element={<UserShow />} />
              </Route>
              <Route path="/businesses">
                <Route index element={<BusinessList />} />
                <Route path="create" element={<BusinessCreate />} />
                <Route path="edit/:id" element={<BusinessEdit />} />
                <Route path="show/:id" element={<BusinessShow />} />
              </Route>
            </Route>
            <Route
              element={
                <Authenticated fallback={<Outlet />}>
                  <NavigateToResource resource="dashboard" />
                </Authenticated>
              }
            >
              <Route
                path="/login"
                element={<AuthPage forgotPasswordLink={false} />}
              />
              <Route path="/register" element={<AuthPage type="register" />} />
            </Route>
            <Route
              element={
                <Authenticated>
                  <ThemedLayoutV2>
                    <Outlet />
                  </ThemedLayoutV2>
                </Authenticated>
              }
            >
              <Route path="*" element={<ErrorComponent />} />
            </Route>
          </Routes>
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </AntdApp>
    </ConfigProvider>
  </BrowserRouter>
);

export default App;
