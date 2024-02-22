"use client";

import { useEffect, useState } from "react";
import { Layout, Dropdown, Avatar, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

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
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userToken = Cookies.get("userToken");
    if (!userToken) {
      // Redirect to Login if user token is not found
      router.push("/Login");
    } else {
      // Fetch user details or decode token if needed
      // For now, setting a mock user for demonstration
      const mockUser = {
        userName: "Tigabu Abrham",
        userRole: "Admin",
      };
      setUser(mockUser);
    }
  }, []);

  const handleMenuClick = (e: any) => {
    if (e.key === "logout") {
      // Clear user token and redirect to Login on logout
      Cookies.remove("userToken");
      router.push("/Login");
      console.log("Logout clicked");
    }
  };

  return (
    <div>
      <Header className="flex items-center justify-between bg-blue-500 p-4 z-50">
        <div className="text-white text-2xl font-bold">JUASF</div>
        <div className="flex flex-row items-center">
          <div className="text-white">
            {user ? (
              <Dropdown
                overlay={<UserProfileMenu handleMenuClick={handleMenuClick} />}
                placement="bottomRight"
                arrow
              >
                <div className="flex items-center space-x-2">
                  <Avatar icon={<UserOutlined />} />
                  <span className="ml-2">
                    <strong>{user.userName}</strong> - {user.userRole}
                  </span>
                </div>
              </Dropdown>
            ) : null}
          </div>
        </div>
      </Header>
      <UserManagement />
    </div>
  );
};

export default Home;

// import { Layout, Dropdown, Avatar, Menu } from "antd";
// import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
// import { useRouter } from "next/navigation";

// const { Header } = Layout;
// const { SubMenu } = Menu;

// const UserProfileMenu = ({ handleMenuClick }: any) => (
//   <Menu onClick={handleMenuClick}>
//     <SubMenu title="Profile">
//       <Menu.Item key="userName">Tigabu Abrham</Menu.Item>
//       <Menu.Item key="userRole">Admin</Menu.Item>
//     </SubMenu>
//     <Menu.Item key="logout" icon={<LogoutOutlined />}>
//       Logout
//     </Menu.Item>
//   </Menu>
// );

// import UserManagement from "../components/UserManagement";

// const Home = () => {
//   const router = useRouter();

//   const handleMenuClick = (e: any) => {
//     if (e.key === "logout") {
//       router.push("/Login");
//       // Perform logout action
//       console.log("Logout clicked");
//     }
//   };
//   return (
//     <div>
//       <Header className="flex items-center justify-between bg-blue-500 p-4 z-50">
//         <div className="text-white text-2xl font-bold">JUASF</div>
//         <div className="flex flex-row items-center">
//           <div className="text-white">
//             <Dropdown
//               overlay={<UserProfileMenu handleMenuClick={handleMenuClick} />}
//               placement="bottomRight"
//               arrow
//             >
//               <div className="flex items-center space-x-2">
//                 <Avatar icon={<UserOutlined />} />
//                 <span className="ml-2">
//                   <strong>Tigabu Abrham</strong> - Admin
//                 </span>
//               </div>
//             </Dropdown>
//           </div>
//         </div>
//       </Header>
//       <UserManagement />
//     </div>
//   );
// };

// export default Home;
