import React from 'react';
// styles
import './InputBox.css'


function InputBox ({ message, sendMessage, setMessage}) {

    return (
        <form className="form">
            <input 
                className="input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                onChange={e => setMessage(e.target.value)}
            />
            <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}



export default InputBox;