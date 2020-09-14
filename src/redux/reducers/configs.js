const initialState = {
    color: "red",
    bgColor: "red",
    fontsize: 14,
    text: "Init text"
  }

export default function configs(state = initialState, action) {
    switch(action.type){
      case "CHANGE_COLOR":
        return {...state, color: action.payload}
      case "CHANGE_BGCOLOR":
        return {...state, bgColor: action.payload}
      case "CHANGE_FONTSIZE":
        return {...state, fontsize: action.payload}
      case "CHANGE_TEXT":
        return {...state, text: action.payload}
      default:
        return state;
    }
  }