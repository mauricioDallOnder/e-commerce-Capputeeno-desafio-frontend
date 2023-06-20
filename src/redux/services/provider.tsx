"use client"
import React, { PureComponent, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../Store';

interface ProvidersProps {
  children: ReactNode;
}
//PersistGate,nesta aplicação, apenas funciona com PureComponent do react, caso contratrio lança o erro "Super expression must either be null or a function" em virtude 
//da linha "class PersistGate extends PureComponent<PersistGateProps, PersistorGateState> {}"
class Providers extends PureComponent<ProvidersProps> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {this.props.children}
        </PersistGate>
      </Provider>
    );
  }
}

export default Providers;
