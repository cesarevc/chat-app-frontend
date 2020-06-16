import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';

function TextContainer ({ users }) {

    console.log("LOS US", users)
    return (
        <div className="textContainer">
            <div>
                <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
                <h2>Built with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">🛠️</span></h2>
            </div>
            {
            users
                ? (
                <div>
                    <h3 className="greentext">People currently chatting:</h3>
                    <div className="activeContainer">
                        <h4>
                            {users.map(({name}) => <div key={name} className="activeItem">{name}<img alt="Online Icon" src={onlineIcon}/></div>)}
                        </h4>
                    </div>
                </div>
                )
                : <h1>there are no users online</h1>
            }
        </div>
    )
}

export default TextContainer;