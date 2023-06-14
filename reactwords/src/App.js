import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Grid from './Grid';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { atom, useAtom } from 'jotai'

export const columnAtom = atom(1);
export const rowAtom = atom(1);
export const wordAtom = atom(['R', 'A', 'D', 'I', 'O']);
export const backColorAtom = atom([
  ['white', 'white', 'white', 'white', 'white'],
  ['white', 'white', 'white', 'white', 'white'],
  ['white', 'white', 'white', 'white', 'white'],
  ['white', 'white', 'white', 'white', 'white'],
  ['white', 'white', 'white', 'white', 'white'],
  ['white', 'white', 'white', 'white', 'white']
]);

export const gridAtom = atom([
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', '']
]);
export const correctAtom = atom([
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
]);

export default function App() {

  return (
    <>
      <Navbar />
      <Grid />
    </>
  );
}