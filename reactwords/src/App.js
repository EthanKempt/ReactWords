import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Grid from './Grid';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { atom, useAtom } from 'jotai';

export const columnAtom = atom(1);
export const rowAtom = atom(1);
export const wordAtom = atom(['R', 'A', 'D', 'I', 'O', 'X']);
export const solvedAtom = atom(false);
export const letterCountAtom = atom(5);
export const modalCountAtom = atom(5);
export const guessCountAtom = atom(6);
export const modalGuessAtom = atom(6);

export const flippingAtom = atom([
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
]);

let a = [];
r = [''];

for (let i = 0; i < letterCount; i++) {

}

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