import { ACTION, ACTION_TYPE } from "./def";

function reducer(state: any, action: ACTION) {
  switch (action.type) {
    case ACTION_TYPE.CONFIG:
      return { ...state, config: action["config"] };

    case ACTION_TYPE.GLOBALCONFIG:
      return { ...state, globalConfig: action["globalConfig"] };

    default:
      break;
  }

  return state;
}

export default reducer;
