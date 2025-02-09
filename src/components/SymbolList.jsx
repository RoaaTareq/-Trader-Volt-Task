// /src/components/SymbolList.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSymbolsData } from "../store/symbolsSlice";
import { updateSymbolData } from "../store/webSocketSlice";
import SymbolItem from "./SymbolItem";
import { createWebSocketConnection } from "../services/webSocketService";

const SymbolList = () => {
  const dispatch = useDispatch();
  const symbols = useSelector((state) => state.symbols.symbols);
  const status = useSelector((state) => state.symbols.status);
  const error = useSelector((state) => state.symbols.error);

  useEffect(() => {
    dispatch(fetchSymbolsData());
    const ws = createWebSocketConnection((data) => {
      data.value.forEach((updatedSymbol) => {
        dispatch(updateSymbolData(updatedSymbol));
      });
    });

    return () => {
      ws.close();
    };
  }, [dispatch]);

  if (status === "loading") return <p>Loading symbols...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="symbol-list">
      {symbols.map((symbol) => (
        <SymbolItem key={symbol.id} symbol={symbol} update={symbol} />
      ))}
    </div>
  );
};

export default SymbolList;
