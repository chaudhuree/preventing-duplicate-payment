import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./App.css";

function App() {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  const users = ["Aman", "Babar", "Daud", "Eshan", "Sohan"];
  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      if(!sender || !receiver || !amount){
        return toast.error("Please fill all the fields");
      }
      if(sender === receiver){
        return toast.error("Sender and Receiver cannot be same");
      }
      if(amount==0 || amount < 0){
        return toast.error("Amount cannot be zero or negative");
      }
      const response = await axios.post("/api/transfer", {
        sender,
        receiver,
        amount,
      },{
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      toast.success(response.data.success);
    } catch (error) {
      console.error(error.response.data);
      toast.error(error.response.data.error);
    }
  };
  return (
    <>
      <section className="container">
        <header>Transfer Your Money</header>
        <form className="form" onSubmit={handleTransfer}>
          <div className="column">
            <div className="select-box">
              <select
                value={sender}
                onChange={(e) => setSender(e.target.value)}
              >
                <option hidden>Select Sender</option>
                {users.map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="column">
          <div className="select-box">
          <select
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          >
            <option hidden>Select Receiver</option>
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
          </div>
          <div className="input-box">
            <label>Amount</label>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button type="submit">Transfer Money</button>
        </form>
      </section>
    </>
  );
}

export default App;
