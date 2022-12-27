import React from "react";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
export default function ListGroupExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <ListGroup varianr="flus">
        <ListGroup.Item>Cras jsto odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
