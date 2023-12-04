import ClientInformation from './ClientInformation';
import SelectTickets from './SelectTickets';
import { useState } from 'react';

const ClientInterface = () => {

    const [step, setStep] = useState(1)

    const handleNext = () => {
        setStep(step + 1)
    }

    const handlePrev = () => {
        setStep(step - 1)
    }

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

    return (
        <>
            {step === 1 && <SelectTickets
                individual={individual}
                handleIndividual={handleIndividual}
                individualTotal={individualTotal}
                elderly={elderly}
                handleElderly={handleElderly}
                elderlyTotal={elderlyTotal}
                child={child}
                handleChild={handleChild}
                childTotal={childTotal}
                student={student}
                handleStudent={handleStudent}
                studentTotal={studentTotal}
                total={total}
                handleNext={handleNext}
            />}
            {step === 2 && <ClientInformation
                individual={individual}
                individualTotal={individualTotal}
                elderly={elderly}
                elderlyTotal={elderlyTotal}
                child={child}
                childTotal={childTotal}
                student={student}
                studentTotal={studentTotal}
                total={total}
                handlePrev={handlePrev}
            />}
        </>
    )
}

export default ClientInterface