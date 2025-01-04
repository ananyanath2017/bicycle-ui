import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: [],
      lastName: [],
      email: [],
      text: [],
      show: false
    }
  }
  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  }
  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }
  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  }
  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1> Contact us </h1>
              <p style={{ textAlign: 'left' }}> Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.</p>
            </Col>
            <Col>
              <Row>
                <h6 style={{ textAlign: 'left' }}> FirstName: </h6>
                <input type="text" placeholder='Your firstName here' value={this.state.firstName} onChange={this.handleFirstNameChange} />
              </Row>
              <Row>
                <h6 style={{ textAlign: 'left' }}>LastName: </h6>
                <input type="text" placeholder='Your lastName here' value={this.state.lastName} onChange={this.handleLastNameChange} />
              </Row>
              <Row>
                <h6 style={{ textAlign: 'left' }}>Email: </h6>
                <input type="text" placeholder='Your email here' value={this.state.email} onChange={this.handleEmailChange} />
              </Row>
              <Row>
                <h6 style={{ textAlign: 'left' }}>What can we help you with? : </h6>
                <input type="text" placeholder='Your text here' value={this.state.text} onChange={this.handleTextChange} />
              </Row>
              <br></br>
              <Row>
                <Col>
                  <Button variant="primary" onClick={this.handleShow}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
