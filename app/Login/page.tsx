"use client";

import { useState } from "react";
import { message } from "antd";
import { Form, Input, Button, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Content } = Layout;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    { email: "tigabu@admin.com", password: "12345", name: "Tigabu Abrham" },
    { email: "abeni@admin.com", password: "12345", name: "Abenezer Kebede" },
  ];

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      message.success(`Welcome, ${user.name}!`);
      router.push("/");
    } else {
      message.error("Invalid email or password");
    }
  };

  return (
    <Layout>
      <Content className="flex flex-col items-center justify-center h-screen">
        <div className="w-full bg-gray-500 h-[50%] z-50 relative">
          <div
            className="bg-cover bg-center bg-no-repeat w-full h-full relative"
            style={{
              backgroundImage: `url('/assets/images/JUSTUDENT.JPG')`,
              opacity: 0.6,
            }}
          >
            .
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-white bg-opacity-30 p-6 border border-gray-200 shadow-md rounded-md z-10">
            .
          </div>
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-2 text-shadow-lg">
              Welcome to JU Apostolic Generation
            </h2>
            <p className="text-lg text-shadow-lg border-2 border-white w-[80%] rounded-lg px-5">
              Strengthening the Christian Generation
            </p>
          </div>
        </div>
        <div className="w-full z-50 bg-white h-[50%] flex flex-col justify-center items-center p-4">
          <h1 className="text-2xl font-semibold mb-2">Welcome,</h1>
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

    // <Layout>
    //   <Content className="flex items-center justify-center h-screen">
    //     <div className="w-1/2 bg-gray-500 h-[100%] z-50 flex justify-center items-center relative">
    //       <div
    //         className="bg-cover bg-center bg-no-repeat w-full h-full relative"
    //         style={{
    //           backgroundImage: `url('/assets/images/JUSTUDENT.JPG')`,
    //           opacity: 0.6,
    //         }}
    //       >
    //         .
    //       </div>
    //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white bg-opacity-30 p-6 border border-gray-200 shadow-md rounded-md z-10">
    //         .
    //       </div>
    //       {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-500 via-transparent to-gray-500 opacity-40"></div> */}
    //       <div className="absolute top-3/4 left-[22rem] transform -translate-x-1/2 -translate-y-1/2 text-white text-left">
    //         <h2 className="text-3xl font-extrabold mb-2 text-shadow-lg">
    //           Welcome to JU Apostolic Generation
    //         </h2>
    //         <p className="text-lg text-shadow-lg border-2 border-white w-[80%] rounded-lg px-5">
    //           Strengthening the Christian Generation
    //         </p>
    //       </div>
    //     </div>
    //     <div className="w-1/2 z-50 bg-white h-[100%] flex justify-center items-center">
    //       <div className="p-6 w-3/4 bg-white border border-gray-200 shadow-md rounded-md">
    //         <h1 className="text-2xl font-semibold mb-2">Welcome,</h1>
    //         <h1 className="text-lg mb-8">Login to your account</h1>
    //         <Form>
    //           <Form.Item label="Email">
    //             <Input
    //               type="email"
    //               value={email}
    //               onChange={(e: any) => setEmail(e.target.value)}
    //               className="w-full"
    //               prefix={<UserOutlined />}
    //             />
    //           </Form.Item>
    //           <Form.Item label="Password">
    //             <Input
    //               type="password"
    //               value={password}
    //               onChange={(e: any) => setPassword(e.target.value)}
    //               className="w-full"
    //               prefix={<LockOutlined />}
    //             />
    //           </Form.Item>
    //           <Form.Item className="mb-4">
    //             <Button
    //               type="primary"
    //               onClick={handleLogin}
    //               className="w-full bg-blue-500 hover:bg-blue-600"
    //             >
    //               Login to your account
    //             </Button>
    //           </Form.Item>
    //           <div className="flex justify-between">
    //             <Button type="link" className="text-blue-500">
    //               Reset Password
    //             </Button>
    //             <Button type="link" className="text-blue-500">
    //               Remember Me
    //             </Button>
    //           </div>
    //           <div className="mt-4">
    //             <Button
    //               type="default"
    //               className="w-full"
    //               onClick={() => router.push("/register")}
    //             >
    //               Member Registration Form
    //             </Button>
    //           </div>
    //           <div className="mt-4 text-center text-gray-600">
    //             {`Don't have an account? Click on the registration link to become a registered member.`}
    //           </div>
    //         </Form>
    //       </div>
    //     </div>
    //   </Content>
    // </Layout>
  );
};

export default Login;
