import { Input, Form } from "antd";

const CreateQuestion = () => {
  return (
    <>
      <Form.Item
        label="Course"
        name="course"
        rules={[{ required: true, message: "Course is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Question"
        name="question"
        rules={[{ required: true, message: "Question is required" }]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default CreateQuestion;
