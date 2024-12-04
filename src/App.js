import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
// bg-alabaster
function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-alabaster">
      <div className="h-full lg:h-auto lg:max-w-[1200px] lg:bg-white p-5 rounded-2xl flex">
        <Navbar />
        <div className="z-30 lg:z-auto flex items-start lg:items-stretch mt-20 lg:mt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
