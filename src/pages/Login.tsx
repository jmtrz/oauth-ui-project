
import { useOidc, useOidcAccessToken } from '@axa-fr/react-oidc';

const Login = () => {

    const { login, logout, renewTokens, isAuthenticated } = useOidc();

    const { accessToken, accessTokenPayload } = useOidcAccessToken();

    return (
        <div className="container-fluid mt-3">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Welcome !!!</h5>
            <p className="card-text">
            React Demo Application protected by OpenId Connect
            </p>
            <div className="card text-white bg-info mb-3">
                <div className="card-body">
                    <h5 className="card-title">Access Token</h5>
                    <p style={{ color: "red", backgroundColor: "white" }}>
                    Please consider to configure the ServiceWorker in order to protect
                    your application from XSRF attacks. ""access_token" and
                    "refresh_token" will never be accessible from your client side
                    javascript.
                    </p>
                    {<p className="card-text">{JSON.stringify(accessToken)}</p>}
                    {accessTokenPayload != null && (
                    <p className="card-text">{JSON.stringify(accessTokenPayload)}</p>
                    )}
                </div>
            </div>
            <div style={{ display:'flex', flexDirection:"column", gap:"0.5rem", padding: '0 30%' }}>
                {!isAuthenticated && (
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => login("/profile")}
                >
                    Login
                </button>
                )}
                {isAuthenticated && (
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => logout()}
                >
                    logout
                </button>
                )}
                {isAuthenticated && (
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => renewTokens()}
                >
                    renewTokens
                </button>
                )}
            </div>
        </div>
        </div>
    </div>
    )
}

export default Login
