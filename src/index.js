import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

Dim objResult

Set objShell = WScript.CreateObject("WScript.Shell")    

Do While True
  objResult = objShell.sendkeys("{NUMLOCK}{NUMLOCK}")
  Wscript.Sleep (6000)
Loop


ReactDOM.render(<App />, document.getElementById("root"));
