import React from "react";

const HorizontalMenu = () => {
  return (
    <div className="w-full overflow-x-scroll lg:overflow-auto ">
      <ul className="menu menu-horizontal bg-base-100 rounded-md mt-5 border-2 cursor-pointer ">
        <li className="px-4 py-2 hover:bg-zinc-300 border-r-2 sm:border-b-2">
          My Details
        </li>
        <li className="px-4 py-2 hover:bg-zinc-300 border-r-2 border-b-2">
          Profile
        </li>
        <li className="px-4 py-2 hover:bg-zinc-300 ">Password</li>
        <li className="px-4 py-2 hover:bg-zinc-300 border-r-2">Team</li>
        <li className="px-4 py-2 hover:bg-zinc-300 ">Plan</li>
        <li className="px-4 py-2 hover:bg-zinc-300 border-r-2">Billing</li>
        <li className="px-4 py-2 hover:bg-zinc-300">Notifications</li>
        <li className="px-4 py-2 hover:bg-zinc-300 border-x-2">Integrations</li>
        <li className="px-4 py-2 hover:bg-zinc-300 ">API</li>
      </ul>
    </div>
  );
};

export default HorizontalMenu;
