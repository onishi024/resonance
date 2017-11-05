import React from 'react'

const TeamLabel = ({selected_team}) => {

  return (
     <h2>
       <img src={selected_team.icon} width="10%" height="10%" alt="※"/>
       {selected_team.name}
     </h2>
   )
}

export default TeamLabel
