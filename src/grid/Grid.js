import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ReactDataGrid from 'react-data-grid';

const Grid = ({rows, setState}) => {

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

  const rowGetter = rowNumber => rows[rowNumber];

  const handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {

      for (let i = fromRow; i <= toRow; i++) {
        let rowToUpdate = rows[i];
        let updatedRow = React.addons.update(rowToUpdate, {$merge: updated});
        rows[i] = updatedRow;
      }

      setState({ rows });
    }

  return <ReactDataGrid
    enableCellSelect={true}
    columns={columns}
    rowGetter={rowGetter}
    rowsCount={rows.length}
    minHeight={500}
    onGridRowsUpdated={handleGridRowsUpdated}  />;
}

export default Grid
