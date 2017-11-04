import React from 'react'

const Header = ({selected_team, teams, onChange}) => {

  let team

  const _onChange = () => {
    onChange({
      selected_team: team.value
    })
  }

  return (
   <form>
       <select onChange={() => _onChange()}
               ref={el => team = el} >
         {teams.map(team =>
           <option value={team.name}>{team.name}</option>)}
       </select>
   </form>
  )
}

export default Header
