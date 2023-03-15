import React, { useState } from "react";
import Visa from "../../assets/Icons/visa-logo.svg";
import Mastercard from "../../assets/Icons/Mastercard.svg";
import Add from "../../assets/Icons/Add.svg";

const cards = [
  {
    id: 1,
    src: Visa,
    ending: "1234",
    expiry: "06/24",
  },
  {
    id: 2,
    src: Mastercard,
    ending: "1234",
    expiry: "06/24",
  },
];

const CardForm = () => {
  const [selected, setselected] = useState(1);
  return (
    <div className="lg:flex lg:flex-row lg:w-auto">
      <div className=" lg:w-2/5">
        <p className="font-bold">Card details</p>
        <p>Select default payment method:</p>
      </div>
      <div className="lg:w-full mt-10 lg:mt-0">
        {cards.map((card) => {
          return (
            <div
              className={`flex flex-row justify-between border-2 rounded-md mb-2 p-2  ${
                selected === card.id
                  ? "bg-purple-100 border-purple-300"
                  : "bg-white"
              }`}
              key={card.id}
            >
              <div className="flex flex-row">
                <div className="mt-2 mr-5">
                  <img src={card.src} alt="card-logo" />
                </div>
                <div>
                  <p className="font-bold">Visa ending in {card.ending}</p>
                  <p>Expiry {card.expiry}</p>
                  <div className="mt-2">
                    <span className="link link-hover mr-3">Set as default</span>
                    <span className="link link-hover text-indigo-500">
                      Edit
                    </span>
                  </div>
                </div>
              </div>
              <div className="float-right ">
                <input
                  type="radio"
                  name="radio-2"
                  className="radio radio-primary w-4 h-4 mr-2 mt-1"
                  checked={selected === card.id}
                  onChange={() => {}}
                  onClick={() => setselected(card.id)}
                />
              </div>
            </div>
          );
        })}
        <div className="flex flex-row mt-5 cursor-pointer ">
          <img src={Add} alt="add-icon" className="mr-2" />
          <p>Add new payment method</p>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
