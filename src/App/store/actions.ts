import { EAction, TActions } from "./types";

export const setPlaceFrom: TActions["setPlaceFrom"] = (placeFrom) => ({
  type: EAction.SetPlaceFrom,
  payload: placeFrom,
});

export const setPlaceTo: TActions["setPlaceTo"] = (placeTo) => ({
  type: EAction.SetPlaceTo,
  payload: placeTo,
});
