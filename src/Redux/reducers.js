import {
  CHANGE_SEARCH_FIELD,
  GET_ROBOTS_SUCCESS,
  GET_ROBOTS_PENDING,
  GET_ROBOTS_FAILED,
} from "./constants";
const initialState = {
  searchField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  robots: [],
  isPending: true,
};

export const getRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case GET_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case GET_ROBOTS_SUCCESS:
      return { ...state, isPending: false,robots:action.payload };
    case GET_ROBOTS_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
