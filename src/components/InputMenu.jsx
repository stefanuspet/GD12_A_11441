import React from 'react';
import { useState } from 'react';
import { Container, Button, Modal, Form, Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'sonner';

function InputMenu({ setData, data }) {
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState({ nama: '', kategori: '', harga: '', deskripsi: '' });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setMenu((prevMenu) => ({
            ...prevMenu,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (menu.nama === '' || menu.kategori === '' || menu.harga === '' || menu.deskripsi === '') {
            return toast.error('Semua form harus diisi');
        } else {
            setData((prevState) => [...prevState, menu]);
            toast.success(`Berhasil Tambah Data Makanan ${menu.nama}`);
        }
        setMenu({ nama: '', kategori: '', harga: '', deskripsi: '' });
        handleClose();
    };

    return (
        <Container className='mt-5'>
            <h1 className='mb-3 border-bottom fw-bold'>Daftar Menu Makanan</h1>
            <p className='mb-0'>Grand Atma Memiliki <strong>{Object.keys(data).length}</strong> daftar menu makanan yang bisa di pesan</p>
            <Button variant='success' className='p-2 mt-2' onClick={handleShow}>
                <FontAwesomeIcon icon={faSquarePlus} style={{ color: "#ffffff", paddingRight: "4px" }} />
                Tambah Menu
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tambah Menu</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nama Makanan</Form.Label>
                            <Form.Control type='text' name='nama' onChange={(e) => handleOnChange(e)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Kategori Makanan</Form.Label>
                            <Form.Select name='kategori' onChange={(e) => handleOnChange(e)}>
                                <option defaultValue="">Pilih Kategori</option>
                                <option value="Appetizers">Appetizers</option>
                                <option value="Main Course">Main Course</option>
                                <option value="Dessert">Dessert</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Harga Makanan</Form.Label>
                            <Form.Control type='number' name='harga' onChange={(e) => handleOnChange(e)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Deskripsi Makanan</Form.Label>
                            <Form.Control as='textarea' rows={3} name='deskripsi' onChange={(e) => handleOnChange(e)}></Form.Control>
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
        </Container>
    )
}

export default InputMenu