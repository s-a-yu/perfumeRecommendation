import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/images/img1.jpg';

function AppAbout() {

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>At Aura, we believe fragrance is personal. Our quiz helps you discover scents that speak to who you are, all while offering new recommendations that adapt with you!</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;