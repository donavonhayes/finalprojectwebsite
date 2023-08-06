import React from "react";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h1 className="box-shadow-md">Original Housewives, OGS!</h1>
      <div className="d-flex flex-column align-items-center">
        <Card style={{ width: "700px", marginTop: "20px" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSpLFvYmHfX8b1y98Ru9YCk4eiipGLB__Yw&usqp=CAU"
          />
          <Card.Body className="text-center">
            <Card.Title className="text-color">Housewive OGS</Card.Title>
            <Card.Text className="text-color">
              The Real Housewives started out as a show about a group of women who are mothers, entrepreneurs, wives, and friends who navigate their complicated, drama filled and busy lives as women in the world. Raw, unfilterd, no makeup crew, just raw authentic beings. Without these women the Housewives Universe would not be what it is today.
            </Card.Text>
          </Card.Body>
          <br></br>
          <br></br>
          <br></br>
        </Card>
      </div>
    </div>
  );
};

export default Home;

