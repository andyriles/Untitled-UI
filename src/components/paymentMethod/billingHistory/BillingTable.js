import React, { useState } from "react";
import Download from "../../../assets/Icons/Download.svg";
import Paid from "../../../assets/Icons/Paid.svg";
import newBillingHistoryData from "./BillingHistoryData";

const headers = ["Invoice", "Amount", "Date", "Status", "Users on plan", ""];

//console.log(billingHistoryData);
function BillingTable() {
  const [historyData, setHistoryData] = useState([...newBillingHistoryData]);

  const handleChange = (id) => {
    const ndata = historyData.map((data) => {
      if (data.id === id) {
        data.selected = !data.selected;
      }
      return data;
    });
    setHistoryData(ndata);
  };

  const handleSelectAll = (checked) => {
    console.log(checked);
    const ndata = historyData.map((data) => {
      if (checked) {
        data.selected = true;
      } else {
        data.selected = false;
      }
      return data;
    });
    setHistoryData(ndata);
  };

  return (
    <div className="overflow-x-auto mt-7 ">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th className="bg-zinc-200">
              <label>
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary rounded-md  w-5 h-5 mt-1 "
                  //checked={historyData.every((item) => item.selected === true)}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </label>
            </th>
            {headers.map((header, i) => {
              return (
                <th className="bg-zinc-200 capitalize" key={i}>
                  {header}
                </th>
              );
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((data) => {
            return (
              <tr key={data.id}>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary w-5 h-5 mt-1"
                      checked={data.selected}
                      onChange={() => handleChange(data.id)}
                    />
                  </label>
                </th>
                <td>
                  <p className="mr-24">{data.invoice}</p>
                </td>
                <td>{data.amount}</td>
                <td>{data.date}</td>
                <td>
                  <img src={Paid} alt="paid-badge" />
                </td>
                <td>{data.users}</td>
                <td>
                  <img src={Download} alt="download-icon" className="mr-3" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BillingTable;
