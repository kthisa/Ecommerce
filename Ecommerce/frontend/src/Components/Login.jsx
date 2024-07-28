
import { useState } from "react"
// import { Link } from "react-router-dom"
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState();
  const navigate =useNavigate();

  const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/login',{email,password})
        .then(result=>{console.log(result)
            if(result.data=== "success"){
                navigate('/')
            }
          
        })
        
        .catch(err=>console.log(err))
  }
  return (
    <div>
       <div>
      <div className="login-form ">
        <h2>Login Form</h2>
        <form action="/submit-form" method="POST" onSubmit={handleSubmit}>
            <input type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}  placeholder="Email Address" required />
            <input type="password" name="password"  onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    </div>
    </div>
      {/* <Link to={'/signup'}>Signup</Link>   */}
    </div>
  )
}

export default Login




