import React from 'react';
import { Button } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
}

function GoogleLoginButton() {
    return (
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            render={renderProps => (
                <Button className='btn-block' variant="google-red" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</Button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}

export default GoogleLoginButton;