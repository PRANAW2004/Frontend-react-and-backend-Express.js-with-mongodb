import React,{useState} from 'react';
import axios from 'axios';
import {redirect} from 'react-router';
import {Route,Navigate,BrowserRouter as Router,Routes} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Front(){
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useNavigate();
    async function submit(e){
        e.preventDefault();
        try{   
            await axios.post("http://localhost:8000/register",{
                username,email,password
            })
            .then(res=>{
                if(res.data === "registered"){
                    history("/dashboard");
                    alert("Registered successfully");
                }
                else if(res.data === "not registered"){
                    alert("Error Occured ! Try again Later");
                    
                }
            })
            .catch(e=>{
                alert("error occured");
                console.log(e);
            })
        }catch(err){
            alert("Some unknown error occured");
            console.log(err);
        }
    }
    return(
        <div className='whole'>
        <div className="row">
            <div className="col-lg-6">
            <img className='img1' src="images/todo.png" alt="todo-img" />
            <img className='img2' src="images/todo1.png" alt="todo1-img" />
            <img className='img3' src="images/todo2.png" alt="todo2-img" />
            <h1 className="front-h1">Manage all the tasks in one place</h1>
            </div>
            <div className="col-lg-6">
            <div className="form-area">
            <form>
                <div className='top1 col-lg-12'>
                <input type="username" className="form-control" onChange={(e)=>setUsername(e.target.value)} placeholder='Username'></input>
                </div>
                <div className="top1 col-lg-12">
                <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} placeholder='Email'></input>
                </div>
                <div className='top1 col-lg-12'>
                <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>
                </div>
                <div className="button">
                <button type="submit" className="btn btn-md btn-primary" onClick={submit}>Register</button>
                </div>
            </form>
            </div>
            <div className="google">
            <h3>OR</h3>
            <button className="btn btn-lg btn-danger">SignIn using Google</button>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Front;