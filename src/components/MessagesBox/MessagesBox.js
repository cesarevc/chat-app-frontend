import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
// components
import Message from '../Message/Message';
// styles 
import './MessagesBox.css'

function MessagesBox ({ messages, name }) {
    
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrollToBottom>
    )   
}

export default MessagesBox;