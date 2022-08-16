import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';





const Signup = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const navigate = useNavigate();
  let newEntry = { name, email, password, cpassword };
  const SubmitSignup = (e) => {
    

    e.preventDefault();
    

    if (name  && email && password && cpassword !== null) {

      console.log(newEntry)
      navigate('/Attandance')

    } else {
      alert("All field required")
    }
  }

  return (
    <div>

      <form className='SignUp'>
        <h1 className='text'>Sign Up</h1>
        <div>
          <input className='SignUpfield' type="text" placeholder='Enter First Name'
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input className='SignUpfield' placeholder='Enter Email'
            value={email}
            onChange={(e) => setemail(e.target.value)} />
        </div>
        <div>
          <input className='SignUpfield' type="password" placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <input className='SignUpfield' type="password" placeholder='Enter Confirmed Password'
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)} />
        </div>
        <br></br>
        <button className="SignUpbutton" type="button" onClick={SubmitSignup} >Sign Up</button><br></br>
        <label className="Ulabel">Already a user?</label>
        <Link className='Lin' to='/'>LOGIN</Link>


      </form>

    </div>
  )
}
export default Signup;