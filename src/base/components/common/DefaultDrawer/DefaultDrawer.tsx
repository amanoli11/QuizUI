import { Drawer } from "antd";
import { DefaultDrawerProps } from "./DefaultDrawerProps";

const DefaultDrawer = (props: DefaultDrawerProps) => {
  return (
    <Drawer
      destroyOnClose
      maskStyle={{ backdropFilter: "blur(1px)" }}
      width={props.width ?? 500}
      {...props}
    />
  );
};

export default DefaultDrawer;
