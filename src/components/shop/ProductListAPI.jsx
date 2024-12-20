import React, { Component } from 'react'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import axios from 'axios'

export class ProductListAPI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allCycles: []
        }
    }
    componentDidMount() {
        axios.get("https://bicycle-api.onrender.com/products")
            .then(response => {
                this.setState({
                    allCycles: response.data
                })
            }
            )
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {this.state.allCycles.map((product) => (
                            <Col key={product.id} xs={12} sm={6} md={4} lg={3} style={{ paddingBottom: '3%' }}>
                                <Card style={{ width: '20rem', height: '36rem' }}>
                                    <Card.Img variant="top" src={product.image} style={{ width: '18rem', height: '36rem' }} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>Price: ${product.price}</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ProductListAPI
