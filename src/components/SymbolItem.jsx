// /src/components/SymbolItem.js

import React from "react";

const SymbolItem = ({ symbol, update }) => {
  const { bid, ask, high, low, name } = symbol;

  const getColor = (newValue, oldValue) => {
    return newValue > oldValue ? "green" : "red";
  };

  const bidColor = getColor(update.bid, bid);
  const askColor = getColor(update.ask, ask);

  return (
    <div className="symbol-item">
      <h3>{name}</h3>
      <p style={{ color: bidColor }}>
        Bid: {update.bid ? update.bid : bid}
      </p>
      <p style={{ color: askColor }}>
        Ask: {update.ask ? update.ask : ask}
      </p>
      <p>High: {high}</p>
      <p>Low: {low}</p>
    </div>
  );
};

export default SymbolItem;
