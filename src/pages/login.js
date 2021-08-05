import { auth, firebase } from '../app/firebaseApp';
import { uiconfig } from '../config/firebaseAuth.config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useAuthState } from 'react-firebase-hooks/auth'

import Logo from '../components/Logo';

import './login.scss'


function Login() {
    const [user, loading, error] = useAuthState(auth)

    const authUiConfig = uiconfig(firebase);

    return (
        <div id="login-main-cont">
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error: {error}</h1>}
            {(!loading && !error) && (
                <>
                    <h4>
                        Login to <span style={{fontSize: '1rem'}}><Logo /></span>
                    </h4>
                    <main>
                        <StyledFirebaseAuth uiConfig={authUiConfig} firebaseAuth={auth} />
                        {
                            user && <h1>Redirecting...</h1>
                        }
                    </main>
                </>
            )}
        </div>
    );
}

export default Login;