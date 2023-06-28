import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Grid from './Grid';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { atom, useAtom } from 'jotai';

const letterCount = 5;
const guessCount = 6;

export const columnAtom = atom(1);
export const rowAtom = atom(1);
export const wordAtom = atom(['R', 'A', 'D', 'I', 'O', 'X']);
export const solvedAtom = atom(false);
export const letterCountAtom = atom(letterCount);
export const modalCountAtom = atom(letterCount);
export const guessCountAtom = atom(guessCount);
export const modalGuessAtom = atom(guessCount);

export const flippingAtom = atom([
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
]);

export const gridAtom = atom([
  ['', '', '', '', ''],
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