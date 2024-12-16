import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Cycle from './Cycle.jpg';
import ProductList from "./ProductList";

export default class Shop extends Component {

  constructor(props) {
    super(props)

    this.state = {
      allCycles: [
        {
          "name": "Cycle 1",
          "price": 100,
          "image": "Cycle.jpg"
        },
        {
          "name": "Cycle 2",
          "price": 200,
          "image": "Cycle2.jpg"
        },
        {
          "name": "Cycle 3",
          "price": 300,
          "image": "Cycle3.jpg"
        },
        {
          "name": "Cycle 4",
          "price": 400,
          "image": "Cycle4.jpg"
        },
        {
          "name": "Cycle 5",
          "price": 500,
          "image": "Cycle5.jpg"
        },
        {
          "name": "Cycle 6",
          "price": 100,
          "image": "Cycle6.jpg"
        },
        {
          "name": "Cycle 7",
          "price": 200,
          "image": "Cycle7.jpg"
        },
        {
          "name": "Cycle 8",
          "price": 300,
          "image": "Cycle8.jpg"
        },
        {
          "name": "Cycle 9",
          "price": 400,
          "image": "Cycle9.jpg"
        },
        {
          "name": "Cycle 10",
          "price": 500,
          "image": "Cycle10.jpg"
        },
        {
          "name": "Cycle 11",
          "price": 100,
          "image": "Cycle11.jpg"
        },
        {
          "name": "Cycle 12",
          "price": 200,
          "image": "Cycle12.jpg"
        },
        {
          "name": "Cycle 13",
          "price": 300,
          "image": "Cycle13.jpg"
        },
        {
          "name": "Cycle 14",
          "price": 400,
          "image": "Cycle14.jpg"
        },
        {
          "name": "Cycle 15",
          "price": 500,
          "image": "Cycle15.jpg"
        },{
          "name": "Cycle 16",
          "price": 100,
          "image": "Cycle16.jpg"
        },
        {
          "name": "Cycle 17",
          "price": 200,
          "image": "Cycle17.jpg"
        },
        {
          "name": "Cycle 18",
          "price": 300,
          "image": "Cycle18.jpg"
        },
        
        {
          "name": "Cycle 19",
          "price": 400,
          "image": "Cycle19.jpg"
        },{
          "name": "Cycle 20",
          "price": 400,
          "image": "Cycle20.jpg"
        },
        {
          "name": "Cycle 21",
          "price": 400,
          "image": "Cycle21.jpg"
        },
      ]
    }
  }


  render() {
    return (
      <div>
        <ProductList products={this.state.allCycles} />
        {/* <h1> This is Shop Page </h1> */}
        {/* <Container>
          <Row style={{ paddingBottom: '3%' }}>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Cycle} className="Cycle" /> <Card.Body>
                  <Card.Title>Kid's Cycle</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Price = 2650 Rs. </ListGroup.Item>
                  </ListGroup>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> */}
      </div>
    )
  }
}
