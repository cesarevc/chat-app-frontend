import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
// components
import InfoBar from '../InfoBar/InfoBar';
import InputBox from '../InputBox/InputBox';
import MessagesBox from '../MessagesBox/MessagesBox';
import TextContainer from '../TextContainer/TextContainer';
// styles
import './Chat.css';

let socket;

function Chat ({location}) {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000';

    
    useEffect(() => {

        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
    
        setRoom(room);
        setName(name)
    
        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);


    useEffect(() => {
        socket.on('message', mssg => {
          setMessages(messages => [ ...messages, mssg ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);


    const sendMessage = (e) => {
        e.preventDefault();

        if(message) {
            socket.emit('send-message', message, () => setMessage('') );            
        }
    }


    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <MessagesBox messages={messages} name={name}/>
                <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <div className="container-text" >
                <TextContainer users={users}  />
            </div>
        </div>
    );
}

export default Chat;