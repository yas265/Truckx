import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () =>{

    let history = useHistory();
    const { key } = useParams();


    const [user, setUser] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        avatar: ""
    });

    const {id, first_name, last_name, email, avatar} = user;

    const onInputChange = e =>{
        setUser({...user, [e.target.name]: e.target.value});
    };



    useEffect(() => {
        loadUser();
      }, []);
    
      const loadUser = async () => {
        const result = await axios.get(`https://reqres.in/api/users/${ key }` );
        setUser(result.data);
        console.log(result.data);
      };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`https://reqres.in/api/users/${ key }`, user);
        history.push('/');
    };


    return(
        <>
        <h1 className="heading">Update User</h1>
        <div className="form1">
            <form onSubmit={e => onSubmit(e)}>
                <input type="text" placeholder="your first name" name="first_name" value={user.first_name} onChange ={e=> onInputChange(e)} /><br/>
                <input type="text" placeholder="your last name" name="last_name" value={user.last_name} onChange ={e=> onInputChange(e)} /><br/>
                <input type="email" placeholder="email" name="email" value={user.email} onChange ={e=> onInputChange(e)} /><br/>
                <input type="text" placeholder="img url" name="avatar" value={user.avatar} onChange ={e=> onInputChange(e)} /><br/>
                <button className="add_user_btn">Update</button>
            </form>
        </div>
        </>
    );

};


export default Edit;