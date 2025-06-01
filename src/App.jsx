import { Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Landing from "./pages/Landing";
import Analytics from "./pages/Analytics";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App(){
  return(
    <div className="relative w-full">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="tasks" element={<Tasks/>}/>
        <Route path="analytics" element={<Analytics/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </div>
  )
}