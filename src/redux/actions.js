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


// async actions (MOCK DATA)
// 1.) get messages (directly through firestore)
// 2.) send messages (via API)

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

    // NOTE: JUST A MOCK FOR NOW
    // post to api
    // on resolve, dispatch either error or success
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

/*
TODO:
    I. Set Up Firebase
    (No auth yet)
        Firestore:
            1. Firebase App
            2. Firebase Config
            3. connect this app to firebase with the redux action
                -dispatch fetching messages
                -on resolve
                    -dispatch either success or error
    II. Set Up API (via firebase admin, and save as netlify functions)
        (No Auth Yet)
        1. Check for profanity
        2. Will save or not to firestore depending on filter

        (Redux)
        1. dispatch sendMessage
        2. axios.post (connect to the API)
        3. on resolve
            -dispatch either error or success
*/
