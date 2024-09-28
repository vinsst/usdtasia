export const setEmail = (email) => ({
  type: "SET_EMAIL",
  payload: email,
});

export const setName = (name) => ({
  type: "SET_NAME",
  payload: name,
});

export const setTelega = (telega) => ({
  type: "SET_TELEGA",
  payload: telega,
});

export const addHighlight = () => ({
  type: "ADD_HIGHLIGHT",
});

export const removeHighlight = () => ({
  type: "REMOVE_HIGHLIGHT",
});
