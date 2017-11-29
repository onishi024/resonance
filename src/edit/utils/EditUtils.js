//****************************************************
//issueの形式からrowの形式に変換し、handsontableで表示可能な形に整形する。
//****************************************************
export const issues_to_rows = (parent_issue, child_issues) => {

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

  return rows
}

//****************************************************
//表の値が変更された場合、集計行を更新する。
//****************************************************
export const recal_rows = _rows => {

  let rows = []

  const child_rows = _rows.slice(0, _rows.length - 3)

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

  const parent_row = _rows.slice(_rows.length - 2, _rows.length - 1)[0]

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

  return rows
}

//****************************************************
//変更されたrowsとchild_issuesを比較し、更新内容を特定する。
//****************************************************
export const rows_to_issues = (rows, child_issues, members) => {
let changes = {
  create: [],
  update: [],
  delete: []
}

const child_rows = rows.filter(row => row.no !== "*")

for (let i in child_rows) {
  let _child_issue = child_issues.find(child_issue => child_rows[i].no === child_issue.id)
  if(_child_issue === undefined) {
    //既存のchild_issuesにidが存在しない場合、createする
    console.log("create");
  } else {
    //既存のchild_issuesにidが存在する場合、updateする
    console.log("update");
    //[リファクタリング]差分のみ検査し更新
    _child_issue.subject = child_rows[i].subname
    _child_issue.assigned_to.id = members.find(member => member.name = child_rows[i].member).id
    // _child_issue.assigned_to.name = child_rows[i].member
    _child_issue.assigned_to.name = null
    _child_issue.custom_fields[5].value = child_rows[i].pc04
    _child_issue.custom_fields[7].value = child_rows[i].pc05
    _child_issue.custom_fields[9].value = child_rows[i].pc06
    _child_issue.custom_fields[11].value = child_rows[i].pc07
    _child_issue.custom_fields[13].value = child_rows[i].pc08
    _child_issue.custom_fields[15].value = child_rows[i].pc09
    _child_issue.custom_fields[17].value = child_rows[i].pc10
    _child_issue.custom_fields[19].value = child_rows[i].pc11
    _child_issue.custom_fields[21].value = child_rows[i].pc12
    _child_issue.custom_fields[23].value = child_rows[i].pc01
    _child_issue.custom_fields[25].value = child_rows[i].pc02
    _child_issue.custom_fields[27].value = child_rows[i].pc03
    changes.update.push({issue: _child_issue})
  }
}

//delete未検討

return changes
}
