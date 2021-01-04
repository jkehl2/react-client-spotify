/* eslint-disable import/prefer-default-export */
export const getHighestMessageId = (state) => {
  const { messages } = state;
  const ids = messages.map((msg) => msg.id);
  const highestId = Math.max(...ids);
  return highestId;
};
