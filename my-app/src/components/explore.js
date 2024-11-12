import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.byredo.com/us_en/gypsy-water-eau-de-parfum-50ml',
    image: '/src/assets/images/perfume1.jpg',
    title: 'Gypsy Water',
    subtitle: 'Byredo'
  },
  {
    id: 2,
    link: 'https://www.valentino-beauty.us/fragrances/fragrances-men/born-in-roma-uomo-intense/born-in-roma-uomo-eau-de-parfum-intense-MPL01907.html',
    image: '/src/assets/images/perfume2.jpg',
    title: 'Born in Roma Intense',
    subtitle: 'Valentino'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: '/src/assets/images/perfume3.jpg',
    title: 'Forte pour Femme',
    subtitle: 'Unknown'
  },
  {
    id: 4,
    link: 'https://phlur.com/products/vanilla-skin-body-mist?srsltid=AfmBOooyXJQsuAzehexkqvZXcIUWv-wAHbiHRiI-pJyqzqjg-qpuOAmI',
    image: '/src/assets/images/perfume4.jpg',
    title: 'Vanilla Skin',
    subtitle: 'Phlur'
  },
  {
    id: 5,
    link: 'https://www.chanel.com/us/fragrance/p/107360/bleu-de-chanel-eau-de-parfum-spray/',
    image: '/src/assets/images/perfume5.jpg',
    title: 'Bleu',
    subtitle: 'Chanel'
  },
  {
    id: 6,
    link: 'https://www.giorgioarmanibeauty-usa.com/fragrances/womens-perfume/acqua-di-gioia/acqua-di-gioia-eau-de-parfum/A378.html?srsltid=AfmBOorgqU0CJKF4yosT4jjIh_JivOqS-NU2tO4GQ3Zg9RBF1MWascd_',
    image: '/src/assets/images/perfume6.jpg',
    title: 'Acqua Di Gioia',
    subtitle: 'Giorgio Armani'
  },
  {
    id: 7,
    link: 'https://www.valentino-beauty.us/fragrances/fragrances-women/fragrances-women-born-in-roma/donna-born-in-roma-eau-de-parfum-MPL00468.html',
    image: '/src/assets/images/perfume7.jpg',
    title: 'Born in Roma Donna',
    subtitle: 'Valentino'
  },
  {
    id: 8,
    link: 'https://us.parfums-de-marly.com/products/delina',
    image: '/src/assets/images/perfume8.jpg',
    title: 'Delina',
    subtitle: 'Parfums de Marly Paris'
  },
  {
    id: 9,
    link: 'https://www.chanel.com/us/fragrance/p/126550/chance-eau-vive-eau-de-toilette-spray/',
    image: '/src/assets/images/perfume9.jpg',
    title: 'Chance',
    subtitle: 'Chanel'
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