import Balance from "./components/Balance";
import ExpenseForm from "./components/ExpenseForm";
import Header from "./components/Header";
import { TotalBalance } from "./components/TotalBalance";
import Transactions from "./components/Transactions";
import { GlobalProvider } from "./context/TrackerContext";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <TotalBalance />
      <Balance />
      <Transactions />
      <ExpenseForm />
    </GlobalProvider>
  );
};

export default App;
