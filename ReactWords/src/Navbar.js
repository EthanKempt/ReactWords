import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import { columnAtom, rowAtom, letterCountAtom, modalCountAtom, guessCountAtom, modalGuessAtom, gridAtom } from "./App";
import { useAtom } from 'jotai'

export default function Navbar() {
  const [column, setColumn] = useAtom(columnAtom);
  const [row, setRow] = useAtom(rowAtom);
  const [letterCount, setLetterCount] = useAtom(letterCountAtom);
  const [modalCount, setModalCount] = useAtom(modalCountAtom);
  const [guessCount, setGuessCount] = useAtom(guessCountAtom);
  const [modalGuess, setModalGuess] = useAtom(modalGuessAtom);
  const [grid, setGrid] = useAtom(gridAtom);

  function addLetter() {
    if (modalCount < 6) {
      setModalCount(modalCount + 1);
    }
  }
  function subLetter() {
    if (modalCount > 4) {
      setModalCount(modalCount - 1);
    }
  }

  function addGuess() {
    if (modalGuess < 7) {
      setModalGuess(modalGuess + 1);
    }
  }
  function subGuess() {
    if (modalGuess > 5) {
      setModalGuess(modalGuess - 1);
    }
  }

  function updateGrid() {
    const r = '';
    let b = [];
    for (let x = 0; x < modalGuess; x++) {
      let a = [];
      for (let i = 0; i < modalCount; i++) {
        a.push(r);
      }
      b.push(a);
    }
    setGrid(b);
    console.log(grid);
  }

  function save() {
    setLetterCount(modalCount);
    setGuessCount(modalGuess);
    updateGrid();
  }

  function cancel() {
    setModalGuess(guessCount);
    setModalCount(letterCount);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Settings</button></div>
          </div>
        </div>
      </nav>



      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">

              Letter Count:
              <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" onClick={subLetter} type="button">-</button>
                <button className="btn btn-outline-secondary" onClick={addLetter} type="button">+</button>
                <input type="text" disabled class="form-control" placeholder={modalCount} aria-label="Example text with two button addons" />
              </div>


              Guess Count:
              <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" onClick={subGuess} type="button">-</button>
                <button class="btn btn-outline-secondary" onClick={addGuess} type="button">+</button>
                <input type="text" id='guessCount' disabled class="form-control" placeholder={modalGuess} aria-label="Example text with two button addons" />
              </div>



            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={cancel}>Cancel</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={save}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}