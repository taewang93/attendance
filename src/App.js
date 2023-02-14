import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendanceProvider } from "./context/AttendContext";
import Attendance from "./Attendance";
import MemberDetail from "./components/MemberDetail";

function App() {
  return (
    <AttendanceProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Attendance />} />
          <Route path="/member_detail/:memberId" element={<MemberDetail />} />
        </Routes>
      </BrowserRouter>
    </AttendanceProvider>
  );
}

export default App;
