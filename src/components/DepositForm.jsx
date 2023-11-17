import React, { useState } from "react";

const DepositForm = ({ onDeposit }) => {
  const [denomination, setDenomination] = useState(100);
  const [notes, setNotes] = useState(0);

  const handleDeposit = () => {
    // Calling the onDeposit function passed from the parent component
    onDeposit(denomination, notes);
    // Reset the form
    setDenomination(100);
    setNotes(0);
  };

  return (
    <>
      <h2>Deposit Money</h2>
      <label>
        Denomination:
        <select
          value={denomination}
          onChange={e => setDenomination(Number(e.target.value))}
        >
          <option value={100}>Rs. 100</option>
          <option value={500}>Rs. 500</option>
          <option value={1000}>Rs. 1000</option>
          <option value={2000}>Rs. 2000</option>
        </select>
      </label>
      <br />
      <label>
        Number of Notes:
        <input
          type="number"
          value={notes}
          onChange={e => setNotes(Number(e.target.value))}
        />
      </label>
      <br />
      <button onClick={handleDeposit}>Deposit</button>
    </>
  );
};

export default DepositForm;
