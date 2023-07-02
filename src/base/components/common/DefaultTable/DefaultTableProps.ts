import { TableProps } from "antd";
import { SimpleCardProps } from "../SimpleCard/SimpleCardProps";

export interface DefaultTableProps<T> extends Omit<TableProps<T>, "size"> {
  simpleCardProps?: SimpleCardProps;
}
