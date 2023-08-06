import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="box-shadow-md">Original Housewives</h1>
      <Card style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img
          variant="top"g
          src="https://static.onecms.io/wp-content/uploads/sites/6/2020/09/17/GettyImages-1179956844.jpg"
        />
        <Card.Body className="text-center">
          <Card.Title className="text-color">"Nene Leakes"</Card.Title>
          <Card.Text className="text-color">
            Nene was one of the housewives that premiered in the first season on Real Housewives of Atlanta.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToUSBjKvrEE9UIK8wBheleuRamQAoRziVTAA&usqp=CAU"
        />
        <Card.Body className="text-center">
          <Card.Title className="text-color">"Lisa Vanderpump"</Card.Title>
          <Card.Text className="text-color">
            Lisa Vanderpump premiered the Real Housewives of Beverly in 2011. She was the first housewive to feature her dogs, and businesses in almost every scene"
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img
          variant="top"

        />
        <Card.Body className="text-center">
         
        </Card.Body>
      </Card>
      <Card style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://media.glamour.com/photos/56957fe8085ae0a85036f696/master/w_1600%2Cc_limit/entertainment-2015-04-bethenny-frankel-rhony-main.jpg"
        />
        <Card.Body className="text-center">
          <Card.Title className="text-color">"Bethenny Frankel"</Card.Title>
          <Card.Text className="text-color">
            Bethenny Frankel was one of the housewives when season one of the Real Housewives of New York premired.
          </Card.Text>
        </Card.Body>
        <br></br>
        <br></br>
        <br></br>
      </Card>
    </div>
  );
};

export default About;

