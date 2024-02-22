"use client";

import { Layout, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <Header className="fixed w-full z-40 h-20 bg-gradient-to-b from-blue-500 to-blue-400">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-pacifico font-bold">JACSF</div>
        <div className="hidden lg:flex">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link href="/">Login</Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className="lg:hidden">
          <MenuOutlined
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuVisible && (
        <div className="lg:hidden text-blue-500">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link href="/">Login</Link>
            </Menu.Item>
          </Menu>
        </div>
      )}
    </Header>
  );
};

export default Navbar;
