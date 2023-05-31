import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Grid from './Grid';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { atom, useAtom } from 'jotai'

export const columnAtom = atom(1);
export const rowAtom = atom(1);

export default function App() {
  const [column, setColumn] = useAtom(columnAtom);
  const [row, setRow] = useAtom(rowAtom);

  return (
    <>
      <Navbar />
      <Grid />
    </>
  );
}