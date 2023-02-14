import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  useAttendanceDispatch,
  useAttendanceState,
} from "../context/AttendContext";

const Member = ({ id, name, nickname }) => {
  const dispatch = useAttendanceDispatch();
  const state = useAttendanceState();
  const theme = state.themeDark;

  const deleteMember = () => {
    dispatch({ type: "DELETE_MEMBER", id });
  };

  return (
    <StyledMemberBox>
      <StyledLink to={`./member_detail/${name}`}>
        <StyledName themeDark={theme}>
          {name}
          <StyledNickname>({nickname})</StyledNickname>
        </StyledName>
      </StyledLink>
      <StyledButton themeDark={theme} onClick={deleteMember}>
        Delete
      </StyledButton>
    </StyledMemberBox>
  );
};

const StyledMemberBox = styled.div`
  margin: 0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
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
const StyledNickname = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 12px;
  border-radius: 4px;
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

export default Member;
