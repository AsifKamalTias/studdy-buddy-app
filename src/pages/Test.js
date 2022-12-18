import {useState, useEffect} from 'react';
import axios from 'axios';
const Test = () => 
{
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        axios
            .get('https://localhost:44388/api/admin/admins')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const addAdmin = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            username: username,
            password: password
        };
        axios
            .post('https://localhost:44388/api/admin/add', data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
        <form onSubmit={addAdmin} method="POST">
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    );
}
export default Test;
