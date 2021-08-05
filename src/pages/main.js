import React, { useEffect } from 'react'
import Logo from '../components/Logo'
import Message from '../components/Message'
import MsgInput from '../components/MsgInput'
import Loading from '../components/Loading'

import { connect } from 'react-redux'
import { fetchMessages } from '../redux/actions'

import { auth } from '../app/firebaseApp'


function Main({ msgs, isLoading, getMsgs }) {
  useEffect(() => {
      getMsgs()
    }, [])

  return (
      <main id="container">
      <div id="banner">
        <Logo />
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>

      <div id="thread-container">
        {
          isLoading && 
          <div style={{width: '100%', height: '100%', display: 'grid', placeItems: 'center'}}>
            <Loading isLoading={isLoading} />
          </div>
        }
        <ul>
          {
            msgs.map(msg => {
              return (
                <li key={msg.timeSent}>
                  <Message isOwn={msg.senderId === auth.currentUser.uid} msg={msg.msg} />
                </li>
              )
            })
          }
        </ul>
      </div>

      <div id="msg-input-container">
        <MsgInput />
      </div>
    </main>
  )
}
const mapStateToProps = state => ({
  msgs: state.msgs,
  isLoading: state.loading
})
const mapDispatchToProps = dispatch => ({
  getMsgs: () => dispatch(fetchMessages())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
