import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState()
  const [password,setPassword]=useState();
  const navigate =useNavigate();

  const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/register',{name,email,password})
        .then(result=>{ console.log(result)
          navigate('/login')
        })
        
        .catch(err=>console.log(err))
  }
  return (
    <div>
       <div>
      <div className="signup-form">
        <h2>Signup Form</h2>
        <form action="/submit-form" method="POST" onSubmit={handleSubmit}>
            <input type="text" name="fullname" onChange={(e)=>setName(e.target.value)}  placeholder="Full Name" required />
            <input type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}  placeholder="Email Address" required />
            <input type="password" name="password"  onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" required />
            <button type="submit">Sign Up</button>
         
        </form>
    </div>
    </div>
    <h3 className="already">Already have an Account ?</h3>
      <Link to={'/login'} className="login">Login</Link>
    </div>
  )
}

export default Signup




