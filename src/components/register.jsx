import React, {useState} from 'react';
import axios from 'axios';
function Register(){
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // async function submit(e){
    //     e.preventDefault();
    //     try{
            
    //         // const app1 = axios.post("http://localhost:8000/register",{
    //         //     email,password
    //         // })
    //         await axios.post("http://localhost:8000/register",{
    //             email:email,
    //             password:password
    //         })
    //         .then(res=>{
    //             if(res.data==="exist"){
    //                 alert("user already exists");
    //             }
    //             else {
    //                 alert("Successfully registered the user");
    //             }
    //     })
    //     }catch(e){
    //         alert("wrong details");
    //         alert(e);
    //         console.log(e);
    //     }
    // }
    // return (
    //     <div>
    //         <h1>SignUp Page</h1>
    //         <form>
    //             <input name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder='Email'></input>
    //             <input name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'></input>
    //             <button type="submit" onClick={submit}>Submit</button>
    //         </form>
    //     </div>
    // )
}
export default Register;