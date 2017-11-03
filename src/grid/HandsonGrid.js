import React from 'react'
import HotTable from 'react-handsontable';

const HandsonGrid = ({rows, setState}) => {

   const colHeaders = ["#", "案件管理番号", "タスクコード", "案件名称",
   "2017年10月", "2017年11月", "2017年12月", "2018年1月", "2018年2月", "2018年3月"]

   const columns = [
     {
       data: 'no'
     },
     {
       data: 'ankenno'
     },
     {
       data: 'task'
     },
     {
       data: 'ankenname'
     },
     {
       data: '201710',
       type: 'numeric'
     },
     {
       data: '201711',
       type: 'numeric'
     },
     {
       data: '201712',
       type: 'numeric'
     },
     {
       data: '201801',
       type: 'numeric'
     },
     {
       data: '201802',
       type: 'numeric'
     },
     {
       data: '201803',
       type: 'numeric'
     }
   ]

   const handsontableData = rows

   return <HotTable
           root="hot"
           data={handsontableData}
           colHeaders={colHeaders}
           columns={columns}
           columnSorting={true}
           width="600"
           height="300"
           stretchH="all"
           fixedColumnsLeft="4"
           manualColumnResize={true} />
}

export default HandsonGrid
