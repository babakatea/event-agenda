import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/app/store';
import { Agenda } from '@/pages/Agenda';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Agenda />
      </Provider>
    </div>
  );
}

export default App;
