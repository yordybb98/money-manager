import { GlobalProvider } from "./context/GlobalState";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExtenses"
import TransactionsForm from "./components/transactions/TransactionsForm";
import TransactionList from "./components/transactions/TransactionList";


function App() {
  return (
    <GlobalProvider>
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransactionsForm />
      <TransactionList />
    </GlobalProvider>

  )
}

export default App
