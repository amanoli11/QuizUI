import { useState } from "react";
import { ColumnsType } from "antd/es/table";
import DefaultTable from "../../base/components/common/DefaultTable/DefaultTable";
import CreateButton from "../../base/components/common/Button/CreateButton/CreateButton";
import CreateQuestion from "./CreateQuestion";

const Question = () => {
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
  ];

  return (
    <>
      <DefaultTable
        columns={columns}
        dataSource={data}
        simpleCardProps={{
          title: "Question",
          extra: (
            <CreateButton
              drawerProps={{ title: "Create Question" }}
              children={<CreateQuestion />}
            />
          ),
        }}
      />
    </>
  );
};

export default Question;
