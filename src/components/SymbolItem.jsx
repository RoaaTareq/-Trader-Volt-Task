import React from 'react';

const SymbolItem = ({ symbol }) => {
  const { name, bid, ask, high, low } = symbol;

  const getTextColor = (newValue, oldValue) => {
    return newValue > oldValue ? 'green' : 'red';
  };

  return (
    <tr>
      <td>{name}</td>
      <td style={{ color: getTextColor(bid, symbol.bid) }}>{bid}</td>
      <td style={{ color: getTextColor(ask, symbol.ask) }}>{ask}</td>
      <td>{high}</td>
      <td>{low}</td>
    </tr>
  );
};

export default SymbolItem;
