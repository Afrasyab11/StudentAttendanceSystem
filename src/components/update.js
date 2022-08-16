import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Stddata from './db.json'


function Edit() {
    const [id, setid] = useState('');
    const [Name, setname] = useState('');
    const [Attendance, setattendance] = useState('');

    let mydata = Stddata;
    let navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault();

            let a = mydata[localStorage.getItem('index')];
            a.id = id
            a.Name = Name;
            a.Attendance= Attendance;
        navigate('/Admin_crud_Operation')
    }

    useEffect(() => {
        setid(localStorage.getItem('id'))
        setname(localStorage.getItem('Name'))
        setattendance(localStorage.getItem('Attendance'))

    }, [])





    return (
        <div>
            <form className='attend-form'>
            <h4 className='attend-tittle'>Update Data</h4>
                <input className='attend-id' value={id}
                    onChange={e => setid(e.target.value)}
                    type="number" placeholder="ID" /><br></br>

                <input className='attend-name' value={Name}
                    onChange={e => setname(e.target.value)}
                    type="text" placeholder="Name" />

                <br></br>
                <input className='attend-mark' value={Attendance}
                    onChange={e => setattendance(e.target.value)}
                    type="text" placeholder="Attendance" /><br></br>
                <button className='attend-submit'
                    onClick={handelSubmit}
                    type="submit" >
                    Update
                </button>


            </form>
        </div>
    )
}

export default Edit;
