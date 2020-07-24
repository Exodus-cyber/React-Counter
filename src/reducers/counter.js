const initialState = {
  count: 0,
  numberInputted: 0,
  timesClicked: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) { //the thing that you are checking. 
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        timesClicked: state.timesClicked + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        timesClicked: state.timesClicked + 1
      };
    case 'INPUT_NUMBER_CHANGE':
      return {
        ...state,
        numberInputted: action.number
      };
    case 'INPUT_NUMBER':
      return {
        ...state,
        count: parseInt(state.numberInputted),
        numberInputted: null,
        timesClicked: state.timesClicked = 0
      };
    default:
      return state;
  }
}

export default counterReducer;