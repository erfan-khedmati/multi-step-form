import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
// bg-alabaster
function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-alabaster">
      <div className="w-full h-full lg:max-w-[1200px] lg:h-auto bg-white p-5 rounded-2xl flex">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
