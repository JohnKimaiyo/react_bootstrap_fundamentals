import React from "react";
import Card from "react-bootstrap/Card";
export default function TextExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Subtitle>Card Title</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      </Card.Body>
      <Card.Tetx>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Tetx>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card>
  );
}
