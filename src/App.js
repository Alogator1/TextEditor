import React, { useState } from "react";
import "./App.css";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {changeBgColor,changeColor,changeFontsize,changeText} from "./redux/actions/changeConfig"

function App(props) {
  const [color, setColor] = useState("red");
  const [bgColor, setBgColor] = useState("red");
  const [fontsize, setFontsize] = useState(14);
  const [inputText, setInputText] = useState("");

  console.log(props);

  function selection(e) {
    console.log(e.target.name);
    switch (e.target.name) {
      case "color":
        //dispatch(changeColor(e.target.value))  <-- вот тут трабл
        setColor(e.target.value);
        break;
      case "font":
        setFontsize(e.target.value);
        break;
      case "bg":
        setBgColor(e.target.value);
        break;
      default:
        console.log("No data!");
    }
  }

  function formSubmit(e) {
    e.preventDefault();
    props.onAddSpan({
      color: color,
      bgcolor: bgColor,
      fontsize: +fontsize,
      text: inputText,
      id: new Date().valueOf(),
    });
    setInputText("");
  }

  console.log(props.spans);

  function handleChange(e) {
    setInputText(e.target.value);
  }
  return (
    <div className="App">
      <h1>Text editor</h1>
      <form noValidate autoComplete="off" onSubmit={formSubmit}>
        <InputLabel id="label">Color</InputLabel>
        <Select
          labelId="label"
          id="selectColor"
          onChange={selection}
          name="color"
          defaultValue="red"
          value={color}
        >
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
        </Select>
        <InputLabel id="bg">Bg color</InputLabel>
        <Select
          labelId="bg"
          id="selectBg"
          onChange={selection}
          name="bg"
          defaultValue="red"
          value={bgColor}
        >
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
        </Select>
        <InputLabel id="font">Font size</InputLabel>
        <Select
          labelId="font"
          id="selectFontSize"
          onChange={selection}
          name="font"
          defaultValue="18"
          value={fontsize}
        >
          <MenuItem value="12">12</MenuItem>
          <MenuItem value="14">14</MenuItem>
          <MenuItem value="16">16</MenuItem>
          <MenuItem value="18">18</MenuItem>
          <MenuItem value="20">20</MenuItem>
          <MenuItem value="22">22</MenuItem>
          <MenuItem value="24">24</MenuItem>
        </Select>
        <TextField
          id="standard-basic"
          label="Enter text"
          value={inputText}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Primary
        </Button>
      </form>
      <div>
        {props.spans.map((text, index) => (
          <span
            key={index}
            style={{
              color: text.color,
              backgroundColor: text.bgcolor,
              fontSize: text.fontsize,
            }}
          >
            {text.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    spans: state.spans,
    config: state.config
  }),
  (dispatch) => ({
    onAddSpan: (spanProps) => {
      dispatch({ type: "ADD_SPAN", payload: spanProps });
    },
  })
)(App);
