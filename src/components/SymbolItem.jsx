import React, { useState, useEffect } from 'react';

const SymbolItem = ({ symbol, updatedData }) => {
  const { name, bid, ask, high, low, symbolID} = symbol;

  // Maintain previous bid/ask to track changes
  const [prevBid, setPrevBid] = useState(bid);
  const [prevAsk, setPrevAsk] = useState(ask);

  // Update colors when the updatedData (from WebSocket) is available
  useEffect(() => {
    if (updatedData && updatedData.symbolID === symbolID) {
      setPrevBid(bid); // Set previous bid to the current one before update
      setPrevAsk(ask); // Set previous ask to the current one before update
    }
  }, [updatedData, bid, ask, symbolID]);

  const getTextColor = (newValue, prevValue) => {
    return newValue > prevValue ? 'green' : 'red';
  };

  return (
    <tr>
      <td>{name}</td>
      <td style={{ color: getTextColor(bid, prevBid) }}>{bid}</td>
      <td style={{ color: getTextColor(ask, prevAsk) }}>{ask}</td>
      <td>{high}</td>
      <td>{low}</td>
    </tr>
  );
};

export default SymbolItem;
