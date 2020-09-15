import React, { useState } from "react";
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
  const [fontsize, setFontsize] = useState(14);
  const [inputText, setInputText] = useState("");
  const [spanId, setSpanId] = useState(0);

  function selection(e) {
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
  }

  function formSubmit(e) {
    e.preventDefault();
    if (!inputText) {
      alert("Enter some text!");
      return;
    }
    props.onAddSpan({
      color: color,
      bgcolor: bgColor,
      fontsize: +fontsize,
      text: inputText,
      id: new Date().valueOf(),
    });
    setInputText("");
  }

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function spanSelect(e) {
    setSpanId(e);
  }

  function changeSpan() {
    if (spanId) {
      props.onChangeSpan({
        color: color,
        bgcolor: bgColor,
        fontsize: +fontsize,
        text: inputText,
        id: spanId,
      });
    } else {
      alert("Choose text to change!");
    }
  }

  function deleteSpan() {
    if (spanId) {
      props.onDeleteSpan(spanId);
      setSpanId(0);
    } else {
      alert("Choose text to delete!");
    }
  }

  function getJson() {
    console.log(JSON.stringify(props.spans));
  }

  return (
    <div className="App">
      <h1>Text editor</h1>
      <h5>
        To change/delete span, select params, then click on it and press button
      </h5>
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
          <MenuItem value="black">Black</MenuItem>
          <MenuItem value="white">White</MenuItem>
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
          <MenuItem value="black">Black</MenuItem>
          <MenuItem value="white">White</MenuItem>
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
        <InputLabel id="text">Text</InputLabel>
        <TextField
          id="standard-basic"
          name="text"
          label="Enter text"
          value={inputText}
          onChange={handleChange}
        />
        <div className="buttons">
          <Button variant="contained" color="primary" type="submit">
            ADD
          </Button>
          <Button variant="contained" color="secondary" onClick={deleteSpan}>
            DELETE
          </Button>
          <Button variant="contained" color="default" onClick={changeSpan}>
            CHANGE
          </Button>
        </div>
      </form>
      <div className="spans">
        {props.spans.map((text, index) => (
          <span
            key={index}
            style={{
              color: text.color,
              backgroundColor: text.bgcolor,
              fontSize: text.fontsize,
              marginRight: "5px",
            }}
            spanid={text.id}
            onClick={() => spanSelect(text.id)}
          >
            {text.text}
          </span>
        ))}
      </div>
      <Button variant="contained" color="default" onClick={getJson}>
        GET JSON
      </Button>
    </div>
  );
}

export default connect(
  (state) => ({
    spans: state.spans,
  }),
  (dispatch) => ({
    onAddSpan: (spanProps) => {
      dispatch({ type: "ADD_SPAN", payload: spanProps });
    },
    onDeleteSpan: (spanProps) => {
      dispatch({ type: "DELETE_SPAN", payload: spanProps });
    },
    onChangeSpan: (spanProps) => {
      dispatch({ type: "CHANGE_SPAN", payload: spanProps });
    },
  })
)(App);
