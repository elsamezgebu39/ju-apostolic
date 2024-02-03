"use client";
// components/UserManagement.js
import { useState } from "react";
import { Table, Button, Modal, Form, Input, Space, Avatar, Tag } from "antd";
import {
  UserAddOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons"; // Import Ant Design icons
import Select, { Option } from "rc-select";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      key: "1",
      username: "Tigabu.ab",
      fullName: "Tigabu Abrham",
      currentAddress: "Addis Ababa, Ethiopia",
      phoneNumber: "+2519 13228892",
      emailAddress: "tigabu@admin.com",
      role: "Admin",
      status: "Active",
      profileImage: "https://example.com/john_doe.jpg",
    },
    {
      key: "2",
      username: "abeni.keb",
      fullName: "Abenezer Kebede",
      currentAddress: "Addis Ababa, Ethiopia",
      phoneNumber: "+2519 13228892",
      emailAddress: "abeni@admin.com",
      role: "Admin",
      status: "Active",
      profileImage: "https://example.com/john_doe.jpg",
    },
    {
      key: "3",
      username: "eyosi.izzy",
      fullName: "Eyosiyas Esrael",
      currentAddress: "Addis Ababa, Ethiopia",
      phoneNumber: "+2519 13228892",
      emailAddress: "eyosi@admin.com",
      role: "Admin",
      status: "Active",
      profileImage: "https://example.com/john_doe.jpg",
    },
    {
      key: "4",
      username: "dani.tesh",
      fullName: "Daneal Teshale",
      currentAddress: "Addis Ababa, Ethiopia",
      phoneNumber: "+2519 13228892",
      emailAddress: "dani@admin.com",
      role: "User",
      status: "Active",
      profileImage: "https://example.com/john_doe.jpg",
    },
    {
      key: "5",
      username: "marta.aw",
      fullName: "Marta Aweke",
      currentAddress: "Hawasa, Ethiopia",
      phoneNumber: "+2519 13228892",
      emailAddress: "marta@admin.com",
      role: "User",
      status: "Active",
      profileImage: "https://example.com/john_doe.jpg",
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    {
      title: "Row Number",
      dataIndex: "rowNumber",
      key: "rowNumber",
      render: (text: any, record: any, index: any) => <span>{index + 1}</span>,
    },
    {
      title: "Profile",
      dataIndex: "profileImage",
      key: "profileImage",
      render: (text: any, record: any) => (
        <div className="flex items-center">
          <Avatar src={text} size={40} />
          <div className="ml-2">
            <p className="font-semibold">{record.fullName}</p>
            <p className="text-sm">{record.username}</p>
          </div>
        </div>
      ),
    },

    {
      title: "Current Address",
      dataIndex: "currentAddress",
      key: "currentAddress",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email Address",
      dataIndex: "emailAddress",
      key: "emailAddress",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text: any) => (
        <Tag color={text === "Admin" ? "green" : "gray"}>{text}</Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} />
          <Button type="link" icon={<DeleteOutlined />} danger />
        </Space>
      ),
    },
  ];

  const handleAddUser = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    setUsers([...users, values]);
    setIsModalVisible(false);
  };

  return (
    <div className="p-8">
      <div className="mb-4 flex flex-row justify-between items-start">
        <div>
          <h1 className="text-2xl font-extrabold text-blue-800 mb-2">
            JU Apostolic Graduates and Students Association
          </h1>
          <p className="text-lg font-semibold text-gray-600">
            Membership Management
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="w-48"
          />
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            onClick={handleAddUser}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Add User
          </Button>
        </div>
      </div>

      <Table
        dataSource={users}
        columns={columns}
        bordered={false}
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title="Add User"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            label="Profile Image URL"
            name="profileImage"
            rules={[
              {
                required: true,
                message: "Please input the profile image URL!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input the username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input the full name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Current Address"
            name="currentAddress"
            rules={[
              { required: true, message: "Please input the current address!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input the phone number!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email Address"
            name="emailAddress"
            rules={[
              { required: true, message: "Please input the email address!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select the role!" }]}
          >
            <Select>
              <Option value="User">User</Option>
              <Option value="Admin">Admin</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please select the status!" }]}
          >
            <Select>
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add User
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
