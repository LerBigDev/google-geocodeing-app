export type TAppState = {
  placeFrom: string;
  placeTo: string;
};

export enum EAction {
  SetPlaceFrom,
  SetPlaceTo,
}

export type TActions = {
  setPlaceFrom: (
    placeFrom: string
  ) => {
    type: EAction.SetPlaceFrom;
    payload: string;
  };
  setPlaceTo: (
    placeTo: string
  ) => {
    type: EAction.SetPlaceTo;
    payload: string;
  };
};

export type TReducerActions = ReturnType<TActions[keyof TActions]>;
