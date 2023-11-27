import { Container, Row, Col } from 'react-bootstrap'
import ImageCarousel from '../components/ImageCarousel'

import imgHotel1 from '../assets/images/hotel1.jpg'
import imgHotel2 from '../assets/images/hotel2.jpg'
import imgHotel3 from '../assets/images/hotel3.jpg'
import imgFeaturette1 from '../assets/images/featurette-1.jpeg'
import imgFeaturette2 from '../assets/images/featurette-2.jpeg'


const images = [
    { img: imgHotel1, title: "first slide", description: "Nulla vitae elit libero, a pharetra augue mollis interdum." },
    { img: imgHotel2, title: "second slide", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { img: imgHotel3, title: "third slide", description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." },
]

const HomePage = () => {
    return (
        <>
            <ImageCarousel images={images} />
            <Container className='mt-5'>
                <Row>
                    <Col md={7}>
                        <h2 className='fw-normal'>
                            Hotel pertama dan satu-satunya <strong>yang fiksional</strong>.
                        </h2>
                        <p className='lead'>
                            Diciptakan oleh <strong>Stepanus Petra Pambudi</strong>, mahasiswa Universitas Atma Jaya Yogyakarta. Dari Program Studi Teknik Informatika.
                        </p>
                        <p className='lead'>
                            Nomor Pokok Mahasiswa: <strong>210711441</strong>.
                        </p>
                    </Col>
                    <Col md={5}>
                        <img src={imgFeaturette1} alt="tidak ada gambar" className="img-fluid" aria-label='Gambar featurette1' />
                    </Col>
                </Row>
                <hr className='mt-5 mb-5' />
                <Row>
                    <Col md={7} className='order-md-2'>
                        <h2 className='fw-normal'>
                            Your Comfort is key <strong>Experience the heartbeat of our hotel</strong>.
                        </h2>
                        <p className='lead'>
                            Our modern, sophisticated guest rooms are designed to exceed expectations with premium comfort, technology where you need it, and thoughtful attention to detail.
                        </p>
                    </Col>
                    <Col md={5} className='order-md-1'>
                        <img src={imgFeaturette2} alt="tidak ada gambar" className="img-fluid mx-auto rounded shadow" aria-label='Gambar featurette2' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default HomePage;