import React, { Component } from 'react'
import SelectIssue from './SelectIssue'
import Fundamental from './Fundamental'
import ResourceManage from './ResourceManage'
import Analyze from './Analyze'

//クラス記述はアンチパターンだが、一旦reduxでリファクタリングするまで保留

class Edit extends Component {

  constructor(props) {
    //生成が非同期?propsは動的じゃない前提なので、親のグループ変更などを受け取らないといけない
    super(props)
    this.state = {
      selected_issue_id: null,
      selected_parent_issue: null,
      selected_child_issues: []
    }
    this.parent_issues = this.props.issues.filter(issue => issue.parent === undefined)
    this.child_issues = this.props.issues.filter(issue => issue.parent !== undefined)
  }

  _onChange = selected_issue_id => {
    let selected_parent_issue = this.parent_issues.find(issue => issue.id === selected_issue_id)
    let selected_child_issues = this.child_issues.filter(issue => issue.parent.id === selected_issue_id)
    this.setState({
      selected_issue_id,
      selected_parent_issue,
      selected_child_issues
    })
  }

  _onClick = () => {
    console.log(this.state.selected_child_issues);
  }

  //return
  render() {
    let value = null
    if(this.state.selected_issue_id === null) {
      value =
        <div>
          <SelectIssue issues={this.parent_issues} onChange={this._onChange}/>
          select the issue.
        </div>
    } else {
      value = (
        <div>
          <SelectIssue issues={this.parent_issues} onChange={this._onChange}/>
          <Fundamental parent_issue={this.state.selected_parent_issue} />
          <hr />
          <ResourceManage
            parent_issue={this.state.selected_parent_issue}
            child_issues={this.state.selected_child_issues}
            members={this.props.members}
            onClick={this._onClick} />
          <hr />
          <Analyze />
        </div>
      )
    }
    return value
  }
}

export default Edit

// value =
