import React,{ useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Admin = () =>{
    const [users, setUser] = useState([]);
    const getUsers = async () => {
        const response = await axios.get('https://reqres.in/api/users');
        setUser(response.data);
    }
    useEffect( () => {
        getUsers();
    }, []);

    const deleteUser = async id =>{
        await axios.delete(`https://reqres.in/api/users/${ id }`);
        loadUser();
    };

    useEffect(() => {
        loadUser();
      }, []);
    
      const loadUser = async () => {
        const result = await axios.get("https://reqres.in/api/users");
        setUser(result.data);
      };

    return(
        <>
        <h1 >My Customer</h1>
        <div>
        <Link className='add_btn' to='/add'>Add User</Link>
        <table className="admin_table">
            
            <th>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
            
            {
                
                users.data&&users.data.map((curElement) => {
                    return (
                        <tr>
                            <td>{curElement.id}</td>
                            <td>{curElement.first_name + " " +curElement.last_name}</td>
                            <td>{curElement.email}</td>
                            <td>
                            <Link className="btn" to={`/edit/${curElement.id}`}>EDIT</Link>
                            <Link className="btn" onClick={() => deleteUser(users.id)}>DELETE</Link>
                            </td>
                        </tr>
                        
                    )
                })
            }
            
            </th>

            
        </table>
        </div>
        </>
    );
};


export default Admin;