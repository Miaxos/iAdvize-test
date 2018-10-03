import uuid from 'uuid/v1';

export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

export const sendMessage = ({ to, from, content }) => ({
  type: SEND_NEW_MESSAGE,
  payload: {
    id: uuid(),
    to,
    from,
    content,
  },
});
