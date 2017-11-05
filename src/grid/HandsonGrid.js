import React from 'react'
import HotTable from 'react-handsontable'

const HandsonGrid = ({rows, members}) => {

   //カラムヘッダー定義
   const colHeaders = ["#", "案件管理番号", "タスクコード", "案件名称", "山積", "要員",
   "2017年10月", "2017年11月", "2017年12月", "2018年1月", "2018年2月", "2018年3月"]

   //カラムデータ定義
   const columns = [
     {
       data: 'no',
       editor: false
     },
     {
       data: 'ankenno',
       editor: false
     },
     {
       data: 'task',
       editor: false
     },
     {
       data: 'ankenname',
       editor: false
     },
     {
       data: 'yama',
       editor: false,
       format: '0.00'
     },
     {
       data: 'member',
       editor: 'select',
       selectOptions: members.map(member => member.name),
       allowInvalid: false
     },
     {
       data: 'd201710',
       type: 'numeric',
       allowInvalid: false,
       format: '0.00'
     },
     {
       data: 'd201711',
       type: 'numeric',
       allowInvalid: false,
       format: '0.00'
     },
     {
       data: 'd201712',
       type: 'numeric',
       allowInvalid: false,
       format: '0.00'
     },
     {
       data: 'd201801',
       type: 'numeric',
       allowInvalid: false,
       format: '0.00'
     },
     {
       data: 'd201802',
       type: 'numeric',
       allowInvalid: false,
       format: '0.00'
     },
     {
       data: 'd201803',
       type: 'numeric',
       allowInvalid: false,
       format: '0.00'
     }
   ]

   //タスクコードでsort
   let rowsSorted = rows.sort((a, b) => a.task > b.task )

   //タスクコード毎の集計情報作成
   const sumRows = []
   for (let i in rows){
     let key = rows[i].task
     sumRows[key] = (sumRows[key])?
     {count: sumRows[key].count + 1,
      d201710: sumRows[key].d201710 + rows[i].d201710, d201711: sumRows[key].d201711 + rows[i].d201711, d201712: sumRows[key].d201712 + rows[i].d201712,
      d201801: sumRows[key].d201801 + rows[i].d201801, d201802: sumRows[key].d201802 + rows[i].d201802, d201803: sumRows[key].d201803 + rows[i].d201803}
     :
     {count: 1,
      d201710: rows[i].d201710, d201711: rows[i].d201711, d201712: rows[i].d201712,
      d201801: rows[i].d201801, d201802: rows[i].d201802, d201803: rows[i].d201803}
   }

   //集計行を追加
   const finalRows = []
   let counter = 0
   for (let i in rowsSorted){
     counter++
     finalRows.push(rowsSorted[i])
     if(counter === sumRows[rowsSorted[i].task].count){
       counter = 0
       finalRows.push({ no: "*", team: rowsSorted[i].team, ankenno: rowsSorted[i].ankenno, task: rowsSorted[i].task,
                        ankenname: rowsSorted[i].ankenname, yama: rowsSorted[i].yama, member: "計",
                        d201710: sumRows[rowsSorted[i].task].d201710, d201711: sumRows[rowsSorted[i].task].d201711, d201712: sumRows[rowsSorted[i].task].d201712,
                        d201801: sumRows[rowsSorted[i].task].d201801, d201802: sumRows[rowsSorted[i].task].d201802, d201803: sumRows[rowsSorted[i].task].d201803 })
     }
   }

   //mergeCells作成
   const mergeCells = []
   var cursor = 0
   for (let i in sumRows){
     //クソダサ繰り返し書き換えたい
     mergeCells.push({row: cursor, col: 0, rowspan: sumRows[i].count + 1, colspan: 1})
     mergeCells.push({row: cursor, col: 1, rowspan: sumRows[i].count + 1, colspan: 1})
     mergeCells.push({row: cursor, col: 2, rowspan: sumRows[i].count + 1, colspan: 1})
     mergeCells.push({row: cursor, col: 3, rowspan: sumRows[i].count + 1, colspan: 1})
     mergeCells.push({row: cursor, col: 4, rowspan: sumRows[i].count + 1, colspan: 1})
     cursor = cursor + sumRows[i].count + 1
   }

   //集計行の書式設定
   const cellSetting = (row, col, prop) => {
      var cellProperties = {};

      if (finalRows[row].no === "*") {
        cellProperties.readOnly = true;
        // cellProperties.renderer = (instance, td) => {
        //   td.style.backgroundColor = '#95eaea';
        //   return td
        // }
      }
      return cellProperties
   }

   //return
   return <HotTable
           root="hot"
           data={finalRows}
           colHeaders={colHeaders}
           columns={columns}
           columnSorting={false}
           width="1000"
          //  height="800"
           stretchH="all"
           fixedColumnsLeft="6"
           manualColumnResize={true}
           mergeCells={mergeCells}
           cells={cellSetting}
           />
}

export default HandsonGrid
