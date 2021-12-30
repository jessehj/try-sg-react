import { handleActions } from "redux-actions";

interface InitialState {
  test: null;
}

const initialState: InitialState = {
  test: null,
};

const reducer = handleActions({}, initialState);

export default reducer;
