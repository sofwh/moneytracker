import React, { useContext } from "react";
import { GlobalContext } from "../context/TrackerContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <div className="flex p-4 justify-center align-center space-x-6">
      <div className=" space-y-4 bg-white shadow rounded p-5 w-50">
        <h2 className="text-center">Income</h2>
        <p className="text-center font-bold text-green-500">RS {income}</p>
      </div>

      <div className=" space-y-4 bg-white shadow rounded p-5 ">
        <h2 className="text-center ">Expense</h2>
        <p className="text-center font-bold text-red-500">RS {expense}</p>
      </div>
    </div>
  );
};

export default Balance;
