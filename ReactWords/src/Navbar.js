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
  const [showSettings, setShowSettings] = useState(false);

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
    let a = [];
    var r = '';
    for (let i = 0; i < modalCount; i++) {
      a.push(r);
    }
    let b = [];
    for (let x = 0; x < modalGuess; x++) {
      b.push(a);
      setGrid(b);
      console.log(grid);
    }
  }

  function save() {
    setLetterCount(modalCount);
    setGuessCount(modalGuess);
    updateGrid();
    setShowSettings(false);
  }

  function cancel() {
    setModalGuess(guessCount);
    setModalCount(letterCount);
    setShowSettings(false);
  }

  function doShowSettings() {
    setShowSettings(true);
  }

  let dave = '';
  if (showSettings) {
    dave = (

      <div className="">
        
        <div className="modal show modal-shower ">
          
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" aria-label="Close" onClick={cancel}></button>
              </div>

              <div className="modal-body">

                Letter Count:
                <div className="input-group mb-3">
                  <button className="btn btn-outline-secondary" onClick={subLetter} type="button">-</button>
                  <button className="btn btn-outline-secondary" onClick={addLetter} type="button">+</button>
                  <input type="text" disabled className="form-control" placeholder={modalCount} aria-label="Example text with two button addons" />
                </div>


                Guess Count:
                <div className="input-group mb-3">
                  <button className="btn btn-outline-secondary" onClick={subGuess} type="button">-</button>
                  <button className="btn btn-outline-secondary" onClick={addGuess} type="button">+</button>
                  <input type="text" id='guessCount' disabled className="form-control" placeholder={modalGuess} aria-label="Example text with two button addons" />
                </div>



              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={cancel}>Cancel</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={save}>Save changes</button>
              </div>
            </div>
          </div>
          
        </div>

        <div className="loader-wrapper" ></div>

      </div>
    );
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
              <button type="button" className="btn btn-primary" onClick={doShowSettings}>
                Settings</button></div>
          </div>
        </div>
      </nav>

      {dave}



    </>
  );
}