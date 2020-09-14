const initialState = {
    color: "red",
    bgColor: "red",
    fontsize: 14,
    text: "Init text"
  }

export default function configs(state = initialState, action) {
    if (action.type == "CHANGE_CONFIG") {
    }
    return state;
  }