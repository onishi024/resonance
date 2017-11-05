import React, { Component } from 'react';
import HandsonGrid from './grid/HandsonGrid'
import Rechart from './chart/Rechart'
import Header from './header/Header'
import TeamLabel from './header/TeamLabel'
import Tally from './tally/Tally'

class App extends Component {
  state = {
    selected_team: {name: "あんこうチーム", icon: "GP_ankou.png"},
    teams: [{name: "あんこうチーム", icon: "GP_ankou.png"},
            {name: "カバさんチーム", icon: "GP_kaba.png"},
            {name: "アヒルさんチーム", icon: "GP_ahiru.png"},
            {name: "ウサギさんチーム", icon: "GP_usagi.png"},
            {name: "カメさんチーム", icon: "GP_kame.png"}],
    members: [{team: "あんこうチーム", name: "未アサイン", grade: "G2"},
              {team: "あんこうチーム", name: "西住みほ", grade: "G2"},
              {team: "あんこうチーム", name: "秋山優花里", grade: "G2"},
              {team: "あんこうチーム", name: "武部沙織", grade: "G2"},
              {team: "あんこうチーム", name: "冷泉麻子", grade: "G2"},
              {team: "あんこうチーム", name: "五十鈴華", grade: "G2"},
              {team: "アヒルさんチーム", name: "磯辺典子", grade: "G2"},
              {team: "アヒルさんチーム", name: "河西忍", grade: "G1"},
              {team: "アヒルさんチーム", name: "近藤妙子", grade: "G1"},
              {team: "アヒルさんチーム", name: "佐々木あけび", grade: "G1"},
              {team: "カバさんチーム", name: "カエサル", grade: "G2"},
              {team: "カバさんチーム", name: "おりょう", grade: "G2"},
              {team: "カバさんチーム", name: "左衛門佐", grade: "G2"},
              {team: "カバさんチーム", name: "エルヴィン", grade: "G2"},
              {team: "ウサギさんチーム", name: "澤梓", grade: "G1"},
              {team: "ウサギさんチーム", name: "山郷あゆみ", grade: "G1"},
              {team: "ウサギさんチーム", name: "大野あや", grade: "G1"},
              {team: "ウサギさんチーム", name: "宇津木優季", grade: "G1"},
              {team: "ウサギさんチーム", name: "阪口桂利奈", grade: "G1"},
              {team: "ウサギさんチーム", name: "丸山紗希", grade: "G1"},
              {team: "カメさんチーム", name: "角谷杏", grade: "G3"},
              {team: "カメさんチーム", name: "河嶋桃", grade: "G3"},
              {team: "カメさんチーム", name: "小山柚子", grade: "G3"}],
      rows: [{ no: 1, team: "あんこうチーム", ankenno: 'Title 1', task: 'JKM00001', ankenname: 'あんこう案件1', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 2, team: "あんこうチーム", ankenno: 'Title 2', task: 'JKM00002', ankenname: 'あんこう案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 3, team: "あんこうチーム", ankenno: 'Title 2', task: 'JKM00002', ankenname: 'あんこう案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 4, team: "あんこうチーム", ankenno: 'Title 2', task: 'JKM00002', ankenname: 'あんこう案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 5, team: "あんこうチーム", ankenno: 'Title 3', task: 'JKM00003', ankenname: 'あんこう案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 6, team: "あんこうチーム", ankenno: 'Title 3', task: 'JKM00003', ankenname: 'あんこう案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 7, team: "あんこうチーム", ankenno: 'Title 4', task: 'JKM00004', ankenname: 'あんこう案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 8, team: "あんこうチーム", ankenno: 'Title 4', task: 'JKM00004', ankenname: 'あんこう案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 9, team: "アヒルさんチーム", ankenno: 'Title 2', task: 'JKM00002', ankenname: 'アヒルさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 10, team: "アヒルさんチーム", ankenno: 'Title 2', task: 'JKM00004', ankenname: 'アヒルさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 11, team: "アヒルさんチーム", ankenno: 'Title 2', task: 'JKM00005', ankenname: 'アヒルさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 12, team: "アヒルさんチーム", ankenno: 'Title 2', task: 'JKM00004', ankenname: 'アヒルさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 13, team: "カバさんチーム", ankenno: 'Title 2', task: 'JKM00002', ankenname: 'カバさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 14, team: "カバさんチーム", ankenno: 'Title 2', task: 'JKM00002', ankenname: 'カバさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 15, team: "カバさんチーム", ankenno: 'Title 2', task: 'JKM00002', ankenname: 'カバさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 16, team: "カバさんチーム", ankenno: 'Title 2', task: 'JKM00008', ankenname: 'カバさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 17, team: "カメさんチーム", ankenno: 'Title 2', task: 'JKM00008', ankenname: 'カメさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 18, team: "カメさんチーム", ankenno: 'Title 2', task: 'JKM00002', ankenname: 'カメさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 19, team: "カメさんチーム", ankenno: 'Title 2', task: 'JKM00010', ankenname: 'カメさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 20, team: "カメさんチーム", ankenno: 'Title 2', task: 'JKM00002', ankenname: 'カメさん案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 },
             { no: 21, team: "ウサギさんチーム", ankenno: 'Title 2', task: 'JKM00002', ankenname: 'アリクイ案件2', yama: '100', member: "未アサイン", d201710: 20, d201711: 15, d201712: 30, d201801: 5, d201802: 10, d201803: 15 }]
  }

  _onChange(selected_team) {
    this.setState(
      selected_team
    )
  }

  render() {
    return (
      <div className="App">
        <Header selected_team={this.state.selected_team}
                teams={this.state.teams}
                onChange={selected_team => this._onChange(selected_team)} />
              <TeamLabel selected_team={this.state.selected_team} onChange={selected_team => this._onChange(selected_team)}/>
        <HandsonGrid rows = {this.state.rows.filter(row => { return row.team === this.state.selected_team.name })}
                     members = {this.state.members.filter(value => { return value.team === this.state.selected_team.name })} />
        <hr />
        <Tally rows = {this.state.rows.filter(row => { return row.team === this.state.selected_team.name })} />

      </div>
    )
  }
}

export default App;
