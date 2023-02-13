import React from "react";
import styled, { css } from "styled-components";
import {
  useAttendanceDispatch,
  useAttendanceState,
} from "../context/AttendContext";

const Head = () => {
  const state = useAttendanceState();
  const dispatch = useAttendanceDispatch();

  const theme = state.themeDark;

  const changeTheme = () => {
    dispatch({ type: "CHANGE_THEME", themeDark: !theme });
  };

  return (
    <StyledHeadWrap themeDark={theme}>
      <StyledTitle themeDark={theme}>Attendance</StyledTitle>
      <StyledModeButton themeDark={theme} onClick={changeTheme}>
        mode
      </StyledModeButton>
    </StyledHeadWrap>
  );
};

const StyledHeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
  z-index: 5;

  border-bottom: 1px solid #666;
  background-color: #fff
    ${(theme) =>
      theme.themeDark &&
      css`
        border-bottom: 1px solid #ddd;
        background-color: #1a1a1a;
      `};
`;
const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;

  color: #1a1a1a;
  ${(theme) =>
    theme.themeDark &&
    css`
      color: #fff;
    `}
`;
const StyledModeButton = styled.button`
  display: flex;
  align-items: center;
  height: 34px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  border: none;

  color: #fff;
  background-color: #1a1a1a;
  ${(theme) =>
    theme.themeDark &&
    css`
      color: #1a1a1a;
      background-color: #fff;
    `}
`;

export default Head;
