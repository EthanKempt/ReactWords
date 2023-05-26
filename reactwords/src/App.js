import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Grid from './Grid';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';

export default function App() {
  const [column, setColumn] = useState(1);
  const [row, setRow] = useState(1);

  return (
    <>
      <Navbar column={column} setRow={setRow} setColumn={setColumn} row={row} />
      <Grid column={column} row={row} />
    </>
  );
}