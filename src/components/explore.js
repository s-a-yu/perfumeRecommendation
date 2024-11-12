import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: '/src/assets/images/perfume1.jpg',
    title: 'Gypsy Water',
    subtitle: 'Byredo'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: '/src/assets/images/perfume2.jpg',
    title: 'Fragrance Name',
    subtitle: 'Brand'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: '/src/assets/images/perfume3.jpg',
    title: 'Fragrance Name',
    subtitle: 'Brand'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: '/src/assets/images/perfume4.jpg',
    title: 'Fragrance Name',
    subtitle: 'Brand'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: '/src/assets/images/perfume5.jpg',
    title: 'Fragrance Name',
    subtitle: 'Brand'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: '/src/assets/images/perfume6.jpg',
    title: 'Fragrance Name',
    subtitle: 'Brand'
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: '/src/assets/images/perfume7.jpg',
    title: 'Fragrance Name',
    subtitle: 'Brand'
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: '/src/assets/images/perfume8.jpg',
    title: 'Fragrance Name',
    subtitle: 'Brand'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: '/src/assets/images/perfume9.jpg',
    title: 'Fragrance Name',
    subtitle: 'Brand'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Explore</h2>
          <div className="subtitle"> find your perfect fragrance</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                    <div style={{ width: '400px', height: '150px', overflow: 'hidden' }}>
                      <Image
                        src={works.image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        alt={works.title}
                      />
                    </div>
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;