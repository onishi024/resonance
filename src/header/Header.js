import React from 'react'

const Header = ({selected_group_id, groups, onChange}) => {

  let group_id
  let _group = groups.find(group => group.id === selected_group_id)

  const _onChange = () => {
    onChange(Number(group_id.value))
  }

  return (
    <div>
      <form>
         <select onChange={() => _onChange()}
                 ref={el => group_id = el} >
           {groups.map(group =>
             <option key={group.id} value={group.id}>{group.name}</option>)}
         </select>
      </form>
      <h2>#{selected_group_id} {_group === undefined ? "グループ名" : _group.name}</h2>
    </div>)
}

export default Header
