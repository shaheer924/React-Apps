import './App.css';
import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GrAddCircle } from 'react-icons/gr';
import { IoRemoveCircleOutline } from 'react-icons/io5';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [hide, sethide] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Here is The Modal
      </Button>
      <Modal size="lg" show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Revenue Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='insert_form'>
            <Form.Group>
              <Form.Label>Revenue Group Title</Form.Label>
              <Form.Control type="text" placeholder="Fashion -15%" />
              <br />
              <Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label>
                    if
                  </Form.Label>

                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Select >
                    <option value="0">ALL</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col xs="auto">
                  of the below conditions are met
                </Col>
              </Row>
              <br />
              <div className='coloured_group'>
                <Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Select >
                      <option value="0">aff_sub</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>

                  </Col>
                  <Col xs="auto" >
                    <Form.Select >
                      <option value="0">is</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Col>
                  <Col lg={6}>
                    <Form.Control type="text" placeholder="insert parameter" />
                  </Col>
                  <Col xs="auto"><Button onClick={() => sethide(true)} variant='transparent'><GrAddCircle /></Button></Col>
                  <Col xs="auto"><Button variant='transparent'><IoRemoveCircleOutline /></Button></Col>
                </Row>
                <br />
                {hide && <div className='hidden_data'> <Row className="align-items-center">
                  <Col>
                    <Form.Control type="text" placeholder="insert parameter" />
                  </Col>
                  <Col xs="auto"><Button onClick={() => sethide(false)} variant='transparent'><IoRemoveCircleOutline /></Button></Col>
                </Row> </div>}
              </div>
              <br />
              <Row className="align-items-center">
                <Col xs="auto">then revenue is</Col>
                <Col xs="auto">
                  <Form.Control type="number" placeholder="" />
                </Col>
              </Row>
              <br />
              <Row className="align-items-center">
                <Col xs="auto"><Button size="lg" variant='warning'>Confirm</Button></Col>
                <Col xs="auto"><Button size="lg" variant='secondary'>Cancel</Button></Col>

              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>

      </Modal>
    </div>
  );
}

export default App;
