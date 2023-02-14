import React from "react";
import { Link, useParams } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import { useAttendanceState } from "../context/AttendContext";
import AddMember from "./Addmember";
import Head from "./Head";

const MemberDetail = () => {
  let { memberId } = useParams();

  const state = useAttendanceState();
  const members = state.members;
  const theme = state.themeDark;

  let member = members.filter(function (members) {
    return members.name == memberId;
  });
  const info = member[0];

  return (
    <>
      <GlobalStyle themeDark={theme} />
      <Head />
      <AddMember />
      <StyledDetailWrap>
        <StyledName themeDark={theme}>
          {info.name}
          <StyledNickname>({info.nickname})</StyledNickname>
        </StyledName>
        <StyledDescription themeDark={theme}>
          {info.description}
        </StyledDescription>
        <StyledButtonWrap>
          <StyledLink to={`/`}>
            <StyledLinkIn themeDark={theme}>List</StyledLinkIn>
          </StyledLink>
        </StyledButtonWrap>
      </StyledDetailWrap>
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
const StyledDetailWrap = styled.div`
  box-sizing: border-box;
  padding: 80px 20px 40px;
  width: 100%;
`;
const StyledName = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: #1a1a1a;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #666;

  ${(theme) =>
    theme.themeDark &&
    css`
      color: #fff;
    `}
`;
const StyledNickname = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
const StyledDescription = styled.p`
  margin: 0;

  color: #1a1a1a;
  ${(theme) =>
    theme.themeDark &&
    css`
      color: #fff;
    `};
`;
const StyledButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  margin-top: 10px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledLinkIn = styled.span`
  display: flex;
  align-items: center;
  height: 34px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  padding: 0 15px;

  color: #fff;
  background-color: #1a1a1a;
  ${(theme) =>
    theme.themeDark &&
    css`
      color: #1a1a1a;
      background-color: #fff;
    `}
`;

export default MemberDetail;
