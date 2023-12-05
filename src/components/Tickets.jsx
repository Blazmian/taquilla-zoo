import Resume from './Resume';
import { Button, Col, Container, Form, Row, Alert, Modal } from "react-bootstrap";
import { useState, useEffect } from 'react';

const Tickets = () => {

    const [individual, setIndividual] = useState(0) //Entrada individual
    const [individualTotal, setIndividualTotal] = useState(0.00) //Total entrada individual
    const [value, setValue] = useState(''); //Cantidad de efectivo con el que se pagó
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); //Mensaje de error
    const [change, setChange] = useState(''); //Cambio a regresar
    const [elderly, setElderly] = useState(0) //Entradas de adultos mayores
    const [elderlyTotal, setElderlyTotal] = useState(0.00) //Total de adultos mayores
    const [child, setChild] = useState(0) //Entradas de niños
    const [childTotal, setChildTotal] = useState(0.00) //Total entradas niños
    const [student, setStudent] = useState(0) //Entradas estudiantes
    const [studentTotal, setStudentTotal] = useState(0.00) //Total entradas estudiantes
    const [total, setTotal] = useState(0) //Total a pagar
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);

    const handleIndividual = (quantity) => {
        setIndividual(quantity)
        var total = quantity * 10
        setIndividualTotal(total)
        setTotal(total + elderlyTotal + childTotal + studentTotal)
    }

    const handleElderly = (quantity) => {
        setElderly(quantity)
        var total = quantity * 30
        setElderlyTotal(total)
        setTotal(individualTotal + total + childTotal + studentTotal)
    }

    const handleChild = (quantity) => {
        setChild(quantity)
        var total = quantity * 40
        setChildTotal(total)
        setTotal(individualTotal + elderlyTotal + total + studentTotal)
    }

    const handleStudent = (quantity) => {
        setStudent(quantity)
        var total = quantity * 50
        setStudentTotal(quantity * 50)
        setTotal(individualTotal + elderlyTotal + childTotal + total)
    }

    //Seleccionar la cantidad de boletos a comprar
    const renderTicketEntry = (label, quantity, total, handleChange) => (
        <div className='ticket-entry d-flex align-items-center'>
            <h6 className='mb-0 me-2'>{label}</h6>
            <div className='d-flex align-items-center ticket-quantity' style={{ marginLeft: 'auto' }}>
                <h6 className='mb-0 me-3'>Cantidad</h6>
                <Form.Control
                    className='me-4'
                    type='number'
                    size='sm'
                    value={quantity}
                    onChange={(e) => handleChange(Math.max(0, e.target.value))}
                    style={{ width: '3rem' }}
                />            </div>
        </div>
    );
    //Valida la cantidad de dinero con la que se pagará
    const handleInputChange = (e) => {
        const inputValue = parseFloat(e.target.value) >= 0 ? e.target.value : '';
        setValue(inputValue);
        setErrorMessage('');
    };
    // Verifica si estás ingresando el nombre o el apellido
    const handleVisitorData = () => {
        if (!email.trim() || !phone.trim()) {
            setErrorMessage('Por favor, ingresa el correo y el teléfono.');
            return;
        }

        if (total > 0 && total <= value) {
            setPurchaseSuccess(true);
            setShowModal(true);
        }
    };
    //Calcula el cambio a partir del total de boletos y la cantidad de dinero entregada.
    useEffect(() => {
        if (total === 0) {
            setErrorMessage('Debes seleccionar al menos un boleto antes de calcular.');
        } else {
            const result = parseFloat(value) - total;
            const change = parseFloat(value) - total;
            setChange(change);
            setErrorMessage(result >= 0 ? '' : 'La cantidad no puede ser menor al total de boletos seleccionados.');
        }
    }, [value, total]);
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email) ? '' : 'Ingresa un correo electrónico válido.';
    };

    const validatePhone = (phone) => {
        const regex = /^\d{10}$/;
        return regex.test(phone) ? '' : 'Ingresa un número de teléfono válido.';
    };
    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        setEmailError(validateEmail(inputValue));
    };

    const handlePhoneChange = (e) => {
        const inputValue = e.target.value;
        setPhone(inputValue);
        setPhoneError(validatePhone(inputValue));
    };
    const [ticketInfo, setTicketInfo] = useState(null);

    const handlePurchase = () => {
        //Obligatorio llenar los campos de nombre
        if ((!email || email.trim() === '') && (!phone || phone.trim() === '')) {
            setErrorMessage('Por favor, ingresa la información del visitante.');
            return;
        }
        //campos de dinero deben estar llenos para completar la compra
        if (total > 0 && total <= value && value > 0) {
            const newTicketInfo = {
                email,
                phone,
                total,
                value,
                individual,
                child,
                elderly,
                student,
            };
            setPurchaseSuccess(true);
            setShowModal(true);
            setTicketInfo(newTicketInfo);
            // Limpiar campos
            setEmail('');
            setPhone('');
            setValue('');
            setTotal(0);
            setChange('0');
            setIndividual('0');
            setChild('0')
            setElderly('0')
            setStudent('0')
        }

    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const ErrorMessage = ({ message, onClose }) => {
        return (

            <Alert variant='danger' className='position-fixed top-0 start-50 translate-middle-x'>
                <div className='d-flex justify-content-between align-items-center'>
                    <span>{message}</span>
                    <button type='button' className='btn-close' onClick={onClose} />
                </div>
            </Alert>
        );
    };

    return (
        <Container fluid className='d-flex p-0 px-5'>
            <Container className='mt-3 px-5' style={{ width: '50%' }}>
                <h1 className='fw-semibold mb-2 taquilla-heading'>Taquilla</h1>
                <hr className="full-width-hr" />
                <Row xs={1} md={1} lg={2} className='g-4'>
                    <Col>
                        <div className='ticket'>
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-auto'>Ingresa el nombre del visitante.</h6>
                            </div>
                            <div className='div-visitor-data mt-2 '>
                                <h6 className='mb-0' >Correo</h6>
                                <Form.Control
                                    type='text'
                                    size='sm'
                                    value={email}
                                    onChange={handleEmailChange}
                                    isInvalid={!!emailError}
                                /> {emailError && (
                                    <ErrorMessage message={emailError} onClose={() => setEmailError('')} />
                                )}
                                <h6 className='mb-0' >Teléfono</h6>
                                <Form.Control
                                    type='text'
                                    size='sm'
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    isInvalid={!!phoneError}
                                />{phoneError && (
                                    <ErrorMessage message={phoneError} onClose={() => setPhoneError('')} />
                                )}
                            </div>
                        </div>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='ticket-selection'>
                            <h6 className='ticket-heading'>Ingresa la cantidad de boletos.</h6>
                            <hr />
                            <div className='ticket-entry-container d-grid'>
                                {renderTicketEntry('Entrada individual', individual, individualTotal, handleIndividual)}
                                {renderTicketEntry('Entrada infantil', child, childTotal, handleChild)}
                                {renderTicketEntry('Entrada estudiantil', student, studentTotal, handleStudent)}
                                {renderTicketEntry('Entrada adultos mayores', elderly, elderlyTotal, handleElderly)}
                            </div>
                        </div>
                        <Container className='px-5 '>
                            {total > 0 ? (
                                <>
                                    <hr style={{ width: '20%', marginLeft: 'auto' }} />
                                    <div className='mb-1 d-flex justify-content-end'>
                                        <div className='d-flex align-items-center ps-2'>
                                            <h6 className='mb-0 me-2'>Total: $</h6>
                                            <p className='mb-0'>{total}</p>
                                        </div>
                                    </div>
                                </>
                            ) : ("")}
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container className='shop-sidebar p-0 px-5' >
                <div className='d-flex alignt-items-center px-2 pt-3'>
                    <h1 className='fw-semibold mb-0 taquilla-heading'>Pago</h1>
                </div>
                <hr className="full-width-hr" />
                <div className='ticket'>
                    <div className='mt-4 d-flex align-items-center'>
                        <h6 className='mb-0 me-auto'>Ingresa la cantidad de efectivo.</h6>
                    </div>
                    <div className='d-flex'>
                        <div className='div-payment mt-2'>

                            <label>$</label>
                            <Form.Control
                                type='text'
                                className='form-control-sm flex-grow-1 me-2'
                                value={value}
                                onChange={handleInputChange}
                                placeholder="00.00"
                            />
                        </div>
                        <Container className='px-5 '>
                            {change > 0 ? (
                                <>
                                    <div className='mb-1 d-flex justify-content-end'>
                                        <div className='d-flex align-items-center ps-2'>
                                            <h6 className='mb-1 me-2 mt-3'>Cambio: $</h6>
                                            <p className='mb-1 mt-3'>{change}</p>
                                        </div>
                                    </div>
                                </>
                            ) : ("")}
                        </Container>
                    </div>
                    {errorMessage && <Alert variant='danger' className='mt-3 me-5'>{errorMessage}</Alert>}
                </div>
                <div className='position-fixed bottom-0 end-0 p-3 px-5 py-5'>
                    <Button variant='success' onClick={handlePurchase} className="me-5">
                        Finalizar compra
                    </Button>
                </div>
                <Container fluid className='d-flex p-0'>
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>¡Compra exitosa!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>                           
                            <Resume ticketInfo={ticketInfo} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='success' onClick={handleCloseModal}>
                                Cerrar
                            </Button>
                            <Button variant='success' onClick={() => { handleCloseModal(); setTicketInfo(ticketInfo); }}>
                                Imprimir recibo
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Container>
            </Container>
        </Container>
    )
}

export default Tickets