import React from 'react'

const Fundamental = ({parent_issue}) => {

  return (
    <div>
      <h4>案件基本情報</h4>
      <div>分類: {parent_issue.custom_fields[0].value}</div>
      <div>案件管理番号: {parent_issue.custom_fields[1].value}</div>
      <div>タスクコード: {parent_issue.custom_fields[2].value}</div>
      <div>サブコード: {parent_issue.custom_fields[3].value}</div>
      <div>見積総工数: {parent_issue.estimated_hours / 8} 人日</div>
      <div>更新日時: {parent_issue.updated_on}</div>
    </div>
  )
}

export default Fundamental
