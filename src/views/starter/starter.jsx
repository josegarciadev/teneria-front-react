import React, { useState,useEffect } from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

import axiosFetch from '../../config/config';

const Starter = () => {
    const [data, setdata] = useState({})

    const handleFetch = async ()=>{
        await axiosFetch({
            method:'get',
            url:'statistics/getAll'
        }).then((res)=>{
            setdata(res.data)
        })
    }
    useEffect(() => {
        handleFetch();
    }, [])
    return (
        <div>
            
            <Row>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0 text-center"> <i class="mdi mdi-account-alert"></i> Usuarios</CardTitle>
                        <CardBody>
                            
                            <CardText className='text-center'>Cantidad: {data.users}</CardText>
                            
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0 text-center"><i class="mdi mdi-car"></i> Proveedores</CardTitle>
                        <CardBody>
                            
                            <CardText className='text-center'>Cantidad: {data.providers}</CardText>
                            
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0 text-center"><i class="mdi mdi-shopping"></i> Productos</CardTitle>
                        <CardBody>
                            
                            <CardText className='text-center'>Cantidad: {data.products}</CardText>
                            
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            <Row>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0 text-center"><i className='mdi mdi-account-key'></i> Empleados</CardTitle>
                        <CardBody>
                            
                            <CardText className='text-center'>Cantidad: {data.employees}</CardText>
                            
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0 text-center"><i className='mdi mdi-chart-line'></i> Lineas</CardTitle>
                        <CardBody>
                            
                            <CardText className='text-center'>Cantidad: {data.lines}</CardText>
                            
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0 text-center"><i className='mdi mdi-city'></i> Departamentos</CardTitle>
                        <CardBody>
                            
                            <CardText className='text-center'>Cantidad: {data.departments}</CardText>
                            
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Starter;
