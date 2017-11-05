import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const Tally = ({rows}) => {

  const tallyRows = []
  for (let i in rows) {
    let key = rows[i].member
    tallyRows[key] = tallyRows[key] ?
    {d201710: tallyRows[key].d201710 + rows[i].d201710, d201711: tallyRows[key].d201711 + rows[i].d201711, d201712: tallyRows[key].d201712 + rows[i].d201712,
     d201801: tallyRows[key].d201801 + rows[i].d201801, d201802: tallyRows[key].d201802 + rows[i].d201802, d201803: tallyRows[key].d201803 + rows[i].d201803}
    :
    {d201710: rows[i].d201710, d201711: rows[i].d201711, d201712: rows[i].d201712,
     d201801: rows[i].d201801, d201802: rows[i].d201802, d201803: rows[i].d201803}
  }

  const chartRows =[]
  for (let key in tallyRows) {
    let chartRow = tallyRows[key]
    chartRow.member = key
    chartRows.push(chartRow)
  }

  return (
    	<BarChart width={600} height={300} data={chartRows}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="member"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="d201710" fill="#8884d8" />
       <Bar dataKey="d201711" fill="#82ca9d" />
      </BarChart>
  )
}

export default Tally
