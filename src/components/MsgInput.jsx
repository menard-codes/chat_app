import React from 'react'
import './MsgInput.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'




function MsgInput() {
    const element = <FontAwesomeIcon icon={faPaperPlane} />

    return (
        <form id="msg-form">
            <input placeholder="Type message..." />
            <button>{element}</button>
        </form>
    )
}

export default MsgInput
