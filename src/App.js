import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDataGrid from 'react-data-grid';
import Grid from './grid/Grid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>要員別山積表</h1>
        <h2>保守債権G(GAH0)</h2>
        <Grid />
      </div>
    );
  }
}

export default App;
