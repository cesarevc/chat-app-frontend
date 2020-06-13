import React, { useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
// components
import Message from '../Message/Message';
// styles 
import './MessagesBox.css'

function MessagesBox ({ messages, name }) {


    useEffect(() => {
        
        hndlmsgs(messages)
    },[messages]);

    const hndlmsgs = (messages) => {
        return (
            <ScrollToBottom className="messages">
                {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
            </ScrollToBottom>
        )
    }
    
    return hndlmsgs(messages)
        
    
}

export default MessagesBox;