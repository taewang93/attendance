import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  useAttendanceDispatch,
  useAttendanceNextId,
  useAttendanceState,
} from "../context/AttendContext";

const AddMember = () => {
  const [addMemberWrap, setAddMemberWrap] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
  });

  const { name, description } = inputs;

  const dispatch = useAttendanceDispatch();
  const nextId = useAttendanceNextId();
  const state = useAttendanceState();
  const theme = state.themeDark;

  const toggleAddMember = () => {
    setAddMemberWrap((prev) => !prev);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const addMember = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_MEMBER",
      newMember: {
        id: nextId.current,
        name: inputs.name,
        description: inputs.description,
      },
    });
    setAddMemberWrap(false);
    setInputs({
      name: "",
      description: "",
    });
    nextId.current += 1;
  };

  return (
    <StyledWrap>
      <StyledInner addMemberWrap={addMemberWrap} themeDark={theme}>
        <StyledInputForm onSubmit={addMember}>
          <StyledInputBox>
            <StyledInput
              placeholder="name"
              name="name"
              onChange={onChange}
              value={name}
            ></StyledInput>
            <StyledTextArea
              placeholder="description"
              name="description"
              onChange={onChange}
              value={description}
            ></StyledTextArea>
          </StyledInputBox>
          <StyledButton>Add+</StyledButton>
        </StyledInputForm>
        <StyledArrButton onClick={toggleAddMember} themeDark={theme}>
          Add member
        </StyledArrButton>
      </StyledInner>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  position: relative;
`;
const StyledInner = styled.div`
  position: absolute;
  top: -194px;
  left: 0;
  width: 100%;
  background-color: #ddd;
  transition: top 0.6s;

  ${(theme) =>
    theme.themeDark &&
    css`
      background-color: #2c2c2c;
    `}

  ${(prop) =>
    prop.addMemberWrap &&
    css`
      top: 0;
    `}
`;
const StyledInputForm = styled.form`
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
`;
const StyledInputBox = styled.div`
  width: 100%;
`;
const StyledInput = styled.input`
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  height: 40px;
  margin-bottom: 5px;

  &:focus {
    outline: none;
    border-bottom: 2px solid #4c6286;
    box-shadow: 2px 2px 5px 1px rgba(90, 107, 145, 0.5);
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  height: 80px;
  margin-bottom: 5px;
  resize: none;

  &:focus {
    outline: none;
    border-bottom: 2px solid #4c6286;
    box-shadow: 2px 2px 5px 1px rgba(90, 107, 145, 0.5);
  }
`;
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  font-size: 16px;
  background-color: #1f3859;
  border-radius: 4px;
  color: #fff;
  border: none;
  box-sizing: border-box;
`;
const StyledArrButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  position: absolute;
  bottom: -40px;
  right: 20px;
  height: 40px;
  border-radius: 0 0 5px 5px;
  border: 0;
  background-color: #ddd;
  color: #1a1a1a;

  ${(theme) =>
    theme.themeDark &&
    css`
      background-color: #2c2c2c;
      color: #fff;
    `}
`;

export default AddMember;
