import React from 'react'
import HotTable from 'react-handsontable'

const ResourceManage = ({parent_issue, child_issues, members, onClick}) => {

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

  let rows = []

  const child_rows = []
  child_issues.map(issue => {
      child_rows.push({
        del: "-",
        no: issue.id,
        subname: issue.subject,
        member: issue.assigned_to.name,
        pc04: Number(issue.custom_fields[5].value),
        pc05: Number(issue.custom_fields[7].value),
        pc06: Number(issue.custom_fields[9].value),
        pc07: Number(issue.custom_fields[11].value),
        pc08: Number(issue.custom_fields[13].value),
        pc09: Number(issue.custom_fields[15].value),
        pc10: Number(issue.custom_fields[17].value),
        pc11: Number(issue.custom_fields[19].value),
        pc12: Number(issue.custom_fields[21].value),
        pc01: Number(issue.custom_fields[23].value),
        pc02: Number(issue.custom_fields[25].value),
        pc03: Number(issue.custom_fields[27].value)
      })
  })

  rows.push(...child_rows)

  let pc_sum = {
      del: "*",
      no: "*",
      subname: "計画コスト(PC)",
      member: "*",
      pc04: 0,
      pc05: 0,
      pc06: 0,
      pc07: 0,
      pc08: 0,
      pc09: 0,
      pc10: 0,
      pc11: 0,
      pc12: 0,
      pc01: 0,
      pc02: 0,
      pc03: 0
    }

  for (let i in child_rows){
    pc_sum.pc04 = pc_sum.pc04 + child_rows[i].pc04
    pc_sum.pc05 = pc_sum.pc05 + child_rows[i].pc05
    pc_sum.pc06 = pc_sum.pc06 + child_rows[i].pc06
    pc_sum.pc07 = pc_sum.pc07 + child_rows[i].pc07
    pc_sum.pc08 = pc_sum.pc08 + child_rows[i].pc08
    pc_sum.pc09 = pc_sum.pc09 + child_rows[i].pc09
    pc_sum.pc10 = pc_sum.pc10 + child_rows[i].pc10
    pc_sum.pc11 = pc_sum.pc11 + child_rows[i].pc11
    pc_sum.pc12 = pc_sum.pc12 + child_rows[i].pc12
    pc_sum.pc01 = pc_sum.pc01 + child_rows[i].pc01
    pc_sum.pc02 = pc_sum.pc02 + child_rows[i].pc02
    pc_sum.pc03 = pc_sum.pc03 + child_rows[i].pc03
  }

  rows.push(pc_sum)

  const parent_row = {
    del: "*",
    no: "*",
    subname: "山積工数(PV)",
    member: "*",
    pc04: Number(parent_issue.custom_fields[5].value),
    pc05: Number(parent_issue.custom_fields[7].value),
    pc06: Number(parent_issue.custom_fields[9].value),
    pc07: Number(parent_issue.custom_fields[11].value),
    pc08: Number(parent_issue.custom_fields[13].value),
    pc09: Number(parent_issue.custom_fields[15].value),
    pc10: Number(parent_issue.custom_fields[17].value),
    pc11: Number(parent_issue.custom_fields[19].value),
    pc12: Number(parent_issue.custom_fields[21].value),
    pc01: Number(parent_issue.custom_fields[23].value),
    pc02: Number(parent_issue.custom_fields[25].value),
    pc03: Number(parent_issue.custom_fields[27].value)
  }
  rows.push(parent_row)

  const pv_sub_pc_row = {
    del: "*",
    no: "*",
    subname: "計画収支(PV-PC)",
    member: "*",
    pc04: parent_row.pc04 - pc_sum.pc04,
    pc05: parent_row.pc05 - pc_sum.pc05,
    pc06: parent_row.pc06 - pc_sum.pc06,
    pc07: parent_row.pc07 - pc_sum.pc07,
    pc08: parent_row.pc08 - pc_sum.pc08,
    pc09: parent_row.pc09 - pc_sum.pc09,
    pc10: parent_row.pc10 - pc_sum.pc10,
    pc11: parent_row.pc11 - pc_sum.pc11,
    pc12: parent_row.pc12 - pc_sum.pc12,
    pc01: parent_row.pc01 - pc_sum.pc01,
    pc02: parent_row.pc02 - pc_sum.pc02,
    pc03: parent_row.pc03 - pc_sum.pc03
  }
  rows.push(pv_sub_pc_row)

  //集計行の書式設定
  const cellSetting = (row, col, prop) => {
     var cellProperties = {};

     if (rows.length !== 0){
       if (rows[row].no === "*") {
         cellProperties.readOnly = true;
       }
     }

     return cellProperties
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
          />
      </div>
      <input type="button" value="データベースを更新" onClick={onClick} />
    </div>)
}

export default ResourceManage
