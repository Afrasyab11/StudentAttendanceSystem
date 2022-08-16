import React from 'react'
import './view_attend.css'
import mydata from './db.json'

const Viewattandance = (props) => {
  let data = mydata;
  
  

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Present OR Absent OR Leave</th>
          </tr>
          </thead>
<tbody>
  {data.map((item, i)=>(
        <tr key={i}>
            <th>{item.id}</th>
            <th> {item.Name}</th>
            <th>{item.Attendance}</th>
          </tr>
          ))}
          </tbody>
      </table>
    </div>
  )
}

export default Viewattandance