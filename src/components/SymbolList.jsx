import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSymbolsAsync, updateSymbol } from '../store/symbolsSlice';
import { connectWebSocket } from '../services/webSocketService';
import SymbolItem from './SymbolItem';

const SymbolList = ({ clientId }) => {
  const dispatch = useDispatch();
  const { symbols, status } = useSelector((state) => state.symbols);

  useEffect(() => {
    dispatch(fetchSymbolsAsync(clientId));
   
    const ws = connectWebSocket('ws://57.128.175.72:8080/ws?apikey=Aa123!@%23#', (data) => {
      if (data && data.symbolID) {
        // Update the symbol with the new data from the WebSocket
        dispatch(updateSymbol(data));
        console.log(data)
        
      } else {
        console.warn('Invalid data received from WebSocket:', data);
      }
    });

    return () => {
      ws.close();
    };
  }, [dispatch, clientId]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error loading symbols</p>;

  return (
    <div className="table-container">
      <table className="symbol-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Bid</th>
            <th>Ask</th>
            <th>High</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          {symbols.map((symbol) => (
            <SymbolItem key={symbol.id} symbol={symbol} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SymbolList;
