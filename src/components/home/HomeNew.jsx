import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from './Heading.jpg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Calendar from 'react-calendar';
import Cycle from './r.png';
import './Style.css';
import 'react-calendar/dist/Calendar.css';

export default class HomeNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      date: "",
      an: false,
    }
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }
  handleClose = () => {
    this.setState({
      an: false
    })
  };
  handleBook = () => {
    this.handleClose()
    // alert('Your appointment is booked')
  }
  handleShow = () => {
    this.setState({
      an: true
    })
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col><img src={Heading}></img></Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" className='button' onClick={this.handleShow()}>
                Book A Test Ride
              </Button>
              <Modal show={this.state.an} onHide={this.handleClose()}>
                <Modal.Header closeButton>
                  <Modal.Title>Do you want to book it?</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalbody'>
                  Woohoo, your booking is completed!
                  <div className='my-cal'>
                    <Calendar />
                  </div>

                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" className='cancel-button' onClick={this.handleClose()}>
                    Cancel
                  </Button>
                  <Button variant="primary" className='booked-button' onClick={this.handleBook()}>
                    Booked
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
          <Row> <input type="text" value={this.state.name} onChange={this.handleChange} />
            <h1> Name : {this.state.name}</h1>
            <h1> Email : {this.state.email} </h1></Row>

          <Row>
            <Col>
              <img src={Cycle} className='cycle'></img>
              {/* <img src={Cycle} width="1519px" height="851px"></img> */}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
