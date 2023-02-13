import React, { createContext, useContext, useReducer, useRef } from "react";

const initialAttendance = {
  themeDark: true,
  members: [
    {
      id: 1,
      name: "taewang",
      nickname: "wang",
      description: "wangwang",
    },
    {
      id: 2,
      name: "ham",
      nickname: "hyemi",
      description: "hamham",
    },
    {
      id: 3,
      name: "gildong",
      nickname: "ddong",
      description: "dongdong",
    },
  ],
};

const AttendanceReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        themeDark: action.themeDark,
        members: state.members,
      };
    case "ADD_MEMBER":
      return {
        themeDark: state.themeDark,
        members: [...state.members, action.newMember],
      };
  }
};

const AttendanceStateContext = createContext();
const AttendanceDispatchContext = createContext();
const AttendanceNextIdContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AttendanceReducer, initialAttendance);
  const nextId = useRef(4);

  return (
    <AttendanceStateContext.Provider value={state}>
      <AttendanceDispatchContext.Provider value={dispatch}>
        <AttendanceNextIdContext.Provider value={nextId}>
          {children}
        </AttendanceNextIdContext.Provider>
      </AttendanceDispatchContext.Provider>
    </AttendanceStateContext.Provider>
  );
};

export const useAttendanceDispatch = () => {
  const context = useContext(AttendanceDispatchContext);
  return context;
};

export const useAttendanceState = () => {
  const context = useContext(AttendanceStateContext);
  return context;
};

export const useAttendanceNextId = () => {
  const context = useContext(AttendanceNextIdContext);
  return context;
};
