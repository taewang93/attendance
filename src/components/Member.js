import React from "react";
import styled, { css } from "styled-components";
import { useAttendanceState } from "../context/AttendContext";

const Member = ({ id, name, description }) => {
  const state = useAttendanceState();
  const theme = state.themeDark;

  return (
    <StyledMemberBox>
      <StyledName themeDark={theme}>{name}</StyledName>
      <StyledDec>{description}</StyledDec>
    </StyledMemberBox>
  );
};

const StyledMemberBox = styled.div`
  margin: 0;
  margin-bottom: 20px;
`;
const StyledName = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin: 0;

  color: #1a1a1a;
  ${(theme) =>
    theme.themeDark &&
    css`
      color: #fff;
    `}
`;
const StyledDec = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;

export default Member;
