import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// styles 
import './Login.css';

function Login () {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="OuterContainer">
            <div className="InnerContainer"> 
                <h1 className="heading">WELCOME</h1>

                <h3 className="title">What is your nick name?</h3>
                <div>
                    <input 
                        placeholder="" 
                        className="loginInput" 
                        type="text" 
                        onChange={(e) => setName(e.target.value)} 
                        maxlength="17"
                    />
                </div>

                <h3 className="title">Room's name?</h3>
                <div>
                    <input 
                        placeholder="" 
                        className="loginInput" 
                        type="text" 
                        onChange={(e) => setRoom(e.target.value)} 
                        maxlength="17"
                    />
                </div>

                <Link 
                    onClick={e => (!name || !room) ? e.preventDefault() : null} 
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button className="button mt-50" type="submit">Sign In</button>
                </Link>

            </div>
        </div>
    );
}

export default Login;