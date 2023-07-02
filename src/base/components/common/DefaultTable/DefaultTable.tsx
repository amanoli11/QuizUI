import { Table } from "antd";
import { DefaultTableProps } from "./DefaultTableProps";
import SimpleCard from "../SimpleCard/SimpleCard";

const DefaultTable = <T extends object>(props: DefaultTableProps<T>) => {
  return (
    <SimpleCard {...props.simpleCardProps}>
      <Table size="small" {...props} />
    </SimpleCard>
  );
};

export default DefaultTable;
