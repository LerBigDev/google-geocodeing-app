import { EAction, TAppState, TReducerActions } from "./types";

const initValue: TAppState = {
  placeFrom: "",
  placeTo: "",
};

const reducer = (state: TAppState = initValue, action: TReducerActions) => {
  switch (action.type) {
    case EAction.SetPlaceFrom:
      break;
    case EAction.SetPlaceTo:
      break;
    default:
      return state;
  }
};

export default reducer;
