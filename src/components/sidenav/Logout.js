import React from "react";
import LogoutIcon from "../../assets/Icons/Button.svg";
import Avatar from "../../assets/Images/Avatar.svg";

function Logout() {
  return (
    <div>
      <div className="avatar float float-row justify-between mt-8">
        <div className="w-10 h-10 rounded-full mr-2">
          <img alt="profile-pic" src={Avatar} />
        </div>
        <div className="text-xs">
          <p className="font-bold">Olivia Rhye</p>
          <p>olivia@untitledui.com</p>
        </div>
        <div className="w-10 h-10 mr-2 cursor-pointer hover:bg-zinc-300 ">
          <img alt="logoutIcon" src={LogoutIcon} />
        </div>
      </div>
    </div>
  );
}

export default Logout;
