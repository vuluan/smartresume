import React from 'react'
import { Button, Form, Col } from 'react-bootstrap';
function ResumeSearch() {
    return (
        <div>
            <Form className='float-left'>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label for="inlineFormInput" srOnly>Title</Form.Label>
                        <Form.Control
                            size="sm"
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Search"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button size="sm" type="submit" className="mb-2">Search</Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default ResumeSearch
