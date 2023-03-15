import React from "react";
import CardForm from "./CardForm";
import EmailForm from "./EmailForm";

const PaymentMethodForm = () => {
  return (
    <div className="lg:mt-10 mt-10">
      <h1 className="text-xl font-bold">Payment Method</h1>
      <h3 className="mt-5">Update your billing details and address</h3>
      <div className="divider"></div>
      <EmailForm />
      <div className="divider"></div>
      <CardForm />
    </div>
  );
};

export default PaymentMethodForm;
