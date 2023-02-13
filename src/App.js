import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendanceProvider } from "./context/AttendContext";
import Attendance from "./Attendance";

function App() {
  return (
    <AttendanceProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Attendance />} />
        </Routes>
      </BrowserRouter>
    </AttendanceProvider>
  );
}

export default App;
