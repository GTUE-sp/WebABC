import * as React from "react";
import { Table } from "antd";
import "antd/lib/table/style/css";
export interface IUser {
  key: number;
  name: string;
}

export class AttendanceBookTable extends Table<IUser> {}
