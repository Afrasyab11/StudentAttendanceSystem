import React from 'react'
import data from './db.json'
import { useNavigate, Link } from 'react-router-dom'

const Admin_Crud = () => {

  let navigate = useNavigate();
  let mydata = data;

  const Update = (index,id, Name, Attendance) => {
    localStorage.setItem('index', index)
    localStorage.setItem('id', id)
    localStorage.setItem('Name', Name)
    localStorage.setItem('Attendance', Attendance)

  }

  const deleted = (id) => {
    var index = mydata.map(
      function (e) { return e.id; }).indexOf(id);
    mydata.splice(index, 1)
    navigate('/Admin_crud_Operation')
  }
  return (
    <div>
      <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Attandance</th>
            <th>Operations</th>
            <th>%</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <th>{item.id}</th>
              <th>{item.Name}</th>
              <th>{item.Attendance}</th>
              

              <th className='btn-actions'><Link to='/Updata_Student_Data'><button onClick={() =>
                Update(i,item.id, item.Name, item.Attendance)}>Update</button></Link>
                <button onClick={() => deleted(item.id)}>Delete</button> 
                <Link to='/Attandance'><button >Add Attendance</button></Link></th>
                <th></th>
                <th></th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Admin_Crud;
