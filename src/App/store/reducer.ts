import { EAction, TAppState, TReducerActions } from "./types";

const initValue: TAppState = {
  placeFrom: "",
  placeTo: "",
};

const reducer = (state: TAppState = initValue, action: TReducerActions) => {
  switch (action.type) {
    case EAction.SetPlaceFrom:
      return { ...state };
    case EAction.SetPlaceTo:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
