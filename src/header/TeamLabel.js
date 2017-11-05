import React from 'react'

const TeamLabel = ({selected_team, onChange}) => {

  return (
     <h2 onClick={() => onChange(selected_team)} >
       <img src={selected_team.icon} width="10%" height="10%" alt="※" border-radius="50%" />
       {selected_team.name}
     </h2>
   )
}

export default TeamLabel
