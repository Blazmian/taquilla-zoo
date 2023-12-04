import { useState } from "react"
import ResumenCompra from "../../img/resumen-compra.png"
import UserData from "../../img/user-data.png"
import { Button, Container, Form, Toast, ToastContainer } from "react-bootstrap"

const ClientInformation = ({ individual, individualTotal, elderly, elderlyTotal, child, childTotal, student, studentTotal, total, handlePrev }) => {

    const [showToast, setShowToast] = useState(false)

    return (
        <Container fluid className='d-flex p-0'>
            <Container className='mt-3 px-5' style={{ width: '70%' }}>
                <div className="d-flex align-items-center mb-3">
                    <img src={UserData} width={50} alt="User data" />
                    <h1 className='fw-semibold ms-3 mb-0'>Datos del comprador</h1>
                </div>
                <hr />
                <h5 className='fw-medium mb-3'>Ingresa tus datos para continuar con la compra.</h5>
                <div className="px-5 py-4 rounded-4" style={{ backgroundColor: '#F0F0F0' }}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">Correo</Form.Label>
                            <Form.Control type="email" id="email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="phone">Número celular</Form.Label>
                            <Form.Control type="text" id="phone" />
                        </Form.Group>
                    </Form>
                </div>
            </Container>
            <Container className='shop-sidebar p-0'>
                <div className='d-flex alignt-items-center px-3 pt-3'>
                    <img src={ResumenCompra} alt='Resumen de compra' width={40} />
                    <h5 className='fw-medium m-0 ms-3 align-self-center'>Bolsa de compra</h5>
                </div>
                <hr />
                <Container className='px-5'>
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
                    <hr />
                    <div className='d-flex justify-content-end align-items-center mb-3'>
                        <h5 className='me-2 mb-0'>Total: $</h5>
                        <p className='mb-0 h5 fw-normal'>{total}</p>
                    </div>
                </Container>
                <hr className='my-5' />
                <div className='d-flex align-items-end'>
                    <ToastContainer
                        className="p-3"
                        position={'bottom-end'}
                        style={{ zIndex: 1 }}
                    >
                        <Toast autohide animation show={showToast} onClose={() => setShowToast(false)} delay={3000} style={{ backgroundColor: '#630502' }}>
                            <Toast.Header closeButton={true} style={{ backgroundColor: '#990b06' }} closeVariant='white'>
                                <strong className="me-auto fs-5 text-white">Error</strong>
                            </Toast.Header>
                            <Toast.Body className='text-white fs-6'>Debes llenar todos los campos</Toast.Body>
                        </Toast>
                    </ToastContainer>
                    <Button variant='success' className='ms-auto me-3'>Realizar pedido</Button>
                </div>
            </Container>
        </Container>
    )
}

export default ClientInformation