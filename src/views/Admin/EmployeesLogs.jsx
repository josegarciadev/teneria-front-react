import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import ModalCreateEmployeesLogs from "../../components/Admin/EmployeesLogs/ModalCreateEmployeesLogs";
import TableEmployeesLogs from "../../components/Admin/EmployeesLogs/TableListEmployeesLogs";
import axiosFetch from "../../config/config";
import { getEmployees,selectEmployees } from "../../feactures/Employees/EmployeeSlice";

const EmployeesLogs = () => {
    const dispatch = useDispatch();
    const employees = useSelector(selectEmployees);
    const [getEmpl, setgetEmpl] = useState([])
    const handleDispatch = async ()=>{
        dispatch(getEmployees());
        await axiosFetch({
            method: "get",
            url: "/admin/employeeLogs/all",
            headers:{
              Authorization: 'Bearer ' + localStorage.getItem('user-token')
            }
          }).then((res) => {
            setgetEmpl(res.data)
          });
    }
    
    useEffect(() => {
        handleDispatch();
    }, [])
  return (
    <div>
      <Row>
        <Col xs="12">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0 text-center">
              <i className="mdi mdi-priority-high mr-2"> </i>
              Entrada y Salidas de lineas
            </CardTitle>
            <CardBody>
              <div className="py-2">
                {/* <ModalCreateLineLogs
                  handleDispatch={handleDispatch}
                  linesgetEmpl={linesgetEmpl}
                  employees={employees}
                /> */}

                <ModalCreateEmployeesLogs handleDispatch={handleDispatch} employees={employees} />
              </div>

                <TableEmployeesLogs handleDispatch={handleDispatch} employees={employees} empLogs={getEmpl}/>
              {/* <TableListLineLogs
                handleDispatch={handleDispatch}
                linesgetEmpl={linesgetEmpl}
                employees={employees}
                linesLogs={linesLogs}
              /> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeesLogs;
