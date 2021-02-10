import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const authObject = {'Project-ID': "9f290de9-29cf-4eab-a29c-726183198dd3", 'User-Name': username, 'User-Secret': password}
     try {
        await axios.get('https://api.chatengine.io/chats', {
            headers: authObject
        })
        localStorage.setItem('username', username);
        localStorage.setItem('password', password)

        window.location.reload();
     } catch (error) {
        setError('Opps, incorrect credentials')
     }
    }
    return (
        <div className="wrapper">
                <div className="form">
                    <h1 className="title">Chat Applications</h1>
                    <form onSubmit={handleSubmit}>
                        <input className="input" placeholder="Username" required type="text" value={username} onChange={(e)=> setUsername(e.target.value) } />
                        <input className="input" placeholder="Password" required type="password" value={password} onChange={(e)=> setPassword(e.target.value) } />
                    <div align="center">
                        <button type="submit" className="button"><span>Start Chatting</span></button>
                    </div>
                    </form>

                    <h2 className="error"> {error}</h2>
                </div>
        </div>
    );
};

export default LoginForm;