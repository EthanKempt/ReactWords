import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";


export default function Navbar({ column, setColumn, row, setRow}) {
  function myFunc() {
    if (column < 5) {
      setColumn(column + 1)
    }
    else if (row <= 5) {
      setRow(row + 1)
    }
    else {
      setColumn(1)
      setRow(1)
    }
  }

  function myFunc2() {

  }
  function save() {
    alert('a');
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
            <button class="btn btn-outline-success me-2" onClick={myFunc} type="button">Move Selected</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Settings</button></div>
        </div>
      </div>
    </nav>



      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={save}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}