import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ScentQuiz() {
  return (
    <section id="scent-quiz" className="block scent-quiz-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Scent Quiz</h2>
          <div className="subtitle">find your perfect fragrance</div>
        </div>
        <Row className="justify-content-center">
          <Col md={10} lg={10}> {/* Increased width for larger screens */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeJ_IUuTygxZ0TLIRj3-etO-n_eEv9VWpa2HsKNcZN09rMPXg/viewform?embedded=true"
              width="100%"
              height="600px" // Adjusted height if needed
              title="Scent Quiz"
              style={{ border: 'none', boxShadow: 'none' }}
            >
              Loading…
            </iframe>
          </Col>
        </Row>
        <hr style={{ margin: '10px 0', borderTop: '1px solid #e6e6e6' }} />
      </Container>
    </section>
  );
}

export default ScentQuiz;
