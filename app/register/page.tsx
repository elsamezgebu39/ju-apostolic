"use client";
import { useState } from "react";
import {
  Form,
  Input,
  Radio,
  DatePicker,
  Select,
  Button,
  Card,
  Upload,
  message,
  Checkbox,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Link from "next/link";
import Navbar from "./../../components/Nav";
import { UserOutlined } from "@ant-design/icons";
import { getCsrfToken } from "./../../services/getCsrfService";
import axios from "./../../config/axiosInstance";
const { Option } = Select;

const RegisterPage: React.FC = () => {
  const [form] = Form.useForm();
  const [gender, setGender] = useState("male");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const onFinish = async (values: any) => {
    try {
      const formData = new FormData();

      formData.append("fullName", values.fullName);
      formData.append("graduationLevel", values.graduationLevel);
      formData.append(
        "JUACU_engagement_center",
        values.JUACU_engagement_center
      );
      formData.append("currentAddress", values.currentAddress);
      formData.append("emailAddress", values.emailAddress);
      formData.append("fieldOfStudy", values.fieldOfStudy);
      formData.append("engagement", values.engagement);
      formData.append("engagementAgreement", values.engagementAgreement);
      formData.append("entryYear", values.entryYear);
      formData.append("gender", values.gender);
      formData.append("graduationYear", values.graduationYear);
      formData.append("paymentPeriod", values.paymentPeriod);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("role", values.role);
      formData.append("signature", values.signature);
      formData.append("profileImage", values.profileImage[0].originFileObj);

      console.log("Received formData:", formData);

      const response = await axios.post(`register-user`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Handle success response
      console.log("Registration success:", response.data);

      // Clear the form
      form.resetFields();

      // Show success message
      message.success("Registration successful!");
    } catch (error) {
      // Handle error
      console.error("Registration failed:", error);

      // Show error message
      message.error("Registration failed. Please try again.");
    }
  };

  const handleTermsChange = (e: any) => {
    setIsTermsAccepted(e.target.checked);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const customRequest = ({ file, onSuccess, onError }: any) => {
    // Ensure that the file is properly included in the request
    console.log(file);
    setTimeout(() => {
      // Mock upload, you can replace this with your actual upload logic
      onSuccess();
    }, 1000);
  };

  const checkImageType = (file: any) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage;
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen relative">
      <Navbar />
      <Card
        title="Member Registration"
        className="w-[95%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[40%] text-lg shadow-md mt-16 border border-gray-200 z-50"
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your full name"
            />
          </Form.Item>

          <Form.Item label="Gender" name="gender" initialValue={gender}>
            <Radio.Group onChange={(e) => setGender(e.target.value)}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input type="tel" placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="emailAddress"
            rules={[
              { required: true, message: "Please enter your email address!" },
            ]}
          >
            <Input type="email" placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item label="JU entry year" name="entryYear">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Exit (graduation) year" name="graduationYear">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Field of Study"
            name="fieldOfStudy"
            rules={[
              { required: true, message: "Please enter your field of study!" },
            ]}
          >
            <Input placeholder="Enter your field of study" />
          </Form.Item>

          <Form.Item label="Level" name="graduationLevel">
            <Select placeholder="Select graduation level">
              <Option value="diploma">Diploma</Option>
              <Option value="undergraduate">Under graduate</Option>
              <Option value="masters">Masters</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Your role in JUAC when your were student"
            name="role"
            rules={[
              {
                required: true,
                message: "Please select role in JUAC when your were student!",
              },
            ]}
          >
            <Select placeholder="Select your current address">
              <Option value="Member">Member</Option>
              <Option value="fellow_leaders">Fellow leaders</Option>
              <Option value="leading_team_member">Leading team member</Option>
              <Option value="chorus_member">Chorus member</Option>
              <Option value="musician">Musician</Option>
              <Option value="other">Other (mention)</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="JUACU engagement center"
            name="JUACU_engagement_center"
            rules={[
              {
                required: true,
                message: "Please select JUACU engagement center!",
              },
            ]}
          >
            <Select placeholder="Select your current address">
              <Option value="addisAbaba">Addis Ababa and area</Option>
              <Option value="jimma">Jimma and area</Option>
              <Option value="wolaita">Wolaita soddo and area</Option>
              <Option value="hawassa">Hawassa and area</Option>
              <Option value="hossana">Hossana and area</Option>
              <Option value="adola">Adola and area</Option>
              <Option value="ambo">Ambo and area </Option>
              <Option value="north">North Ethiopia</Option>
              <Option value="east">East Ethiopia </Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Your Current Address (City)"
            name="currentAddress"
            rules={[
              {
                required: true,
                message: "Please Enter your current address!",
              },
            ]}
          >
            <Input placeholder="Enter your current address" />
          </Form.Item>

          <Form.Item
            label="Engagement in current local church"
            name="engagement"
            rules={[
              {
                required: true,
                message: "Please select Engagement in current local church",
              },
            ]}
          >
            <Select placeholder="Engagement in current local church">
              <Option value="pastor">Pastor</Option>
              <Option value="deacon">Deacon</Option>
              <Option value="youth/mothers/fathers_service">
                Youth/mothers/fathers service
              </Option>
              <Option value="board_member<">board member</Option>
              <Option value="Sunday_sermon_service_(ጉባኤ_አስተናጋጅ)">
                Sunday sermon sservice (ጉባኤ_አስተናጋጅ)
              </Option>
              <Option value="Other">Other service (mention)</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Annual membership contribution fee"
            name="engagementAgreement"
            rules={[
              {
                required: true,
                message: "Please agree to the engagement agreement!",
              },
            ]}
          >
            <Select placeholder="Annual membership contribution fee">
              <Option value="120">120 per year</Option>
              <Option value="600">600 per year</Option>
              <Option value="1200">1200 per year</Option>
              <Option value="2400">2400 per year</Option>
              <Option value="other">Other (specify)</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Payment period"
            name="paymentPeriod"
            rules={[
              {
                required: true,
                message: "Please select Payment period!",
              },
            ]}
          >
            <Select placeholder="Select contribution frequency">
              <Option value="everyMonth">Every month</Option>
              <Option value="everyQuarter">Every quarter</Option>
              <Option value="biannual">Biannual</Option>
              <Option value="fullPayment">Full payment at once</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Profile Image"
            name="profileImage"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: "Please upload your guiding document image",
              },
            ]}
          >
            <Upload
              customRequest={customRequest}
              showUploadList={false}
              beforeUpload={checkImageType}
            >
              <Button icon={<UploadOutlined />}>Upload Profile Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="signature"
            label="Signature (Name)"
            rules={[
              {
                required: true,
                message: "Please provide your signature (name)!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Checkbox onChange={handleTermsChange} checked={isTermsAccepted}>
              I have read and agree to the{" "}
              <a
                href="/terms-and-conditions"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Terms and Conditions
              </a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              htmlType="submit"
              className="w-full bg-blue-400 text-white hover:bg-blue-400"
              disabled={!isTermsAccepted}
            >
              Register
            </Button>
          </Form.Item>

          <Form.Item>
            <Link href="/login">
              <span className="block text-center text-blue-500">
                Back to Home
              </span>
            </Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterPage;
