import React from "react";
import Mail from "../../assets/Icons/Mail.svg";

const EmailForm = () => {
  return (
    <div className="lg:flex lg:flex-row w-15/16 ">
      <div className="lg:w-2/5">
        <p className="font-bold">Contact Email</p>
        <p>Where should the form be sent?</p>
      </div>
      <div className="mt-10 lg:w-full lg:mt-0">
        <div className="flex flex-row">
          <input
            type="radio"
            name="radio-3"
            className="radio radio-primary w-4 h-4 mr-2 mt-1"
          />
          <div>
            <div>
              <p className="font-bold">Send to my account email</p>
              <p>olivia@untitledui.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <input
            type="radio"
            name="radio-3"
            className="radio radio-primary w-4 h-4 mr-2 mt-1"
          />
          <div>
            <p className="font-bold">Send to alternate email</p>
            <div className="input-group border-2 border-grey-200 lg:w-96 mt-5 rounded-lg ">
              <button className="btn btn-square bg-white border-none hover:bg-zinc-300">
                <img src={Mail} alt="mail-Icon" />
              </button>
              <input
                type={"email"}
                placeholder="billing@untitledui/com"
                className="w-full p-1 focus:bg-gray-200 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
