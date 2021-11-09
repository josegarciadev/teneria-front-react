import React, { useState,useEffect } from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
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

    const labels = [
        'Usuarios',
        'Proveedores',
        'Productos',
        'Empleados',
        'Lineas',
        'Departamentos',
      ];

    const pieData = {
        labels: labels,
        datasets: [
          {
            label: '# of Votes',
            data:[data.users,data.providers,data.products,data.employees,data.lines,data.departments],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
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
            <Row>
                <Col xs="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0 text-center"> <i class="mdi mdi-console"></i>Data</CardTitle>
                        <CardBody>
                            
                        

                            <Doughnut data={pieData}/>
                            
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Starter;
