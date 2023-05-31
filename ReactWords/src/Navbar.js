import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';


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
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(settingsPage);
  }

  const settingsPage = (
    <table>
      <tr>
        <th>Settings:</th>
      </tr>
      <tr>
        <td>Setting 1</td>
      </tr>
      <tr>
        <td>Setting 2</td>
      </tr>
    </table>
    );

  return (
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
            <button class="btn btn-sm btn-outline-secondary" onClick={myFunc2} type="button">Settings</button>
          </div>
        </div>
      </div>
    </nav>
  );
}