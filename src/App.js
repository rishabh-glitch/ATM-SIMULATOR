import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AccountBalance from "./components/AccountBalance";
import DepositForm from "./components/DepositForm";
import WithdrawForm from "./components/WithDrawForm";
import "./style.css";

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  const [balance, setBalance] = useState(() => {
    // Retrieve balance from local storage or use a default value
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? parseInt(storedBalance, 10) : 0;
  });

  useEffect(() => {
    // Save balance to local storage whenever it changes
    localStorage.setItem("balance", balance.toString());
  }, [balance]);

  const handleDeposit = (denomination, notes) => {
    // Update the balance based on the deposited amount
    setBalance(prevBalance => prevBalance + denomination * notes);
  };

  const handleWithdraw = withdrawAmount => {
    if (withdrawAmount > balance) {
      // Display an error message if the withdrawal amount is greater than the balance
      return;
    }

    // Update the balance based on the withdrawn amount
    setBalance(prevBalance => prevBalance - withdrawAmount);
  };

  return (
    <AppContainer>
      <h1>ATM Simulator</h1>
      <AccountBalance balance={balance} />
      <DepositForm onDeposit={handleDeposit} />
      <WithdrawForm balance={balance} onWithdraw={handleWithdraw} />
    </AppContainer>
  );
};

export default App;
