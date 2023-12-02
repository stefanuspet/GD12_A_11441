import React from 'react'
import { useState } from 'react'
import { Container, Button, Modal, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import { toast } from 'sonner';

const DaftarMenu = ({ data, setData }) => {
    const [show, setShow] = useState(false);
    const [curentIndex, setCurentIndex] = useState(0);
    const [tempValue, setTempValue] = useState({ nama: '', kategori: '', harga: '', deskripsi: '' });
    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setShow(true);
        setCurentIndex(index);
        setTempValue({
            nama: data[index].nama,
            kategori: data[index].kategori,
            harga: data[index].harga,
            deskripsi: data[index].deskripsi
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tempValue.nama === '' || tempValue.kategori === '' || tempValue.harga === '' || tempValue.deskripsi === '') {
            return toast.error('Semua form harus diisi');
        } else {
            data[curentIndex] = tempValue;
            toast.success(`Berhasil Update Data Makanan ${tempValue.nama}!`);
        }
        setTempValue({ nama: '', kategori: '', harga: '', deskripsi: '' });
        handleClose();
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setTempValue((prevTempValue) => ({
            ...prevTempValue,
            [name]: value,
        }));
    }

    const handleDelete = () => {
        toast.success(`Berhasil Menghapus Data Makanan ${data[curentIndex].nama} !`);
        setData(data.filter((_, index) => index !== curentIndex));
    }

    return (
        <Container>
            {data.map((item, index) => (
                <div key={index}>
                    <Card className="mt-3" style={{ width: "100%" }}>
                        <Card.Body className='d-flex justify-content-between align-items-center'>
                            <div style={{ width: "25%", height: "190px" }}>
                                <Card.Img variant="top" className='img-fluid rounded' style={{ width: "100%", height: "100%" }} src={item.kategori == "Main Course" ? "https://source.unsplash.com/featured/?food,main-course" : item.kategori == "Appetizers" ? "https://source.unsplash.com/featured/?food,appetizers" : "https://source.unsplash.com/featured/?food,dessert"} />
                            </div>
                            <div style={{ width: "73%" }}>
                                <Card.Title>{item.nama}</Card.Title>
                                <Card.Text>{item.deskripsi}</Card.Text>
                                <hr />
                                <div className='d-flex gap-2'>
                                    <p>Kategori: <strong>{item.kategori}</strong></p>
                                    <p>Harga: <strong>Rp {item.harga}</strong></p>
                                </div>
                                <div className='d-flex gap-3'>
                                    <Button variant='danger' className='p-2' onClick={handleDelete}>
                                        <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ffffff", paddingRight: "4px" }} />
                                        Hapus Menu
                                    </Button>
                                    <Button variant='primary' className='p-2' onClick={(e) => handleShow(index)}>
                                        <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff", paddingRight: "4px" }} />
                                        Edit Menu
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        centered
                        size='lg'
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Edit menu</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <Modal.Body>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Nama Makanan</Form.Label>
                                    <Form.Control type='text' name='nama' value={tempValue.nama} onChange={(e) => handleOnChange(e)}></Form.Control>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Kategori Makanan</Form.Label>
                                    <Form.Select name='kategori' value={tempValue.kategori} onChange={(e) => handleOnChange(e)}>
                                        <option defaultValue="">Pilih Kategori</option>
                                        <option value="Appetizers">Appetizers</option>
                                        <option value="Main Course">Main Course</option>
                                        <option value="Dessert">Dessert</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Harga Makanan</Form.Label>
                                    <Form.Control type='number' name='harga' value={tempValue.harga} onChange={(e) => handleOnChange(e)}></Form.Control>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Deskripsi Makanan</Form.Label>
                                    <Form.Control as='textarea' rows={3} name='deskripsi' value={tempValue.deskripsi} onChange={(e) => handleOnChange(e)}></Form.Control>
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Batal
                                </Button>
                                <Button variant="primary" type='submit'>
                                    <FontAwesomeIcon icon={faFloppyDisk} style={{ color: "#ffffff", paddingRight: "4px" }} />
                                    Simpan
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </div>
            ))}
        </Container>
    )
}

export default DaftarMenu