import React from "react";
import Logout from "./Logout";
import NewFeatures from "./NewFeatures";
import SearchInput from "./SearchInput";
import Home from "../../assets/Icons/home.svg";
import Dashboard from "../../assets/Icons/bar-chart-2.svg";
import Projects from "../../assets/Icons/3-layers.svg";
import Tasks from "../../assets/Icons/check-square.svg";
import Reporting from "../../assets/Icons/flag.svg";
import Users from "../../assets/Icons/users.svg";
import Logo from "../../assets/Icons/Logomark.svg";
import NavMenu from "../../assets/Icons/Nav-Menu.svg";
import Support from "../../assets/Icons/life-buoy.svg";
import Settings from "../../assets/Icons/settings.svg";
//import Actions from "../../assets/Icons/Actions.svg";

function Sidenav({ children }) {
  return (
    <div className="drawer drawer-mobile  ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col lg:mt-10 lg:scrollbar-hide">
        <div className="flex justify-between bg-white pb-5 lg:pb-0">
          <div className="flex cursor-pointer ml-5 lg:hidden">
            <img src={Logo} className="h-10" alt="logo" />
            <h1 className="text-2xl font-bold ml-1 mt-1">Untitled UI</h1>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="mr-5 cursor-pointer drawer-button lg:hidden"
          >
            <img src={NavMenu} alt="NavMenu" />
          </label>
        </div>
        <div>{children}</div>
      </div>
      <div className="drawer-side scollbar-hide">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
          <div className="flex flex-row cursor-pointer mt-5">
            <img src={Logo} className="h-10" alt="logo" />
            <h1 className="text-2xl font-bold ml-1 mt-1">Untitled UI</h1>
          </div>
          <SearchInput />
          <li className="text-md mb-2">
            <span className="mt-2">
              <img src={Home} alt="home" />
              Home
            </span>
          </li>
          <li className="text-md mb-2 ">
            <span className="-mt-2">
              <img src={Dashboard} alt="Dashboard" />
              Dashboard
              <span className="badge ml-5">10</span>
            </span>
          </li>
          <li className="text-md mb-2 ">
            <span className="-mt-2">
              <img src={Projects} alt="Projects" />
              Projects
            </span>
          </li>
          <li className="text-md mb-2 ">
            <span className="-mt-2">
              <img src={Tasks} alt="Tasks" />
              Tasks
            </span>
          </li>
          <li className="text-md mb-2 ">
            <span className="-mt-2">
              <img src={Reporting} alt="Reporting" />
              Reporting
            </span>
          </li>
          <li className="text-lg mb-2">
            <span className="-mt-2">
              <img src={Users} alt="Users" />
              Users
            </span>
          </li>
          <li className="text-md mb-2">
            <span className="-mt-2">
              <img src={Support} alt="Support" />
              Support
            </span>
          </li>
          <li className="text-md mb-2">
            <span className="-mt-2">
              <img src={Settings} alt="Settings" />
              Settings
            </span>
          </li>
          <div className="hidden lg:block">
            <NewFeatures />
          </div>
          <Logout />
        </ul>
      </div>
    </div>
  );
}

export default Sidenav;
