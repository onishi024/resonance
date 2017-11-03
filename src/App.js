import React, { Component } from 'react';
import HandsonGrid from './grid/HandsonGrid'

class App extends Component {
  state = {
     rows: [{ no: 1, ankenno: 'Title 1', task: 'JKM00001', ankenname: '案件1', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 2, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 3, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 4, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 5, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 6, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 7, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 8, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 9, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 10, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 11, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 12, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 13, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 14, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 15, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 16, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 16, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 16, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 16, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 16, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 16, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 16, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 16, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 16, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
            { no: 17, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' }]
  }

  _setState = ({state}) => {
    this.setState(state)
  }

  render() {
    return (
      <div className="App">
        <h1>要員別山積表</h1>
        <h2>保守債権G(GAH0) test change</h2>
        <HandsonGrid rows={this.state.rows} setState={state => this._setState(state)} />
      </div>
    );
  }
}

export default App;
