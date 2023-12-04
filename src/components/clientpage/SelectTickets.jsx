import Panda from '../../img/panda.jpeg';
import Adultos from '../../img/adultos.jpeg';
import Delfines from '../../img/delfines.jpeg';
import Estudiantes from '../../img/estudiantes.jpeg';
import Canguro from '../../img/canguro.png';
import Oferta from '../../img/gran-venta.png';
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useState } from 'react';
import Offers from './Offers';

const SelectTickets = () => {

    const [individual, setIndividual] = useState(0)
    const [individualTotal, setIndividualTotal] = useState(0.00)

    const handleIndividual = (quantity) => {
        setIndividual(quantity)
        var total = quantity * 10
        setIndividualTotal(total)
        setTotal(total + elderlyTotal + childTotal + studentTotal)
    }

    const [elderly, setElderly] = useState(0)
    const [elderlyTotal, setElderlyTotal] = useState(0.00)

    const handleElderly = (quantity) => {
        setElderly(quantity)
        var total = quantity * 30
        setElderlyTotal(total)
        setTotal(individualTotal + total + childTotal + studentTotal)
    }

    const [child, setChild] = useState(0)
    const [childTotal, setChildTotal] = useState(0.00)

    const handleChild = (quantity) => {
        setChild(quantity)
        var total = quantity * 40
        setChildTotal(total)
        setTotal(individualTotal + elderlyTotal + total + studentTotal)
    }

    const [student, setStudent] = useState(0)
    const [studentTotal, setStudentTotal] = useState(0.00)

    const handleStudent = (quantity) => {
        setStudent(quantity)
        var total = quantity * 50
        setStudentTotal(total)
        setTotal(individualTotal + elderlyTotal + childTotal + total)
    }

    const [total, setTotal] = useState(0)

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <Container fluid className='d-flex p-0'>
            <Offers show={show} handleClose={handleClose} />
            <Container className='mt-3 px-5' style={{ width: '70%' }}>
                <div className='d-flex align-items-center mb-3'>
                    <h1 className='fw-semibold mb-0 me-auto'>Comprar entradas</h1>
                    <Button size='lg' variant='dark' className='d-flex align-items-center rounded-5' onClick={handleShow}>
                        <img src={Oferta} alt='Oferta' className='me-2' width={30} />
                        Ver ofertas
                    </Button>
                </div>
                <h5 className='fw-medium mb-3'>¿Quieres pasar un día único aprendiendo todo sobre los animales?</h5>
                <p>Tu decides la aventura y nosotros la hacemos posible en ZOO</p>
                <Row xs={1} md={1} lg={2} className='g-4'>
                    <Col>
                        <div className='ticket-card'>
                            <img src={Panda} alt='Entrada individual' />
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-auto'>Entrada individual</h6>
                                <Button size='sm' variant='success'>
                                    Saber más
                                </Button>
                            </div>
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-2'>Cantidad</h6>
                                <Form.Control className='me-auto' type='number' size='sm' value={individual} onChange={(e) => handleIndividual(e.target.value)} />
                                <h6 className='mb-0 me-2'>Total: $</h6>
                                <p className='mb-0'>{individualTotal}</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='ticket-card'>
                            <img src={Adultos} alt='Entrada adultos mayores' />
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-auto'>Entrada adultos mayores</h6>
                                <Button size='sm' variant='success'>
                                    Saber más
                                </Button>
                            </div>
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-2'>Cantidad</h6>
                                <Form.Control className='me-auto' type='number' size='sm' value={elderly} onChange={(e) => handleElderly(e.target.value)} />
                                <h6 className='mb-0 me-2'>Total: $</h6>
                                <p className='mb-0'>{elderlyTotal}</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='ticket-card'>
                            <img src={Delfines} alt='Entrada infantil' />
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-auto'>Entrada infantil</h6>
                                <Button size='sm' variant='success'>
                                    Saber más
                                </Button>
                            </div>
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-2'>Cantidad</h6>
                                <Form.Control className='me-auto' type='number' size='sm' value={child} onChange={(e) => handleChild(e.target.value)} />
                                <h6 className='mb-0 me-2'>Total: $</h6>
                                <p className='mb-0'>{childTotal}</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='ticket-card'>
                            <img src={Estudiantes} alt='Entrada estudiantes' />
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-auto'>Entrada estudiantil</h6>
                                <Button size='sm' variant='success'>
                                    Saber más
                                </Button>
                            </div>
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-2'>Cantidad</h6>
                                <Form.Control className='me-auto' type='number' size='sm' value={student} onChange={(e) => handleStudent(e.target.value)} />
                                <h6 className='mb-0 me-2'>Total: $</h6>
                                <p className='mb-0'>{studentTotal}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='shop-sidebar p-0'>
                <div className='d-flex alignt-items-center px-3 pt-3'>
                    <img src={Canguro} alt='Bolsa de compra' width={40} />
                    <h5 className='fw-medium m-0 ms-3 align-self-center'>Bolsa de compra</h5>
                </div>
                <hr />
                <Container className='px-5'>
                    {total > 0 ? (
                        <>
                            {individual > 0 ? (
                                <div className='mb-4'>
                                    <h5>Entradas individuales</h5>
                                    <div className='d-flex align-items-center ps-2'>
                                        <h6 className='mb-0 me-2'>Cantidad:</h6>
                                        <p className='mb-0 me-auto'>{individual}</p>
                                        <h6 className='mb-0 me-2'>Total: $</h6>
                                        <p className='mb-0'>{individualTotal}</p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            {elderly > 0 ? (
                                <div className='mb-4'>
                                    <h5>Entradas adultos mayores</h5>
                                    <div className='d-flex align-items-center ps-2'>
                                        <h6 className='mb-0 me-2'>Cantidad:</h6>
                                        <p className='mb-0 me-auto'>{elderly}</p>
                                        <h6 className='mb-0 me-2'>Total: $</h6>
                                        <p className='mb-0'>{elderlyTotal}</p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            {child > 0 ? (
                                <div className='mb-4'>
                                    <h5>Entradas infantiles</h5>
                                    <div className='d-flex align-items-center ps-2'>
                                        <h6 className='mb-0 me-2'>Cantidad:</h6>
                                        <p className='mb-0 me-auto'>{child}</p>
                                        <h6 className='mb-0 me-2'>Total: $</h6>
                                        <p className='mb-0'>{childTotal}</p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            {student > 0 ? (
                                <div className='mb-4'>
                                    <h5>Entradas estudiantes</h5>
                                    <div className='d-flex align-items-center ps-2'>
                                        <h6 className='mb-0 me-2'>Cantidad:</h6>
                                        <p className='mb-0 me-auto'>{student}</p>
                                        <h6 className='mb-0 me-2'>Total: $</h6>
                                        <p className='mb-0'>{studentTotal}</p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                        </>
                    ) : (
                        <h4 className='text-center my-5' style={{ color: '#474747' }}>No se han seleccionado entradas.</h4>
                    )}
                    <hr />
                    <div className='d-flex justify-content-end align-items-center mb-3'>
                        <h5 className='me-2 mb-0'>Total: $</h5>
                        <p className='mb-0 h5 fw-normal'>{total}</p>
                    </div>
                </Container>
                <hr className='my-5' />
                <div className='d-flex align-items-end'>
                    <Button variant='success' className='ms-auto me-3'>Continuar con la compra</Button>
                </div>
            </Container>
        </Container>
    )
}

export default SelectTickets