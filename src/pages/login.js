import { auth, firebase } from '../app/firebaseApp';
import { uiconfig } from '../config/firebaseAuth.config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useAuthState } from 'react-firebase-hooks/auth'

import Logo from '../components/Logo';
import Loading from '../components/Loading';

import './login.scss'


function Login() {
    const [_, loading, error] = useAuthState(auth)

    const authUiConfig = uiconfig(firebase);

    return (
        <div id="login-main-cont">
            {loading && <Loading isLoading={true} />}
            {error && <h1>Error: {error}</h1>}
            {(!loading && !error) && (
                <>
                    <h4>
                        Login to <span style={{fontSize: '1rem'}}><Logo /></span>
                    </h4>
                    <main>
                        <StyledFirebaseAuth uiConfig={authUiConfig} firebaseAuth={auth} />
                    </main>
                </>
            )}
        </div>
    );
}

export default Login;