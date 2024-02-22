import { useEffect, useState } from "react";

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

function Usuarios() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
        .then(data => setUsers(data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Usuarios</h1>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Usuarios;