import React from "react";
import styled from "styled-components";
import { useAttendanceState } from "../context/AttendContext";
import Member from "./Member";

const MemberList = () => {
  const state = useAttendanceState();
  const members = state.members;

  return (
    <StyledMemberListWrap>
      {members &&
        members.map((member) => (
          <Member
            key={member.id}
            id={member.id}
            name={member.name}
            nickname={member.nickname}
          />
        ))}
    </StyledMemberListWrap>
  );
};

const StyledMemberListWrap = styled.div`
  padding: 80px 20px 40px;
`;

export default MemberList;
