import React from "react";
import { createGlobalStyle, css } from "styled-components";
import AddMember from "./components/Addmember";
import Head from "./components/Head";
import MemberList from "./components/MemberList";
import { useAttendanceState } from "./context/AttendContext";

const Attendance = () => {
  const state = useAttendanceState();

  const theme = state.themeDark;

  return (
    <>
      <GlobalStyle themeDark={theme} />
      <Head />
      <AddMember />
      <MemberList />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body{
    background-color:#fff;
    padding:0;
    margin:0;

    ${(theme) =>
      theme.themeDark &&
      css`
        background-color: #1a1a1a;
      `}
  }
`;

export default Attendance;
