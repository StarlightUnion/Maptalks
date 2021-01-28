import { ACTION, ACTION_TYPE } from "./def";

function reducer(state: any, action: ACTION) {
  switch (action.type) {
    case ACTION_TYPE.CONFIG:
      return { ...state, config: action["config"] };

    case ACTION_TYPE.MAP:
      return { ...state, map: action["map"] };

    default:
      break;
  }

  return state;
}

export default reducer;
