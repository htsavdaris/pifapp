import { useState } from "react";
import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import UserList from "./components/feautures/user/userlist";
import UserForm from "./components/feautures/user/userForm";
import Home from "./components/feautures/Home";
import MonthlyDataForm from "./components/feautures/monthData/MonthlyDataForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* <Route path="/" element={<Home />}/>  */}
          <Route path="/Home" element={<Home />}/>
          <Route path="/Users" element={<UserList />} />
          <Route path="/user" element={<UserForm />} />
          <Route path="/monthly" element={<MonthlyDataForm />} />
        </Route>
      </Routes>      
    </>
  );
}

export default App;
