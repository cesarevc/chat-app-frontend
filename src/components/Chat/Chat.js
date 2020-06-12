import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
// styles
import './Chat.css';
// components
import InfoBar from '../InfoBar/InfoBar';
import InputBox from '../InputBox/InputBox';
import MessagesBox from '../MessagesBox/MessagesBox';
import TextContainer from '../TextContainer/TextContainer';

let socket;

function Chat ({location}) {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, ( error ) => {
            
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, [ENDPOINT, location.search]);


    useEffect(() => {
        socket.on('message', (message) =>{
            setMessages([...messages, message]);
        });
    }, [messages]);


    const sendMessage = (e) => {
        e.preventDefault();

        if(message) {
           socket.emit('sendMessage', message, () => setMessage('')) 
        }
    }
    
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <MessagesBox messages={messages} name={name}/>
                
                <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
                <TextContainer   />
            </div>

        </div>
    );
}

export default Chat;