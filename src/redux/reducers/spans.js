const initialState =  [{ color: "blue", bgcolor: "green", fontsize: 20, text: "Hello world", id:new Date().valueOf()}]

export default function spans(state = initialState, action) {
    if (action.type == "ADD_SPAN") {
      console.log(state);
      let newState = state;
      newState.push(action.payload);
      return [ ...newState ]
    }
    return state;
  }