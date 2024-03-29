import "./../app/styles/globals.scss";
// import cx from "classnames";
// import { sfPro, inter } from "./fonts";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

export const metadata = {
  title: "JU Student",
  description: "JU Student",
};

export default async function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="flex-grow">{children}</div>
        <div className="fixed bottom-0 left-0 w-full h-5 bg-gray-700 text-white z-50">
          <p className="text-center">
            &copy; Powered by JU Apostolic Generation
          </p>
        </div>
      </body>
    </html>
  );
}
