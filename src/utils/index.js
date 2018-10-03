const MessageFilter = (messages, name) => messages.filter(
  m => m.to === name || m.from === name,
);

export default MessageFilter;
