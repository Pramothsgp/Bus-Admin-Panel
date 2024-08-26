import React, { useState } from "react";
import TicketsSold from "./TicketsSold";

const styles = {
  container: {
    padding: "20px",
    textAlign: "left",
  },
  label: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "16px",
    marginLeft: "200px",
  },
  input: {
    marginLeft: "10px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    marginLeft: "10px",
    padding: "8px 15px",
    borderRadius: "4px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s ease",
  },
};

function Product() {
  const [date, setDate] = useState("");
  const [displayTicketsSold, setDisplayTicketsSold] = useState(false);

  return (
    <div style={styles.container}>
      <label style={styles.label}>
        Date:
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={() => setDisplayTicketsSold(true)}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Display Data
        </button>
      </label>
      {displayTicketsSold && <TicketsSold ticketDate={date} />}
    </div>
  );
}

export default Product;
