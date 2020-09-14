import React, {useState } from "react";
import "./App.css";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";


function App(props) {
  const [color, setColor] = useState("red");
  const [bgColor, setBgColor] = useState("red");
  const [fontsize, setFontsize] = useState("14");
  const [inputText, setInputText] = useState("");

  function selection(e) {
    console.log(e.target.name);
    switch (e.target.name) {
      case "color":
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

    console.log(e.target);
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log(color, bgColor, fontsize, inputText);
  }

  function handleChange(e) {
    setInputText(e.target.value);
  }

  console.log(props.testStore);
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
        <div>
          {props.testStore.map((text, index)=>(
            <span key={index} style={{
              color: text.color,
              backgroundColor: text.bgcolor,
              fontSize: text.fontsize
            }}>{text.text}</span>
  ))}
        </div>
      </form>
      <div>

      </div>
    </div>
  );
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
