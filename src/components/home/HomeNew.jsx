import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from './Heading.jpg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import Cycle from './r.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Style.css';


class HomeNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: '',
      rideDate: null
    };
  }

  getToday = () => {
    const today = new Date();
    return today;
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handleDateChange = (date) => {
    this.setState({ rideDate: date.toLocaleDateString() });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleBook = () => {
    const request = {
      email: this.state.email,
      date: this.state.rideDate,
    }
    const URL = "https://bicycle-api.onrender.com/rides"
    axios.post(URL, request)
    .then((res) => {
      if(res.status == 201) {
        alert('Your appointment is booked!');
        this.setState(
          {
            email: '', 
            rideDate: null,
            show: false
          }
        )
      } 
    })
    .catch(err => {
      alert(err.response.data.error);
    })
    
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    return (
      <Container>
        <Row style={{paddingBottom: '3%'}}>
          <Col>
            <img src={Heading} alt="Heading" />
          </Col>
        </Row>
        <Row style={{paddingBottom: '3%'}}>
          <Col>
            <Button variant="primary" >
              Check Test Ride Date
            </Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={this.handleShow}>
              Book A Test Ride
            </Button>
          </Col>
        </Row>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Do you want to book it?</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalbody'>
            <div style={{ paddingLeft: '10%', textAlign: 'left' }}>
              <label style={{ fontWeight: 'bold', paddingRight: '10%', textAlign: 'left' }} >Email : </label>
              <input type="text" placeholder='Your email here' value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div style={{ paddingLeft: '10%',textAlign: 'left' }}>
              <label style={{ fontWeight: 'bold', paddingRight: '2.5%', textAlign: 'left' }} >Ride date : </label>
              <DatePicker
                selected={this.state.rideDate}
                onChange={this.handleDateChange}
              />
            </div>

            <div>
              <p>{this.state.email}</p>
              <p>{this.state.rideDate}</p>

            </div>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleBook}>
              Booked
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          <Col>
            <img src={Cycle} className='cycle'></img>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeNew;