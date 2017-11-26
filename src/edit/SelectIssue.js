import React from 'react'

const SelectIssue = ({issues, onChange}) => {

  let issue_id

  const _onChange = () => {
    onChange(Number(issue_id.value))
  }

  return (
    <div>
      <form>
         <select onChange={() => _onChange()}
                 ref={el => issue_id = el} >
           {issues.map(issue =>
             <option key={issue.id} value={issue.id}>#{issue.id} {issue.subject}</option>)}
         </select>
      </form>
    </div>)
}

export default SelectIssue
