import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ReactDataGrid from 'react-data-grid';

const columns = [{ key: 'no', name: '#', locked: true },
                 { key: 'ankenno', name: '案件管理番号', locked: true },
                 { key: 'task', name: 'タスクコード', locked: true },
                 { key: 'ankenname', name: '案件名称', locked: true },
                 { key: '201710', name: '2017年10月', editable: true },
                 { key: '201711', name: '2017年11月', editable: true },
                 { key: '201712', name: '2017年12月', editable: true },
                 { key: '201801', name: '2018年01月', editable: true },
                 { key: '201802', name: '2018年02月', editable: true },
                 { key: '201803', name: '2018年03月', editable: true }];
const rows = [{ no: 1, ankenno: 'Title 1', task: 'JKM00001', ankenname: '案件1', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' },
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
              { no: 17, ankenno: 'Title 2', task: 'JKM00002', ankenname: '案件2', 201710: '20', 201711: '15', 201712: '30', 201801: '5', 201802: '10', 201803: '15' }];
const rowGetter = rowNumber => rows[rowNumber];

const handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    // let rows = this.state.rows;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = React.addons.update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }

    this.setState({ rows });
  }

const Grid = () => {
  return <ReactDataGrid
    enableCellSelect={true}
    columns={columns}
    rowGetter={rowGetter}
    rowsCount={rows.length}
    minHeight={500}
    onGridRowsUpdated={handleGridRowsUpdated}  />;
}

export default Grid
