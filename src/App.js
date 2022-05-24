import React from "react";
import { Header } from "./components/Header";
import { FuelingExpenses } from "./components/FuelingExpenses";
import { Transactionlist } from "./components/Transactionlist";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <FuelingExpenses />
        <Transactionlist />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
