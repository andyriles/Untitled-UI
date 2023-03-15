import React from "react";
import Download from "../../../assets/Icons/Download.svg";
import BillingTable from "./BillingTable";

const BillingHistory = () => {
  return (
    <div className="mb-2">
      <div className=" mt-10  w-full lg:flex lg:flex-row lg:justify-between ">
        <h3 className="text-xl font-bold">Billing history</h3>
        <button className="btn bg-base-100 text-black hover:bg-zinc-300 mt-5 lg:mt-0">
          <img src={Download} alt="download-icon" className="mr-3" />
          Download all
        </button>
      </div>
      <BillingTable />
    </div>
  );
};

export default BillingHistory;
