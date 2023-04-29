import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Terms and Condition</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
        quisquam laborum dolor saepe illo, sequi earum quo, quasi magnam unde
        inventore fugiat magni, aperiam consequatur! Commodi voluptates
        reiciendis odio officiis dolore incidunt cumque, temporibus enim tempore
        aspernatur odit libero possimus autem natus aliquam harum facere
        explicabo magnam, modi quos. Odit.
      </p>
      <p>Go Back to <Link to='/register'>Register</Link></p>
    </Container>
  );
};

export default Terms;
