import React, { useState } from 'react'
import './MsgInput.scss'

// ###
import { connect } from 'react-redux'
import { sendMessage } from '../redux/actions'

import { firebase, auth } from '../app/firebaseApp'
import { useAuthState } from 'react-firebase-hooks/auth'
// ###


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'




function MsgInput({ sendMessage }) {
    const [input, setInput] = useState('')
    const [user] = useAuthState(auth)

    const handleSubmit = e => {
        e.preventDefault()
        const mockMsg = {
            displayName: user.displayName,
            msg: input,
            senderId: user.uid,
            timeSent: firebase.firestore.FieldValue.serverTimestamp()
        }
        sendMessage(mockMsg)
        setInput('')
    }

    return (
        <form onSubmit={e => handleSubmit(e)} id="msg-form">
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type message..."
            />
            <button>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
    )
}

const mapStateToProps = dispatch => ({
    sendMessage: msg => dispatch(sendMessage(msg))
})

export default connect(null, mapStateToProps)(MsgInput)
