import { DrawerProps } from "antd";

interface CustomDrawerProps extends DrawerProps {
  onDrawerClose?: () => void;
}

export interface CreateButtonProps {
  onClick?: () => void;
  children: any;
  drawerProps?: CustomDrawerProps;
}
