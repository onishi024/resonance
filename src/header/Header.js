import React from 'react'

const Header = ({selected_team, teams, onChange}) => {

  let teamname

  const _onChange = () => {
    //0要素取り出すの微妙だし、一意なデータ構造にしたい
    const team = teams.filter(team => team.name === teamname.value)[0]
    onChange({
      selected_team: team
    })
  }

  return (
   <form>
       <select onChange={() => _onChange()}
               ref={el => teamname = el} >
         {teams.map(team =>
           <option value={team.name}>{team.name}</option>)}
       </select>
   </form>)
}

export default Header
