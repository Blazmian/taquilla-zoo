import { Button, Modal } from "react-bootstrap"

const Offers = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header className="p-0 headerOffers">
            </Modal.Header>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Regresar</Button>
            </Modal.Footer>

        </Modal>
    )
}

export default Offers