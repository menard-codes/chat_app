import React from 'react'

function Message({ isOwn, msg }) {
    return (
        <>
            {!isOwn && <span>Menard</span>}
            <p className={isOwn ? 'own' : 'friend'}>
                {msg}
            </p>
        </>
    )
}

export default Message
