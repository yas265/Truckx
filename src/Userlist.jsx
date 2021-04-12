import React,{ useState, useEffect } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

const Userlist = () =>{
    const [users, setUser] = useState([]);
    const getUsers = async () => {
        const response = await axios.get('https://reqres.in/api/users');
        setUser(response.data);
    }
    useEffect( () => {
        getUsers();
    }, []);


    return(
        <>
        <Link className="admin_btn" to='/admin'>Admin</Link>
        <h1 className="heading">User List</h1>
        <div className="corder">
        {
            users.data&&users.data.map((curElement) => {
                return (
                    
                    <div className="cards">
                        <div className="card">
                            <h3>{curElement.first_name}</h3>
                            <p>{curElement.email}</p>
                            <img src={curElement.avatar} />
                        </div>
                    </div>
                )
            })
        }
        </div>
        </>
    );
};


export default Userlist;