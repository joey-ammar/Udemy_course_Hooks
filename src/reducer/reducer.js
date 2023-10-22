import { RESET_LIST, REMOVE_ITEM, RECREAT_LIST } from "./actions";
import { data } from "../data";

const reducer = (state, action) => {
  if (action.type === RESET_LIST) {
    return {
      ...state,
      people: [],
    };
  }

  if (action.type === RECREAT_LIST) {
    return {
      ...state,
      people: data,
    };
  }

  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (peron) => peron.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  throw new Error(`No matching ${action.type}`);
};

export default reducer;
