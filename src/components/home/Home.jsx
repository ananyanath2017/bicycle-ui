import React, { useState } from 'react'
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

function Home() {
  const [an, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleBook = () => {
    setShow(false);
    alert('Your appointment is booked')
  }
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container>
        <Row>
          <Col><img src={Heading}></img></Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" className='button' onClick={handleShow}>
              Book A Test Ride
            </Button>
            <Modal show={an} onHide={handleClose}>
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
                <Button variant="secondary" className='cancel-button' onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" className='booked-button' onClick={handleBook}>
                  Booked
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={Cycle} className='cycle'></img>
            {/* <img src={Cycle} width="1519px" height="851px"></img> */}
          </Col>
        </Row>
      </Container>

    </div >
  )
}

export default Home
