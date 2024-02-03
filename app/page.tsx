"use client";
import { Layout, Dropdown, Avatar, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Header } = Layout;
const { SubMenu } = Menu;

const UserProfileMenu = ({ handleMenuClick }: any) => (
  <Menu onClick={handleMenuClick}>
    <SubMenu title="Profile">
      <Menu.Item key="userName">Tigabu Abrham</Menu.Item>
      <Menu.Item key="userRole">Admin</Menu.Item>
    </SubMenu>
    <Menu.Item key="logout" icon={<LogoutOutlined />}>
      Logout
    </Menu.Item>
  </Menu>
);

import UserManagement from "../components/UserManagement";

const Home = () => {
  const router = useRouter();

  const handleMenuClick = (e: any) => {
    if (e.key === "logout") {
      router.push("/Login");
      // Perform logout action
      console.log("Logout clicked");
    }
  };
  return (
    <div>
      <Header className="flex items-center justify-between bg-blue-500 p-4 z-50">
        <div className="text-white text-2xl font-bold">JUASF</div>
        <div className="flex flex-row items-center">
          <div className="text-white">
            <Dropdown
              overlay={<UserProfileMenu handleMenuClick={handleMenuClick} />}
              placement="bottomRight"
              arrow
            >
              <div className="flex items-center space-x-2">
                <Avatar icon={<UserOutlined />} />
                <span className="ml-2">
                  <strong>Tigabu Abrham</strong> - Admin
                </span>
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
      <UserManagement />
    </div>
  );
};

export default Home;
