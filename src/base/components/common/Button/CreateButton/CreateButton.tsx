import { useState } from "react";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Space } from "antd";
import { CreateButtonProps } from "./CreateButtonProps";
import DefaultDrawer from "../../DefaultDrawer/DefaultDrawer";

const CreateButton = (props: CreateButtonProps) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const onClose = () => {
    setOpenDrawer(false);
    props.drawerProps?.onDrawerClose?.();
  };

  return (
    <>
      <Button
        icon={<PlusOutlined />}
        size="small"
        type="primary"
        ghost
        onClick={() => {
          props.onClick?.();
          setOpenDrawer(true);
        }}
      >
        Create
      </Button>

      <DefaultDrawer
        autoFocus
        maskClosable={false}
        open={openDrawer}
        onClose={onClose}
        extra={
          <Space>
            <Button
              size="small"
              type="default"
              htmlType="reset"
              form="saveForm"
              danger
            >
              Clear
            </Button>
            <Button
              size="small"
              type="primary"
              htmlType="submit"
              form="saveForm"
            >
              Submit
            </Button>
          </Space>
        }
        headerStyle={{ fontWeight: "bold" }}
        drawerStyle={{ animation: "ease-in-out" }}
        closeIcon={<CloseCircleOutlined style={{ color: "red" }} />}
        {...props.drawerProps}
      >
        <Form
          id="saveForm"
          layout="horizontal"
          onFinish={() => alert("finish")}
          onFinishFailed={() => alert("finish failed")}
          autoComplete="off"
        >
          {props.children}
        </Form>
      </DefaultDrawer>
    </>
  );
};

export default CreateButton;
