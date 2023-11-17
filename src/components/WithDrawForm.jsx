import React, { useState } from "react";

const WithdrawForm = ({ balance, onWithdraw }) => {
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleWithdraw = () => {
    // Calling the onWithdraw function passed from the parent component
    onWithdraw(withdrawAmount);
    // Reset the form
    setWithdrawAmount(0);
  };

  return (
    <>
      <h2>Withdraw Money</h2>
      <label>
        Amount:
        <input
          type="number"
          value={withdrawAmount}
          onChange={e => setWithdrawAmount(Number(e.target.value))}
        />
      </label>
      <br />
      <button onClick={handleWithdraw} disabled={withdrawAmount > balance}>
        Withdraw
      </button>
      {withdrawAmount > balance && <p>Error: Insufficient funds</p>}
    </>
  );
};

export default WithdrawForm;
