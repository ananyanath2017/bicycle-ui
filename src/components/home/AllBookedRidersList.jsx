import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

  export default class AllBookedRidersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riders: []
        }
    }

    componentDidMount() {
        axios.get("https://bicycle-api.onrender.com/rides")
            .then(response => {
                this.setState({
                    riders: response.data
                }
                )
            })
    }

    render() {
  return (
    <div>
      {/* {this.props.location} */}
      <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Details of the All Booked Riders</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
        {this.state.riders.map((e, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{e.email}</td>
            <td>{e.date}</td>
          </tr>
        ))}
      </tbody>
            </Table>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            {/* ))} */}
    </div>
  )
}
  }
