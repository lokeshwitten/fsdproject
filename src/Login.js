import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
import { useSelector, useDispatch}from 'react-redux'

const Login = () => {
	
	const isAuthenticated=useSelector(state => state.isAuth)
	const SubmitHandler = (e) =>{
		e.preventDefault()
		
		console.log(isAuthenticated)
	}
    return (
        <div class="loginbox">
		<h1 id="hdl">WELCOME BACK</h1>
		<h1 id="hdl">Login</h1>
		<div class="lgform">
		<form class="lgcol lgclm" onSubmit={SubmitHandler}>
          <div class="rw">
          {/* <div>
	      <label for="lname" class="lbl">Email Id</label>
          </div> */}
		  <input type="text" id="inpt" name="Email Id" placeholder="Email Id.."/>
	      </div>
          <div class="rw">
		  {/* <div>
              <label for="" class="lbl">Password</label>
          </div> */}
		  <input type="text" id="inpt" name="Password" placeholder="Password.."/>
          </div>
		  
		  <input id="smt" type="submit"  value="Login"/>
		</form>
         <div class="lgcol">
			 <img id="lgimg" src="https://images.unsplash.com/photo-1570691079236-4bca6c45d440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt=""/>
		 </div>
		</div>
		<p id="sglg"><a id="lg"href="signup">Register</a> if already not registered</p>
		<p id="sglg"><Link id="lg" to='/home'>Back To Home Page</Link> </p>
	  </div>
    )
}

export default Login
