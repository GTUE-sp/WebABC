import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route } from "react-router-dom";
//import { AttendanceBook } from "./AttendanceBook";
import { AppBar, Button, Input, Switch, Toolbar, Typography } from "@material-ui/core";
import { AttendanceBook } from "./AttendanceBook";
/**
 * <BrowserRouter>
      <div>
        <Route exact={true} path="/" component={AttendanceBook} />
      </div>
    </BrowserRouter>
 */
export const App: React.SFC = () => {
  return (
    <div>
      <AppBar position={"static"}>
        <Toolbar>
          <Typography variant={"title"} color={"inherit"}>
            Web出席簿
          </Typography>
        </Toolbar>
      </AppBar>
      <AttendanceBook />
    </div>
  );
};
