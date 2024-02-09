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

const { Option } = Select;

const RegisterPage: React.FC = () => {
  const [form] = Form.useForm();
  const [gender, setGender] = useState("male"); // Default gender value
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    message.success("Successfully registered. Thank you!");
    form.resetFields();
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

  const checkImageType = (file: any) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage;
  };

  const customRequest = ({ file, onSuccess, onError }: any) => {
    setTimeout(() => {
      // Mock upload, you can replace this with your actual upload logic
      onSuccess();
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen relative">
      <div className="absolute w-full h-full bg-blue-200"></div>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(45deg, transparent 49.5%, #blue-50 49.5%, #blue-50 50.5%, transparent 50.5%)",
        }}
      ></div>
      <Navbar />
      <Card
        title="Member Registration"
        className="w-[95%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[40%] shadow-md mt-16 border border-gray-200"
      >
        {/* <p className="text-gray-700 mb-5">
          ይህ ፎርም የተዘጋጀው የጂማ ዩንቨርስቲ ሐዋርያዊት ቤ/ክርስቲያን የቀድሞ ተማሪዎች እና አሁን ያሉ ተማሪዎች
          ሕብረት በማጠናከር የተማሪዎችን ሕብረት ማጠናከር እና ሰበካውን ለመደገፍ እንድያስችል መረጃ በመሰብሰብ ማድራጅት
          ነው። በተጨማሪም ባለፈው ዓመት በተከናወነው የህብረት ኮንፈረን ላይ እና በአካባቢዎ በተደረገው ውይይት መሠረት
          የያዝናቸውን ዓላማዎችን ለማስፈጸም ነው።
        </p> */}
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

          <Form.Item label="Graduation Year From" name="graduationYear">
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
              <Option value="undergraduate">Undergraduate</Option>
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
              <Option value="adama">Adama</Option>
              <Option value="hossana">Hossana and area</Option>
              <Option value="adola">Adola and area</Option>
              <Option value="ambo">Ambo and area </Option>
              <Option value="north">North</Option>
              <Option value="east">East Ethiopia </Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Your Current Address (City)"
            name="currentAddress"
            rules={[
              {
                required: true,
                message: "Please select your current address!",
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
              <Option value="600">600 per year</Option>
              <Option value="1200">1200 per year</Option>
              <Option value="notLimit">Do not limit (but I can support)</Option>
              <Option value="1200">2400 per year (diaspora)</Option>
              <Option value="notLimit">120 per year (for students)</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Payment period "
            name="contributionFrequency"
            rules={[
              {
                required: true,
                message: "Please select your contribution frequency!",
              },
            ]}
          >
            <Select placeholder="Select contribution frequency">
              <Option value="onceAYear">Once A Year</Option>
              <Option value="everySixMonths">
                Every six months (twice a year)
              </Option>
              <Option value="everyThreeMonths">
                Every three months (4 times a year)
              </Option>
              <Option value="everyMonth">Every Month</Option>
            </Select>
          </Form.Item>

          {/* <Form.Item
            name="guidingDocument"
            label="Guiding Document (photo)"
            rules={[
              {
                required: true,
                message: "Please upload the guiding document!",
              },
            ]}
          >
            <Input type="file" />
          </Form.Item> */}
          <Form.Item
            label="Guiding Document Image"
            name="guidingDocumentImage"
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
              <Button icon={<UploadOutlined />}>Upload Image</Button>
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
              Agreement on guiding document
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              htmlType="submit"
              className="w-full bg-blue-400 text-white hover:bg-blue-500"
              disabled={!isTermsAccepted}
            >
              Register
            </Button>
          </Form.Item>

          <Form.Item>
            <Link href="/Login">
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
