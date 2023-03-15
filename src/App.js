import "./App.css";
import PaymentMethod from "./components/paymentMethod/PaymentMethod";
import Sidenav from "./components/sidenav/Sidenav";

function App() {
  return (
    <div className="bg-gray-100 mt-5 lg:mt-0 ">
      <Sidenav>
        {/* <div className="divider lg:divider-horizontal"></div> */}

        <PaymentMethod />
      </Sidenav>
    </div>
  );
}

export default App;
