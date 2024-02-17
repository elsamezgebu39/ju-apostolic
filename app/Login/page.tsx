"use client";

import { useState } from "react";
import { message } from "antd";
import { Form, Input, Button, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const { Content } = Layout;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    {
      email: "tigabu@admin.com",
      password: "12345",
      name: "Tigabu Abrham",
      token: "bvfbvhf6374673&&^^%%$#",
    },
    {
      email: "abeni@admin.com",
      password: "12345",
      name: "Abenezer Kebede",
      token: "bvfbvhf6374673&&^^%%$#",
    },
  ];

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      Cookies.set("userToken", user.token, { expires: 7 });
      message.success(`Welcome, ${user.name}!`);
      router.push("/");
    } else {
      message.error("Invalid email or password");
    }
  };

  return (
    <Layout>
      <Content className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start h-screen">
        <div className="w-full bg-gray-500 h-[50%] md:h-full z-50 relative">
          <div
            className="bg-cover bg-center bg-no-repeat w-full h-full relative"
            style={{
              backgroundImage: `url('/assets/images/JUSTUDENT.JPG')`,
              opacity: 0.6,
            }}
          >
            .
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 h-1/2 bg-white bg-opacity-30 p-6 border border-gray-200 shadow-md rounded-md z-10">
            .
          </div>

          {/* Welcome Message - Large Screen */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex-col justify-center items-center">
            <h2 className="text-2xl font-extrabold mb-2 text-shadow-lg text-center">
              Welcome to JU Apostolic Generation
            </h2>
            <p className="text-lg text-shadow-lg border-2 border-white w-[80%] rounded-lg px-5">
              Strengthening the Christian Generation
            </p>
          </div>

          {/* Welcome Message - Small Screen */}
          <div className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col justify-center items-center z-50">
            <h2 className="text-2xl font-extrabold mb-2 text-shadow-lg">
              Welcome to JU Apostolic Generation
            </h2>
            <Button
              type="default"
              className="w-[80%] text-lg text-black font-semibold flex justify-center items-center bg-white"
              onClick={() => router.push("/register")}
            >
              Register Now
            </Button>
          </div>
        </div>

        <div className="w-full z-50 bg-white h-[50%] md:h-full flex flex-col justify-center items-start px-4 md:px-32 md:pt-4 pt-12 my-auto mx-auto">
          <h1 className="text-2xl font-semibold mb-2 mt-4">Welcome,</h1>
          <h1 className="text-lg mb-8">Login to your account</h1>
          <Form>
            <Form.Item label="Email">
              <Input
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                className="w-full"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                className="w-full"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item className="mb-4">
              <Button
                type="primary"
                onClick={handleLogin}
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Login to your account
              </Button>
            </Form.Item>
            <div className="flex justify-between">
              <Button type="link" className="text-blue-500">
                Reset Password
              </Button>
              <Button type="link" className="text-blue-500">
                Remember Me
              </Button>
            </div>
            <div className="mt-4">
              <Button
                type="default"
                className="w-full"
                onClick={() => router.push("/register")}
              >
                Member Registration Form
              </Button>
            </div>
            <div className="mt-4 text-center text-gray-600">
              {`Don't have an account? Click on the registration link to become a registered member.`}
            </div>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default Login;
