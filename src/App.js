import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
// bg-alabaster
function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-alabaster"> 
      <div className="max-w-[700px] bg-white p-5 rounded-2xl">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
