import { produce } from 'immer'

const initialState = {
  users: [],
  selectedUser: {}
};

const userReducer = (state = initialState, { type, payload }) => {
  const newState = produce(state, (draft) => {
    if (type === "user/UPDATE_USER_LIST") {
      draft.users = payload;
    };
    if (type === "user/SELECT_USER") {
      draft.selectedUser = payload;
    };
  });

  return newState;

};

export default userReducer