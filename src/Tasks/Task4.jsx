import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export function Task4() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        Axios.get("https://dummyjson.com/users")
            .then((res) => {
                if (res.status === 200) {
                    setUserData(res.data.users);
                    console.log(res.data.users);
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => { alert(err) })
    }, [])

    const headingStyle = {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#FFF',
        padding: "10px"
    };

    const subheadingStyle = {
        fontSize: '24px',
        color: '#FFF',
        padding: "10px"
    };

    return (
        <div className='bg-dark' style={{ color: "#FFF" }}>
            <h1 style={headingStyle}>Arvind Royam</h1>
            <h2 style={subheadingStyle}>21BCI0027</h2>

            <h1 style={{color: "#FFF"}}>Dummy Data</h1>

            <table className='text-light'>
                <tr>
                    <th>Sno</th>
                    <th>Profile Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </tr>
                {userData.map((user) => (
                    <tr>
                        <td>{user.id}</td>
                        <td><img src={user.image} alt={user.id} style={{ width: "50px" }}></img></td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.domain}</td>
                        <td>{user.ip}</td>
                        <td>{user.university}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
