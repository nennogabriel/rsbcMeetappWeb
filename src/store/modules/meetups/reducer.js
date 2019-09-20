import produce from 'immer';

const INITIAL_STATE = [];

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetups/ADD_SUCCESS':
        draft.push(action.payload);
        break;
      default:
    }
  });
}
