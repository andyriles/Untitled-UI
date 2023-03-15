import React from "react";
import BillingHistory from "./billingHistory/BillingHistory";
import Header from "./Header";
import HorizontalMenu from "./HorizontalMenu";
import PaymentMethodForm from "./PaymentMethodForm";

function PaymentMethod() {
  return (
    <div className="ml-5 mt-5 lg:mt-0 w-11/12">
      <Header />
      <HorizontalMenu />
      <PaymentMethodForm />
      <BillingHistory />
    </div>
  );
}

export default PaymentMethod;
