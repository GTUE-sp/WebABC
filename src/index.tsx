//tslint:disable
//import "antd/dist/antd.css";
import React from "react";
import { render } from "react-dom";
import { Table } from "antd";
import { hot } from "react-hot-loader";
const columns = [
  {
    title: "指名",
    dataIndex: "name",
    key: "name",
    width: 100,
    fixed: "left"
  },
  {
    title: "Other",
    children: [
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 200,
        sorter: (a: any, b: any) => a.age - b.age
      },
      {
        title: "Address",
        children: [
          {
            title: "Street",
            dataIndex: "street",
            key: "street",
            width: 200
          },
          {
            title: "Block",
            children: [
              {
                title: "Building",
                dataIndex: "building",
                key: "building",
                width: 100
              },
              {
                title: "Door No.",
                dataIndex: "number",
                key: "number",
                width: 100
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Company",
    children: [
      {
        title: "Company Address",
        dataIndex: "companyAddress",
        key: "companyAddress"
      },
      {
        title: "Company Name",
        dataIndex: "companyName",
        key: "companyName"
      }
    ]
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 80,
    fixed: "right"
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: i + 1,
    street: "Lake Park",
    building: "C",
    number: 2035,
    companyAddress: "Lake Street 42",
    companyName: "SoftLake Co",
    gender: "M"
  });
}
// <Table columns={columns} dataSource={data} bordered size="middle" scroll={{ x: "130%", y: 240 }} />

const App = () => {
  return <div>Hello World!</div>
};

render(hot(module)(App);, document.getElementById("root"));
