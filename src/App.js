import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import SymbolsPage from './pages/SymbolsPage';

const App = () => {
  return (
    <Provider store={store}>
      <SymbolsPage />
    </Provider>
  );
};

export default App;
