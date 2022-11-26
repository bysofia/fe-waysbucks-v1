import { Card, Container, Row, Col } from "react-bootstrap";
import banner from "../Assets/Img/jumbotron.png";

const HomePage = () => {
    return ( 
        <Container fluid className="bg-light" style={{justifyContent: "center", marginTop: "100px", display: "flex"}} >
        <Row className="header-text d-flex align-items-center">
        <Col className="col-12 col-lg-25">
        <Card className="bg-light text-white">
        <Card.Img src={banner} alt="Card image" />
        <Card.ImgOverlay>            
          <Card.Title style={{textAlign: "left", marginTop: "100px", textJustify: "auto", display: "auto"}} >
            <h1>WAYSBUCKS</h1>
          </Card.Title>
          <Card.Text style={{display: "auto", marginTop: "auto", justifyContent: "left", textJustify: "auto"}} >          
            We have temporarily closed our in-store cafes, <br />
            but select grocery and drive-thru locations remaining open.<br />
             Waysbucks Drivers is also available          
          </Card.Text>
          <Card.Text>Let's Order...</Card.Text>
        </Card.ImgOverlay>
      </Card>
      </Col>
      </Row>
      </Container>
    );
}
 
export default HomePage;