import Avatar from "../../../assets/Icons/Avatar.svg";
const billingHistoryData = [
  {
    invoice: "Basic Plan-Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "paid",
    users: 7,
    id: 1,
  },
  {
    invoice: "Basic Plan-Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "paid",
    users: 6,
    id: 2,
  },
  {
    invoice: "Basic Plan-Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "paid",
    users: 5,
    id: 3,
  },
  {
    invoice: "Basic Plan-Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "paid",
    users: 3,
    id: 4,
  },
  {
    invoice: "Basic Plan-Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "paid",
    users: 4,
    id: 5,
  },
  {
    invoice: "Basic Plan-Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "paid",
    users: 4,
    id: 6,
  },
  {
    invoice: "Basic Plan-Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "paid",
    users: 3,
    id: 7,
  },
];
const displayCircles = (n) => {
  if (n > 5) {
    let circles = Array(5).fill(null);
    return (
      <div className="flex flex-row">
        <div className="avatar-group -space-x-4">
          {circles.map((circle, i) => {
            return (
              <div className="avatar w-10 h-10" key={i}>
                <div className="w-12">
                  <img src={Avatar} alt="other-users" />
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-3">+{n - 5}</p>
      </div>
    );
  } else {
    let circles = Array(n).fill(null);
    return (
      <div className="avatar-group -space-x-4">
        {circles.map((circle, i) => {
          return (
            <div className="avatar w-10 h-10" key={i}>
              <div className="w-12">
                <img src={Avatar} alt="other-users" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

const newBillingHistoryData = billingHistoryData.map((data) => {
  let transformedUsers = displayCircles(data.users);
  return {
    ...data,
    users: transformedUsers,
    selected: false,
  };
});

export default newBillingHistoryData;
