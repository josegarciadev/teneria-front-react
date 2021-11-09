import React from 'react'
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap'

const UserLayout = () => {
    return (
        <div>
            <Row>
                <Col>
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0 text-center">
                        Bienvenido Usuario
                    </CardTitle>
                    <CardBody>
                        <p>
                        En este panel podras registrar, ver e imprimir la información de la entrada y salida de los empleados y lineas
                        </p>

                        <p>
                            Si deseas cambiar algún dato de tu cuenta por favor contacta a los administradores
                        </p>

                        <p className='text-bold'>
                            Teneria rubio, Siempre Contigo.
                        </p>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            
        </div>
    )
}

export default UserLayout
