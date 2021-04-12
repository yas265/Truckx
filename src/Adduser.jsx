import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Adduser = () =>{

    let history = useHistory();

    const [user, setUser] = useState({
        email: "",
        first_name: "",
        last_name: "",
        avatar: ""
    });

    const {email, first_name, last_name, avatar} = user;

    const onInputChange = e =>{
        setUser({...user, [e.target.name]:e.target.value});
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post('https://reqres.in/api/users', user);
        history.push('/');
    };
    return(
        <>
        <h1 className="heading">Add User</h1>
        <div className="form1">
            <form onSubmit={e => onSubmit(e)}>
                <input type="text" placeholder="your name" name="first_name" value={first_name} onChange ={e=> onInputChange(e)} /><br/>
                <input type="text" placeholder="your last name" name="last_name" value={last_name} onChange ={e=> onInputChange(e)} /><br/>
                <input type="email" placeholder="email" name="email" value={email} onChange ={e=> onInputChange(e)} /><br/>
                <input type="text" placeholder="img url" name="avatar" value={avatar} onChange ={e=> onInputChange(e)} /><br/>
                <button className="add_user_btn">Add user</button>
            </form>
        </div>
        </>
    );

};


export default Adduser;