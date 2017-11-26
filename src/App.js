import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import * as RedmineAPI from './api/RedmineAPI'
import Header from './header/Header'
import HandsonGrid from './grid/HandsonGrid'
import Edit from './edit/Edit'

class App extends Component {

  //コンポーネント生成時の挙動
  componentDidMount(){
    this._onFetch()
  }

  //初期処理　グループ読み込み
  _onFetch() {
    RedmineAPI.get1("groups")
      .then(groups => {
        this.setState({groups})
        this._onChangeGroup(this.state.selected_group_id)
      }
    )
  }

  //グループが変更された場合の情報読み込み
  _onChangeGroup(selected_group_id) {
    let issues = []
    let rows = []

    this.setState(
      {selected_group_id}
    )

    //現在選択されているグループ配下のユーザを取得し、
    //ユーザidに紐付くissueを取得する。
    //issuesからrowsに整形し、stateにセットする。
    //[リファクタリング]コールバック地獄
    RedmineAPI.get2("groups", selected_group_id, "include=users")
      .then(group_users => {
        this.setState({group_users})
        group_users.group.users.length === 0 ?
          this.setState({issues: [], rows: []}) :
          group_users.group.users.map(user => {
            //[リファクタリング]全部取り出してからsetStateしたい
            RedmineAPI.get3("issues", "assigned_to_id=" + user.id)
              .then(_issues => {
                issues.push(..._issues)
                rows.push(...this._getRows(_issues))
              })
              .then(() => {
                this.setState({issues, rows})
              })
            }
          )
      })
  }

  //テーブルが変更された際のログ出力
  _onChangeRows(rows){
    console.log("change rows")
    console.log(this.state.rows);
  }

  //issuesをrowsに変換して返却
  _getRows(issues){
    let rows = []
    //[機能不十分]案件名等取得するロジック要
    issues.map(issue =>
      rows.push({
        no: issue.id,
        kind: issue.custom_fields[0].value,
        ankenno: issue.custom_fields[1].value,
        taskcode: issue.custom_fields[2].value,
        subcode: issue.custom_fields[3].value,
        ankenname: issue.subject,
        subname: issue.subject,
        estimate: issue.estimated_hours,
        member: issue.assigned_to.name,
        //[リファクタリング]配列番号で出すの保守性低い
        y04: Number(issue.custom_fields[4].value),
        p04: Number(issue.custom_fields[5].value),
        y05: Number(issue.custom_fields[6].value),
        p05: Number(issue.custom_fields[7].value),
        y06: Number(issue.custom_fields[8].value),
        p06: Number(issue.custom_fields[9].value),
        y07: Number(issue.custom_fields[10].value),
        p07: Number(issue.custom_fields[11].value),
        y08: Number(issue.custom_fields[12].value),
        p08: Number(issue.custom_fields[13].value),
        y09: Number(issue.custom_fields[14].value),
        p09: Number(issue.custom_fields[15].value),
        y10: Number(issue.custom_fields[16].value),
        p10: Number(issue.custom_fields[17].value),
        y11: Number(issue.custom_fields[18].value),
        p11: Number(issue.custom_fields[19].value),
        y12: Number(issue.custom_fields[20].value),
        p12: Number(issue.custom_fields[21].value),
        y01: Number(issue.custom_fields[22].value),
        p01: Number(issue.custom_fields[23].value),
        y02: Number(issue.custom_fields[24].value),
        p02: Number(issue.custom_fields[25].value),
        y03: Number(issue.custom_fields[26].value),
        p03: Number(issue.custom_fields[27].value)
      })
    )
    return rows
  }

  state = {
    groups: [], //存在するすべてのグループ
    selected_group_id: 12, //現在選択されているグループ
    //現在選択されているグループ配下のユーザ
    group_users: {
      "group": {id: 12, name: "あんこうチーム", users: []}
    },
    issues: [], //現在選択されているグループに関連するチケット
    rows: [] //現在選択されているグループに関連するチケットを要員別山積用に整形した列群
  }

  render() {
    return (
      <div className="App">
        <Header
          selected_group_id={this.state.selected_group_id}
          groups={this.state.groups}
          onChange={selected_team => this._onChangeGroup(selected_team)} />
        <Tabs>
          <TabList>
            <Tab disabled>山積表</Tab>
            <Tab>要員別山積表</Tab>
            <Tab>要員別集計情報</Tab>
            <Tab>案件情報編集</Tab>
          </TabList>
          <TabPanel>
            山積表
          </TabPanel>
          <TabPanel>
            <HandsonGrid
              rows = {this.state.rows}
              members = {this.state.group_users.group.users}
              onChange={() => this._onChangeRows()} />
          </TabPanel>
          <TabPanel>
            要員別集計情報
          </TabPanel>
          <TabPanel>
            <Edit
              issues = {this.state.issues}
              members = {this.state.group_users.group.users}
              onChange={() => this._onChangeRows()} />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default App;
