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
    const [users, setUsers] = useState('');

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const ENDPOINT = 'localhost:5000';

    
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        socket.emit('join', { name, room }, ( error ) => {
            if(error) {
                alert(error);
            }
        });
        
        socket.on('initial-message', (mssg) =>{
            messages.push(mssg);
            // setMessages([...messages, mssg]);
        });
        
        socket.on("room-data", ({ users }) => {
            setUsers(users);
        });
        
        setName(name);
        setRoom(room);

        console.log("ENDPOINT LOCATION")
    }, [ENDPOINT, location.search]);


    useEffect(() => {
        socket.on('new-message', (mssg) => {
            messages.push(mssg)
            
        }
        // messages.push(mssg)
        // setMessages([...messages, mssg])
        );
        
        console.log('si se ejecuto perrote')
    },[]);



    


    const sendMessage = (e) => {
        e.preventDefault();

        if(message) {
            socket.emit('new-message', message, () => setMessage(''));            
            // socket.on('message', (mssg) => messages.push(mssg))
            
        }
    }
    
    // console.log("message", message);
    console.log("messages", messages);


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