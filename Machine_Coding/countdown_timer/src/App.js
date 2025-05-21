import React from "react";
import CountDownTimer from "./component/CountDownTimer";
import "./App.css"

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>CountDown Timer</h1>
      <CountDownTimer />
    </div>
  )
}