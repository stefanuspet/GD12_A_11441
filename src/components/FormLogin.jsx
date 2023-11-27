import React from 'react'
import { Form, FloatingLabel, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';


function FormLogin() {
    const navigate = useNavigate()
    const [user, setUser] = React.useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username === '' && user.password === '') {
            toast('Username dan Password tidak boleh kosong', { type: 'error' });
            return;
        } else {
            const newUser = {
                ...user,
                loginAt: new Date(),
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            toast('Login Berhasil', { type: 'success' });
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        }
    };

    return (
        <Form onSubmit={handleSubmit} style={{ maxWidth: "700px", margin: "auto" }}>
            <Alert variant='info'>
                <strong>Info!</strong> username dan password bebas, yang penting diisi.
            </Alert>
            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control type="text" placeholder="name@example.com" name="username" onChange={handleChange} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} autoComplete='off' />
            </FloatingLabel>
            <Button variant='primary' type='submit' className='mt-3 w-100'>
                Login
            </Button>
        </Form>
    )
}

export default FormLogin