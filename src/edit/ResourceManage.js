import React from 'react'
import HotTable from 'react-handsontable'

const ResourceManage = ({rows, members, onClick, onChangeRows}) => {

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
      selectOptions: members.map(member => member.name),
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

  //集計行の書式設定
  const cellSetting = (row, col, prop) => {
     var cellProperties = {}

     if (rows.length !== 0){
       if (rows[row].no === "*") {
         cellProperties.readOnly = true
         // cellProperties.className = 'td_red'
       }
     }

     return cellProperties
  }

  //数値が変更された場合の集計行再計算を実施するかどうかの判定。
  //集計行の変更であれば再計算を行わない。(無限ループになるため)
  //change : [row, col, before, after] colはdata名
  const _onChangeRows = (change, source) => {
    console.log(change);
    if (change !== null) {
      rows[change[0][0]].no !== "*" ? onChangeRows() : null
    }
  }

  return (
    <div>
      <h4>要員管理情報</h4>
      <div>
        <HotTable
          root="hot"
          data={rows}
          colHeaders={colHeaders}
          columns={columns}
          columnSorting={false}
          width="1000"
          stretchH="all"
          fixedColumnsLeft="4"
          manualColumnResize={true}
          cells={cellSetting}
          afterChange={_onChangeRows}
          />
      </div>
      <input type="button" value="コスト内訳行を追加" />
      <input type="button" value="データベースを更新" onClick={onClick} />
    </div>)
}

export default ResourceManage
