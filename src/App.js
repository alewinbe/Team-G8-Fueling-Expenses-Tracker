import React from "react";
import { Header } from "./components/Header";
import { FuelingExpenses } from "./components/FuelingExpenses";
import { RefuelingList } from "./components/RefuelingList";
import { AddRefueling } from "./components/AddRefueling";

import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <FuelingExpenses />
        <RefuelingList />
        <AddRefueling />
      </div>
    </GlobalProvider>
  );
}

export default App;
