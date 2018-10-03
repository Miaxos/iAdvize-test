import { createStore, compose } from 'redux';
import reducer from './reducer';

const initialState = {
  messages: [
  ],
};

const store = () => createStore(
  reducer,
  initialState,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
);

export default store;
