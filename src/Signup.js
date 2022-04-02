import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import "./style.css";
import { Link, Redirect } from "react-router-dom";
const Signup = () => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.isAuth)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addDetails = (e) => {
        e.preventDefault();
        const details = { name, email, password };
        fetch("http://localhost:8080/feed/post", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            res.json().then((data) => console.log(data))
            alert("successfully registered");

        });

    };

    return ( <
        div class = "signbox" >
        <
        h1 id = "hdl" > WELCOME TO UFIT < /h1> <h1 id="hdl"> Signup </h
        1 > { " " } <
        div class = "form" >
        <
        form class = "sgcol"
        onSubmit = { addDetails } >
        <
        div class = "rw" >
        <
        input type = "text"
        id = "inpt"
        name = "Name"
        placeholder = "Name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        />{" "} < /
        div > { " " } <
        div class = "rw" > { " " } {
            /* <div>
                        	      <label for="lname" class="lbl">Email Id</label>
                                  </div> */
        } { " " } <
        input type = "text"
        id = "inpt"
        name = "Emailid"
        placeholder = "Your Email Id.."
        required value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        />{" "} < /
        div > { " " } <
        div class = "rw" > { " " } {
            /* <div>
                                      <label for="" class="lbl">Password</label>
                                  </div> */
        } { " " } <
        input type = "text"
        id = "inpt"
        name = "lastname"
        placeholder = "Password.."
        required value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        />{" "} < /
        div > { " " } <
        div class = "rw" >
        <
        input type = "text"
        id = "inpt"
        name = "Confirmpassword"
        placeholder = "Confirm Password"
        required /
        >
        <
        /div>{" "} <
        input id = "smt"
        type = "submit"
        value = "Register" / >
        <
        /form>{" "} <
        div class = "sgcol" >
        <
        img id = "sgimg"
        src = "https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" > < /img>{" "} < /
        div > { " " } <
        /div>{" "} <
        p id = "sglg" > { " " } <
        a id = "lg"
        href = "login" > { " " }
        Login { " " } <
        /a>{" "}
        if already registered <
        /p> <
        p id = "sglg" > { " " } <
        Link id = "lg"
        to = "/home" > { " " }
        Back To Home Page { " " } <
        /Link> < /
        p > <
        /div>
    );
};

export default Signup;