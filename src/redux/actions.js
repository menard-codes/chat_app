import {
    GET_MESSAGES,
    SUCCESS_GETTING_MSGS,
    ERROR_GETTING_MSGS,
    SENDING_MSG,
    ERROR_SENDING_MSG,
    SUCCESS_SENDING_MSG
} from './actionTypes'
import { firestore } from '../app/firebaseApp'


export const fetchingMessages = () => ({
    type: GET_MESSAGES
})
export const successFetching = msgs => ({
    type: SUCCESS_GETTING_MSGS,
    payload: msgs
})
export const errorFetching = error => ({
    type: ERROR_GETTING_MSGS,
    payload: error
})

export const sendingMessage = () => ({
    type: SENDING_MSG
})
export const errorSending = error => ({
    type: ERROR_SENDING_MSG,
    payload: error
})
export const successSending = msg => ({
    type: SUCCESS_SENDING_MSG,
    payload: msg
})


export const fetchMessages = () => dispatch => {
    dispatch(fetchingMessages())

    const msgsRef = firestore.collection('Messages')
    const query = msgsRef.orderBy("timeSent", "desc").limit(15)
    query.get().then(querySnapshot => {
        const msgsData = querySnapshot.docs.map(doc => doc.data()).reverse()
        dispatch(successFetching(msgsData))
    }).catch((e) => console.log(`Custome error log: ${e}`))
}

export const sendMessage = msg => dispatch => {
    dispatch(sendingMessage())

    const msgsRef = firestore.collection('Messages')

    msgsRef.add(msg).then(docRef => {

        docRef.get().then(docSnapshot => {
            const data = docSnapshot.data();
            dispatch(successSending(data))

        }).catch(e => {
            dispatch(errorSending(e))
        })
    }).catch(e => dispatch(errorSending(e)))
}

