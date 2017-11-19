import React from 'react'

const Header = ({groups, onChange}) => {

  let group_id

  const _onChange = () => {
    onChange(group_id.value)
  }

  return (
   <form>
       <select onChange={() => _onChange()}
               ref={el => group_id = el} >
         {groups.map(group =>
           <option key={group.id} value={group.id}>{group.name}</option>)}
       </select>
       
   </form>)
}

export default Header
