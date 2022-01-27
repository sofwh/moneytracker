import React, { useContext } from "react";
import { GlobalContext } from "../context/TrackerContext";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "Rs " +
    (p[0].split("")[0] === "-" ? "-" : "") +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const TotalBalance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4 className="text-center p-4 font-bold text-4xl">Your Balance</h4>
      <h1 className="text-center p-4 font-bold text-3xl text-green-500">
        {moneyFormatter(total)}
      </h1>
    </>
  );
};
