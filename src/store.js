import { createStore, compose } from 'redux';
import reducer from './reducer';

const initialState = {
  messages: [
    {
      id: '12',
      to: 'Willis',
      from: 'Bruce',
      content: 'Test',
    },
  ],
};

const store = () => createStore(
  reducer,
  initialState,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
);

export default store;
