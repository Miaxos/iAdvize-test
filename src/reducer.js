import { SEND_NEW_MESSAGE } from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
  case SEND_NEW_MESSAGE: {
    const { message } = state;
    const {
      id, to, from, content,
    } = action.payload;
    const newMessage = [
      ...message,
      {
        id,
        to,
        from,
        content,
      },
    ];
    return { ...state, message: newMessage };
  }
  default:
    return state;
  }
};

export default reducer;
