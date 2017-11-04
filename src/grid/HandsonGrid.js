import React from 'react'
import HotTable from 'react-handsontable';

const HandsonGrid = ({rows, members}) => {

   const colHeaders = ["#", "案件管理番号", "タスクコード", "案件名称", "山積", "要員",
   "2017年10月", "2017年11月", "2017年12月", "2018年1月", "2018年2月", "2018年3月"]

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
       editor: false
     },
     {
       data: 'member',
       editor: 'select',
       selectOptions: members.map(member => member.name),
       allowInvalid: false
     },
     {
       data: '201710',
       type: 'numeric',
       allowInvalid: false
     },
     {
       data: '201711',
       type: 'numeric',
       allowInvalid: false
     },
     {
       data: '201712',
       type: 'numeric',
       allowInvalid: false
     },
     {
       data: '201801',
       type: 'numeric',
       allowInvalid: false
     },
     {
       data: '201802',
       type: 'numeric',
       allowInvalid: false
     },
     {
       data: '201803',
       type: 'numeric',
       allowInvalid: false
     }
   ]

   let handsontableData = rows

   //mergeCells作成
   var mergeCells = []
   var counts = []

   for (var i in rows){
     var key = rows[i].task
     counts[key] = (counts[key])? counts[key] + 1 : 1
   }

   var cursor = 0
   for (var i in counts){
     //クソダサ繰り返し書き換えたい
     mergeCells.push({row: cursor, col: 0, rowspan: counts[i], colspan: 1})
     mergeCells.push({row: cursor, col: 1, rowspan: counts[i], colspan: 1})
     mergeCells.push({row: cursor, col: 2, rowspan: counts[i], colspan: 1})
     mergeCells.push({row: cursor, col: 3, rowspan: counts[i], colspan: 1})
     mergeCells.push({row: cursor, col: 4, rowspan: counts[i], colspan: 1})
     cursor = cursor + counts[i]
   }

   //return
   return <HotTable
           root="hot"
           data={handsontableData}
           colHeaders={colHeaders}
           columns={columns}
           columnSorting={false}
           width="1000"
           height="800"
           stretchH="all"
           fixedColumnsLeft="6"
           manualColumnResize={true}
           mergeCells={mergeCells}
           />
}

export default HandsonGrid
