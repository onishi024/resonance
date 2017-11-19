import React, { Component } from 'react';
import * as RedmineAPI from './api/RedmineAPI'
import HandsonGrid from './grid/HandsonGrid'
import Rechart from './chart/Rechart'
import Header from './header/Header'
import TeamLabel from './header/TeamLabel'
import Tally from './tally/Tally'

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

  _getSelectedGroup(selected_group_id){
    //[リファクタリング]配列番号で出すの保守性低い
    this.state.groups.filter(group => group.id === selected_group_id)[0]
  }

  //issuesをrowsに変換して返却
  _getRows(issues){
    let rows = []
    //[機能不十分]案件名等取得するロジック要
    issues.map(issue =>
      rows.push({
        no: issue.id,
        team: "あんこうチーム",
        ankenno: 'Title 1',
        task: 'JKM00001',
        ankenname: issue.project.name,
        yama: issue.estimated_hours,
        member: issue.assigned_to.name,
        //[リファクタリング]配列番号で出すの保守性低い
        d201710: Number(issue.custom_fields[0].value),
        d201711: Number(issue.custom_fields[1].value),
        d201712: Number(issue.custom_fields[2].value),
        d201801: Number(issue.custom_fields[3].value),
        d201802: Number(issue.custom_fields[4].value),
        d201803: Number(issue.custom_fields[5].value)
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
        <Header selected_team={this.state.selected_group_id} groups={this.state.groups} onChange={selected_team => this._onChangeGroup(selected_team)} />
        <h1>#{this.state.selected_group_id}</h1>
        <hr />
        <HandsonGrid rows = {this.state.rows} members = {this.state.group_users.group.users} onChange={() => this._onChangeRows()} />
        <input type="button" value="更新" />
      </div>
    )
  }
}

export default App;

//
// <TeamLabel selected_team={this.state.selected_team} onChange={selected_team => this._onChange(selected_team)}/>
// <Tally rows = {this.state.rows.filter(row => { return row.team === this.state.selected_team.name })} />
