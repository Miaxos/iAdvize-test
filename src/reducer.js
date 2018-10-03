import { SEND_NEW_MESSAGE } from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
  case SEND_NEW_MESSAGE: {
    const { messages } = state;
    const {
      id, to, from, content,
    } = action.payload;
    const newMessage = [
      ...messages,
      {
        id,
        to,
        from,
        content,
      },
    ];
    return { ...state, messages: newMessage };
  }
  default:
    return state;
  }
};

export default reducer;
