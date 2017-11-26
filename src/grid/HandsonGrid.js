import React from 'react'
import HotTable from 'react-handsontable'

const HandsonGrid = ({rows, members, onChange}) => {

   //カラムヘッダー定義
   const colHeaders = ["#", "分類", "案件管理番号", "タスクコード", "サブコード", "案件名称", "見積", "サブ名称", "要員",
   "4月山" , "4月予" , "山-予", "5月山" , "5月予" , "山-予", "6月山" , "6月予" , "山-予", "7月山", "7月予", "山-予", "8月山", "8月予", "山-予", "9月山", "9月予", "山-予",
   "10月山", "10月予", "山-予", "11月山", "11月予", "山-予", "12月山", "12月予", "山-予", "1月山", "1月予", "山-予", "2月山", "2月予", "山-予", "3月山", "3月予", "山-予"]

   //カラムデータ定義
   const columns = [
     { data: 'no', editor: false },
     { data: 'kind', editor: false },
     { data: 'ankenno', editor: false },
     { data: 'taskcode', editor: false },
     { data: 'subcode', editor: false },
     { data: 'ankenname', editor: false },
     { data: 'estimate', editor: false, format: '0.00' },
     { data: 'subname'},
     {
       data: 'member',
       editor: 'select',
       selectOptions: members.map(member => member.name),
       allowInvalid: false
     },
     { data: 'y04', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p04', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd04', type: 'numeric', editor: false      , format: '0.00' },
     { data: 'y05', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p05', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd05', type: 'numeric', editor: false      , format: '0.00' },
     { data: 'y06', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p06', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd06', type: 'numeric', editor: false      , format: '0.00' },
     { data: 'y07', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p07', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd07', type: 'numeric', editor: false      , format: '0.00' },
     { data: 'y08', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p08', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd08', type: 'numeric', editor: false      , format: '0.00' },
     { data: 'y09', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p09', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd09', type: 'numeric', editor: false      , format: '0.00' },
     { data: 'y10', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p10', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd10', type: 'numeric', editor: false      , format: '0.00' },
     { data: 'y11', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p11', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd11', type: 'numeric', editor: false      , format: '0.00' },
     { data: 'y12', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p12', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd12', type: 'numeric', editor: false      , format: '0.00' },
     { data: 'y01', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p01', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd01', type: 'numeric', editor: false      , format: '0.00' },
     { data: 'y02', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p02', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd02', type: 'numeric', editor: false      , format: '0.00' },
     { data: 'y03', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'p03', type: 'numeric', allowInvalid: false, format: '0.00' },
     { data: 'd03', type: 'numeric', editor: false      , format: '0.00' },
   ]

   //分類, タスクコード+サブコード, チケット番号でsort
   //[リファクタリング]チケット番号で親特定は不安定要素が大きい
   let rowsSorted = rows.sort((a, b) => {
     return a.no > b.no ? 1 : -1
     return (a.taskcode + a.subcode) > (b.taskcode + b.subcode) ? 1 : -1
     return a.kind > b.kind ? 1 : -1
   })

   //タスクコード毎の集計情報作成
   const sumRows = []
   for (let i in rows){
     let key = rows[i].taskcode + rows[i].subcode
     sumRows[key] = (sumRows[key])?
     {count: sumRows[key].count + 1,
       y04: sumRows[key].y04 + rows[i].y04, p04: sumRows[key].y04 + rows[i].p04,
       y05: sumRows[key].y05 + rows[i].y05, p05: sumRows[key].y05 + rows[i].p05,
       y06: sumRows[key].y06 + rows[i].y06, p06: sumRows[key].y06 + rows[i].p06,
       y07: sumRows[key].y07 + rows[i].y07, p07: sumRows[key].y07 + rows[i].p07,
       y08: sumRows[key].y08 + rows[i].y08, p08: sumRows[key].y08 + rows[i].p08,
       y09: sumRows[key].y09 + rows[i].y09, p09: sumRows[key].y09 + rows[i].p09,
       y10: sumRows[key].y10 + rows[i].y10, p10: sumRows[key].y10 + rows[i].p10,
       y11: sumRows[key].y11 + rows[i].y11, p11: sumRows[key].y11 + rows[i].p11,
       y12: sumRows[key].y12 + rows[i].y12, p12: sumRows[key].y12 + rows[i].p12,
       y01: sumRows[key].y01 + rows[i].y01, p01: sumRows[key].y01 + rows[i].p01,
       y02: sumRows[key].y02 + rows[i].y02, p02: sumRows[key].y02 + rows[i].p02,
       y03: sumRows[key].y03 + rows[i].y03, p03: sumRows[key].y03 + rows[i].p03}
     :
     {count: 1,
       y04: rows[i].y04, p04: rows[i].p04,
       y05: rows[i].y05, p05: rows[i].p05,
       y06: rows[i].y06, p06: rows[i].p06,
       y07: rows[i].y07, p07: rows[i].p07,
       y08: rows[i].y08, p08: rows[i].p08,
       y09: rows[i].y09, p09: rows[i].p09,
       y10: rows[i].y10, p10: rows[i].p10,
       y11: rows[i].y11, p11: rows[i].p11,
       y12: rows[i].y12, p12: rows[i].p12,
       y01: rows[i].y01, p01: rows[i].p01,
       y02: rows[i].y02, p02: rows[i].p02,
       y03: rows[i].y03, p03: rows[i].p03}
   }

   //集計行を追加
   const finalRows = []
   let counter = 0
   for (let i in rowsSorted){
     counter++
     finalRows.push(rowsSorted[i])
     if(counter === sumRows[rowsSorted[i].taskcode + rowsSorted[i].subcode].count){
       counter = 0
       let key = rowsSorted[i].taskcode + rowsSorted[i].subcode
       finalRows.push(
         { no: "*", ankenno: rowsSorted[i].ankenno, taskcode: rowsSorted[i].taskcode, subcode: rowsSorted[i].subcode,
           ankenname: rowsSorted[i].ankenname, estimate: rowsSorted[i].estimate, member: "計",
           y04: sumRows[key].y04, p04: sumRows[key].p04,
           y05: sumRows[key].y05, p05: sumRows[key].p05,
           y06: sumRows[key].y06, p06: sumRows[key].p06,
           y07: sumRows[key].y07, p07: sumRows[key].p07,
           y08: sumRows[key].y08, p08: sumRows[key].p08,
           y09: sumRows[key].y09, p09: sumRows[key].p09,
           y10: sumRows[key].y10, p10: sumRows[key].p10,
           y11: sumRows[key].y11, p11: sumRows[key].p11,
           y12: sumRows[key].y12, p12: sumRows[key].p12,
           y01: sumRows[key].y01, p01: sumRows[key].p01,
           y02: sumRows[key].y02, p02: sumRows[key].p02,
           y03: sumRows[key].y03, p03: sumRows[key].p03
         }
       )
     }
   }

   //mergeCells作成
   const mergeCells = []
   var cursor = 0
   for (let i in sumRows){
     //[リファクタリング]クソダサ繰り返し書き換えたい
     //  mergeCells.push({row: cursor, col: 0, rowspan: sumRows[i].count + 1, colspan: 1})
     mergeCells.push({row: cursor, col: 1, rowspan: sumRows[i].count + 1, colspan: 1})
     mergeCells.push({row: cursor, col: 2, rowspan: sumRows[i].count + 1, colspan: 1})
     mergeCells.push({row: cursor, col: 3, rowspan: sumRows[i].count + 1, colspan: 1})
     mergeCells.push({row: cursor, col: 4, rowspan: sumRows[i].count + 1, colspan: 1})
     mergeCells.push({row: cursor, col: 5, rowspan: sumRows[i].count + 1, colspan: 1})
     mergeCells.push({row: cursor, col: 6, rowspan: sumRows[i].count + 1, colspan: 1})
     cursor = cursor + sumRows[i].count + 1
   }

   //集計行の書式設定
   const cellSetting = (row, col, prop) => {
      var cellProperties = {};

      if (finalRows.length !== 0){
        if (finalRows[row].no === "*") {
          cellProperties.readOnly = true;
          // cellProperties.renderer = (instance, td) => {
          //   td.style.backgroundColor = '#95eaea';
          //   return td
          // }
        }
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
           // afterChange={onChange}
           />
}

export default HandsonGrid
