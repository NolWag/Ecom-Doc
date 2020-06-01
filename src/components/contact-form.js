import React from 'react';
import styled from '@emotion/styled';

const Flex = styled('div')`
    display: flex;
    flex-direction: column;
    margin: 4rem 30%;
    font-family: 'Rubik';
   
   @media (max-width: 800px) {
       margin: 4rem 1rem;
   }
`
const Form = styled('form')`
    display: flex;
    flex-direction: column;
`

const SubmitBtn = styled('button')`
    margin-top: 2rem;
    border: none;
    height: 2.5rem;
    border-radius: 2rem;
    cursor: pointer;
    font-family: 'Montserrat';
    font-weight: 600;
    padding: .5rem 2rem;
    background-color: #ef4538;
    color: #fff;
    &:hover {
        background-color: #ef685e;
        transition: .4s;
    }

`

export default class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;

      return (
          <Flex>
          <p>
          Make an appointment with The Ecom Doc! Please provide as much information as possible about your Shopify store, the work to be performed or any other
          related details so we can respond quickly and efficiently. 
          </p>
        <Form
          onSubmit={this.submitForm}
          action="https://formspree.io/xgenkvel"
          method="POST"
        >
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Phone:</label>
          <input type="phone" name="phone" />
          <label>Store:</label>
          <input type="text" name="store" placeholder="yourstore.myshopify.com" />
          <label>Message:</label>
          <textarea type="text" name="message" />
          {status === "SUCCESS" ? <p>Thanks!</p> : <SubmitBtn>Submit</SubmitBtn>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </Form>
        </Flex>
      );

    }
  
    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
  }