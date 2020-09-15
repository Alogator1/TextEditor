const initialState = [
  {
    color: "blue",
    bgcolor: "green",
    fontsize: 20,
    text: "Hello world",
    id: new Date().valueOf(),
  },
];

function checkArrays(state, firstIndex, secondIndex) {
  let firstElem = state[firstIndex];
  let secondElem = state[secondIndex];
  if (
    firstElem.color == secondElem.color &&
    firstElem.bgcolor == secondElem.bgcolor &&
    firstElem.fontsize == secondElem.fontsize
  ) {
    state[firstIndex].text = state[firstIndex].text + state[secondIndex].text;
    state.splice(secondIndex, 1);
  } else return false;
}

export default function spans(state = initialState, action) {
  if (action.type == "ADD_SPAN") {
    let newState = state.concat();
    newState.push(action.payload);
    if (newState.length != 1) {
      checkArrays(newState, newState.length - 2, newState.length - 1);
    }
    return [...newState];
  } else if (action.type == "DELETE_SPAN") {
    let newState = state.concat();
    let indexOf = newState.findIndex((s) => s.id == action.payload);
    newState.splice(indexOf, 1);
    console.log("index of deleteble", indexOf, newState.length);
    if (newState.length != 1 && indexOf != newState.length) {
      checkArrays(newState, indexOf - 1, indexOf);
    }
    return [...newState];
  } else if (action.type == "CHANGE_SPAN") {
    let newState = state.concat();
    let indexOf = newState.findIndex((s) => s.id == action.payload.id);
    newState[indexOf] = {
      color: action.payload.color,
      bgcolor: action.payload.bgcolor,
      fontsize: action.payload.fontsize,
      text: action.payload.text,
      id: action.payload.id,
    };
    if (newState.length == 1) return [...newState];
    console.log(indexOf);
    if (indexOf == newState.length - 1) {
      checkArrays(newState, indexOf - 1, indexOf);
    } else if (indexOf == 0) {
      checkArrays(newState, 0, 1);
    } else {
      if (!checkArrays(newState, indexOf, indexOf + 1)) {
        checkArrays(newState, indexOf, indexOf - 1);
      }
    }
    return [...newState];
  }
  return state;
}
