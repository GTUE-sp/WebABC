// tslint:disable:max-classes-per-file
import React from "react";
import { Table } from "antd";
import "antd/lib/table/style/css";
import { ColumnProps } from "antd/lib/table";

export interface Student {
  key: number;
  name: string;
}

class AttendanceBookTable extends Table<Student> {}

export class AttendanceBook extends React.Component<{}, {}> {
  private columns: Array<ColumnProps<Student>> = [
    {
      key: "name",
      title: "名前",
      dataIndex: "name",
      fixed: "left",
      width: 200
    },
    {
      key: "period",
      title: "時限",
      children: [
        {
          key: "period1",
          title: "1",
          width: 100
        },
        {
          key: "period2",
          title: "2",
          width: 100
        },
        {
          key: "period3",
          title: "3",
          width: 100
        },
        {
          key: "period4",
          title: "4",
          width: 100
        },
        {
          key: "period5",
          title: "5",
          width: 50
        },
        {
          key: "period6",
          title: "6",
          width: 100
        },
        {
          key: "period7",
          title: "7",
          width: 100
        },
        {
          key: "period8",
          title: "8",
          width: 100
        }
      ]
    }
  ];

  private data: Student[] = [];

  constructor(props: {}) {
    super(props);
    for (let i = 1; i < 53; i++) {
      this.data.push({
        key: i,
        name: "キズナアイ"
      });
    }
  }
  public render() {
    return (
      <AttendanceBookTable
        dataSource={this.data}
        columns={this.columns}
        bordered={true}
        pagination={false}
        scroll={{ x: 1000 }}
      />
    );
  }
}
