import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/app/store';
import { Agenda } from '@/pages/Agenda';
import { ErrorBoundary } from '@/shared/hooks/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ErrorBoundary>
          <Agenda />
        </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default App;
