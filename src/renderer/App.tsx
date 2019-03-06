import { ipcRenderer } from 'electron';
import React, { Component } from 'react';

import style from './App.css';
import { Mini } from './Icon/Mini';
import { X } from './Icon/X';
import logo from './logo.svg';

export default class App extends Component {
  public onClose = () => {
    ipcRenderer.sendSync('synchronous-close');
  }
  public onMininize = () => {
    ipcRenderer.sendSync('synchronous-minimize');
  }
  public render() {
    return (
      <div className={style.App}>
        <header className={style.header}>
          <div className={style.miniBtn} onClick={this.onMininize}>
            <Mini />
          </div>
          <div className={style.closeBtn} onClick={this.onClose}>
            <X />
          </div>
        </header>
        <div className={style['App-content']}>
          <img src={logo} className={style['App-logo']} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={style['App-link']}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    );
  }
}
