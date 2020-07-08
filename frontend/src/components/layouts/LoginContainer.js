import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';

function LoginContainer() {
    return (
        <Container fluid>
            <Route path="/login" component={Login} />
        </Container>
    );
}

export default LoginContainer;