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
  message,
} from "antd";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";

const { Option } = Select;

const RegisterPage: React.FC = () => {
  const [form] = Form.useForm();
  const [gender, setGender] = useState("male"); // Default gender value

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    message.success("Successfully registered. Thank you!");
    form.resetFields();
  };

  return (
    <div className="flex items-start justify-center h-screen bg-gradient-to-br from-blue-200 via-transparent to-blue-50">
      <Card
        title="Member Registration"
        className="w-[40%] shadow-md mt-10 border border-gray-200"
      >
        <p className="text-gray-700 mb-5">
          ይህ ፎርም የተዘጋጀው የጂማ ዩንቨርስቲ ሐዋርያዊት ቤ/ክርስቲያን የቀድሞ ተማሪዎች እና አሁን ያሉ ተማሪዎች
          ሕብረት በማጠናከር የተማሪዎችን ሕብረት ማጠናከር እና ሰበካውን ለመደገፍ እንድያስችል መረጃ በመሰብሰብ ማድራጅት
          ነው። በተጨማሪም ባለፈው ዓመት በተከናወነው የህብረት ኮንፈረን ላይ እና በአካባቢዎ በተደረገው ውይይት መሠረት
          የያዝናቸውን ዓላማዎችን ለማስፈጸም ነው።
        </p>
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
          <Form.Item
            label="First Level of Graduation From JU"
            name="graduationLevel"
          >
            <Select placeholder="Select graduation level">
              <Option value="diploma">Diploma</Option>
              <Option value="undergraduate">Undergraduate</Option>
              <Option value="masters">Masters</Option>
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
            <Select placeholder="Select your current address">
              <Option value="addisAbaba">Addis Ababa</Option>
              <Option value="hawasa">Hawasa</Option>
              <Option value="adama">Adama</Option>
              <Option value="hossana">Hossana</Option>
              <Option value="sodo">Sodo</Option>
              <Option value="direDawa">DireDawa</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Current Local Church Name"
            name="currentChurchName"
            rules={[
              {
                required: true,
                message: "Please enter your current church name!",
              },
            ]}
          >
            <Input placeholder="Enter your current church name" />
          </Form.Item>

          <Form.Item
            label="Do You Have a Service at Your Current Local Church?"
            name="hasService"
            rules={[
              {
                required: true,
                message: "Please select whether you have a service!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Students In JU organized fellowship conference on May 2023. Some of the former students participated in the conference and decided to strengthen the fellowship, support the church and planned to conduct conference in near future. Do you agree to engaged in the mentioned program above?"
            name="engagementAgreement"
            rules={[
              {
                required: true,
                message: "Please agree to the engagement agreement!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
              <Radio value="maybe">Maybe</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="To support the JU local church and strengthen the fellowship its proposed to contribute the following amount of money. A. 600 per member per year 
                                  B. 1200 per member per year
                                  C. As per capacity do not limit
                                  D. 2400 per member per year (for                                                diaspora member)
                                  E. 120 per year (for students)
Which one do you prefer to contribute?"
            name="engagementAgreement"
            rules={[
              {
                required: true,
                message: "Please agree to the engagement agreement!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="600">600 per year</Radio>
              <Radio value="1200">1200 per year</Radio>
              <Radio value="notLimit">Do not limit (but I can support)</Radio>
              <Radio value="1200">2400 per year (diaspora)</Radio>
              <Radio value="notLimit">120 per year (for students)</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="How frequent can you pay your contribution?"
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

          <Form.Item
            label="Do you want some one to remind you for contribution?"
            name="remindForContribution"
            rules={[
              {
                required: true,
                message: "Please select whether you want to be reminded!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Your Phone Number"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input type="tel" placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item
            label="Your Email Address"
            name="emailAddress"
            rules={[
              { required: true, message: "Please enter your email address!" },
            ]}
          >
            <Input type="email" placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item
            label="Do you think you can participate in the conference organized by JUAS fellowship In Jima in near future?"
            name="participationInConference"
            rules={[
              {
                required: true,
                message: "Please select your participation status!",
              },
            ]}
          >
            <Select placeholder="Select participation status">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
              <Option value="maybe">Maybe</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="If you have any question (contact Misganaw AA 0910596020, Tigabu AA 0916396011, Eyosias Israel 0912458178, Misganaw Hossana, Gizachew 0921005117, Mihiret Tesfaye 0928799197"
            name="questionsContactConfirmation"
            rules={[
              { required: true, message: "Please confirm your awareness!" },
            ]}
          >
            <Radio.Group>
              <Radio value="noted">Yes Noted</Radio>
            </Radio.Group>
          </Form.Item>

          {/* <Form.Item
            label="Account Number for Contribution"
            name="accountNumberConfirmation"
            rules={[
              { required: true, message: "Please confirm your awareness!" },
            ]}
          >
            <Radio.Group>
              <Radio value="noted">Noted</Radio>
            </Radio.Group>
          </Form.Item> */}

          <Form.Item
            label="Account number created for this mission and Bishop Zekios already agreed and aware of the program and the account number is 1000579788686 Apostolic church of Ethiopia JS fellowship. "
            name="notificationForContribution"
            rules={[
              { required: true, message: "Please confirm your awareness!" },
            ]}
          >
            <Radio.Group>
              <Radio value="ok">Noted</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Confirm as if you filled all the questions and aware of above purpose"
            name="awarenessConfirmation"
            rules={[
              {
                required: true,
                message: "Please confirm your awareness and agreement!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="awareAndAgree">Aware and agree</Radio>
              <Radio value="needExplanation">Need further explanation</Radio>
              <Radio value="decideLater">Will decide later</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              htmlType="submit"
              className="w-full bg-blue-400 text-white hover:bg-blue-500"
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
