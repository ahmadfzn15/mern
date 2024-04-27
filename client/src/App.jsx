import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Setting from "./Pages/Setting/Setting";
import Profile from "./Pages/Profile";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Employee from "./Pages/Employee";
import Salary from "./Pages/Salary";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/employee/salary" element={<Salary />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
        </Routes>
      </Router>
    </>
  );
}
