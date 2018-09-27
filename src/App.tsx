import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route } from "react-router-dom";
import { AttendanceBook } from "./AttendanceBook";

export const App: React.SFC = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path="/" component={AttendanceBook} />
      </div>
    </BrowserRouter>
  );
};
