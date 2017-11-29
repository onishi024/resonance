import React from 'react'
import HotTable from 'react-handsontable'

const Analyze = () => {

  //カラムヘッダー定義
  const colHeaders = ["-", "#", "サブ名称", "要員",
    '4月' , '5月','6月', '7月', '8月', '9月',
    '10月', '11月', '12月', '1月', '2月', '3月']

  //カラムデータ定義
  const columns = [
    { data: 'del', editor: false },
    { data: 'no', editor: false },
    { data: 'subname'},
    {
      data: 'member',
      editor: 'select',
      allowInvalid: false
    },
    { data: 'pc04', type: 'numeric', allowInvalid: false, format: '0.00' },
    { data: 'pc05', type: 'numeric', allowInvalid: false, format: '0.00' },
    { data: 'pc06', type: 'numeric', allowInvalid: false, format: '0.00' },
    { data: 'pc07', type: 'numeric', allowInvalid: false, format: '0.00' },
    { data: 'pc08', type: 'numeric', allowInvalid: false, format: '0.00' },
    { data: 'pc09', type: 'numeric', allowInvalid: false, format: '0.00' },
    { data: 'pc10', type: 'numeric', allowInvalid: false, format: '0.00' },
    { data: 'pc11', type: 'numeric', allowInvalid: false, format: '0.00' },
    { data: 'pc12', type: 'numeric', allowInvalid: false, format: '0.00' },
    { data: 'pc01', type: 'numeric', allowInvalid: false, format: '0.00' },
    { data: 'pc02', type: 'numeric', allowInvalid: false, format: '0.00' },
    { data: 'pc03', type: 'numeric', allowInvalid: false, format: '0.00' }
  ]

  return (
    <div>
      収支分析情報を表示します。
      <HotTable
        root="hot2"
        data={null}
        colHeaders={colHeaders}
        columns={columns}
        columnSorting={false}
        width="1000"
        stretchH="all"
        fixedColumnsLeft="4"
        manualColumnResize={true}
        // cells={cellSetting}
        />
    </div>)
}

export default Analyze
