// tslint:disable:max-classes-per-file
import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import "./main.css";
const styles = (theme: Theme) => {
  return createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    head: {
      backgroundColor: "#fff",
      position: "sticky",
      top: 0
    },
    table: {
      display: "block",
      position: "relative"
    }
  });
};

interface Student {
  id: number;
  name: string;
  status: number[];
}

interface Subject {
  teacher: string;
  name: string;
}

type AttendanceBookProps = {}; //WithStyles<typeof styles>;
export class AttendanceBook extends React.Component<AttendanceBookProps, {}> {
  private homeroomTeacher = "佐藤";
  private subjects: Subject[] = [
    {
      teacher: "マルケス",
      name: "英語"
    },
    {
      teacher: "宮田",
      name: "信号処理"
    },
    {
      teacher: "高野",
      name: "体育"
    }
  ];
  private students: Student[] = [
    {
      id: 1,
      name: "青山 采未",
      status: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 1,
      name: "青山 采未",
      status: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ];
  constructor(props: AttendanceBookProps) {
    super(props);
    console.log(props);
  }
  public render() {
    const period: JSX.Element[] = [];
    for (let i = 1; i <= this.subjects.length * 2; i++) {
      period.push(<td>{i}</td>);
    }
    const subjects: JSX.Element[] = [];
    for (const subject of this.subjects) {
      subjects.push(
        <td colSpan={2}>
          <p className="name">{subject.name}</p>
        </td>
      );
    }
    const teachers: JSX.Element[] = [];
    for (const subject of this.subjects) {
      teachers.push(
        <td colSpan={2}>
          <p className="name">{subject.teacher}</p>
        </td>
      );
    }

    const students: JSX.Element[] = [];
    for (const student of this.students) {
      students.push(
        <tr>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>欠</td>
          <td>備</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      );
    }
    return (
      <div style={{ height: "100vh", width: "100vw", overflowY: "scroll", position: "fixed" }}>
        <table
          ref={(ref) => {
            if (ref !== null) {
              ref.border = "1";
            }
          }}
        >
          <thead>
            <tr>
              <td rowSpan={3} colSpan={4} />
              <td />
              {period}
            </tr>
            <tr>
              <td>
                <p className="name">HR</p>
              </td>
              {subjects}
            </tr>
            <tr>
              <td>
                <p className="name">{this.homeroomTeacher}</p>
              </td>
              {teachers}
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
      </div>
    );
  }
}
export default AttendanceBook;
//export default withStyles(styles)(AttendanceBook);
