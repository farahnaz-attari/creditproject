import React,{useState} from 'react';
import Cards from 'react-credit-cards';
import validation from '../validation';
import { Button, Form, Row, Col, Container, Alert} from "react-bootstrap";
// import axios from "axios"; 
import "./CreditCardForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-credit-cards/es/styles-compiled.css';

//For Database
// axios.create({
//   baseURL: `http://jsonplaceholder.typicode.com/`
// });

function CreditForm() {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const [errors, setErrors] = useState({});
    const mystyle = {
      backgroundColor: "white",
      border: "none" ,
      fontSize:"15px",
    };
    
    const handleSubmit = e => {
      e.preventDefault()
      setErrors(validation(number,name,expiry,cvc));
      //POST REQUEST
      // const user = {
      //   name,
      //   number,
      //   expiry,
      //   cvc
      // }
      // console.log(user)
      // axios.post('https://jsonplaceholder.typicode.com/users', { user })
      // .then(res=>{
      //   console.log(res);
      //   console.log(res.data);
      //   window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      // })
      // console.log(user)
  };
   
  //creating Form
    return (
      <div>
     <Container>
        <div id="outerWrap">
            <div className="pt-5" id="layer1">
            <Cards
             number={number}
             name={name}
             expiry={expiry}
             cvc={cvc}
             focused = {focus}
          />
            </div>
          <div className="formDiv" id="layer2">
          <Form  onSubmit={handleSubmit}>
          <Form.Label column="sm">Card Name</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                size="sm"
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={name}
                onChange={e=> setName(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
              />
            </Form.Group>
            <Form.Label column="sm">Card Number</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                size="sm"
                type="number"
                id="number"
                name="number"
                placeholder="Number"
                value={number}
                onChange={e=> setNumber(e.target.value)}
                onFocus = {e => setFocus(e.target.name)}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                <Form.Label column="sm">Card Type</Form.Label>
                  <Form.Control
                     size="sm"
                    type="text"
                    name="cardType"
                    id="cardType"
                    placeholder="Card Type"
                   
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                <Form.Label column="sm">Expiration Date</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    id="expiry"
                    name="expiry"
                    placeholder="00/00"
                    value={expiry}
                    onChange={e=> setExpiry(e.target.value)}
                    onFocus = {e => setFocus(e.target.name)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                <Form.Label column="sm">Security Code</Form.Label>
                  <Form.Control
                   size="sm"
                    type="number"
                    id="cvc"
                    name="cvc"
                    placeholder="Security"
                    value={cvc}
                    onChange={e=> setCvc(e.target.value)}
                    onFocus = {e => setFocus(e.target.name)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                <Form.Label column="sm">Postal Code</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    id="cardPostal"
                    name="cardPostalCode"
                    placeholder="Postal"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Alert
            style={mystyle}
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>
            <div className="d-grid">
               <Button
              size={"block"}
              id="validateButton"
              type="submit"
                >
              Submit
            </Button>
            </div>
          </Form>
          </div>
        </div>
      </Container>
      </div>
      
    );

  }
  

  export default CreditForm;
