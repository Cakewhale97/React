import { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Box from "./Box";
import BoxGrid from "./BoxGrid";
function App() {
  return (
    <div>
      <div>
        <Calendar />
      </div>
      <Box />
      <BoxGrid numBoxes={8} />
    </div>
  );
}

export default App;

import React from "react";
