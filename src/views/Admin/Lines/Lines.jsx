import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import ModalCreateLine from "../../../components/Admin/Line/ModalCreateLine";
import TableListLine from "../../../components/Admin/Line/TableListLine";
import ButtonExport from "../../../components/ButtonExport/ButtonExport";
import { getDeparments,selectDeparments } from "../../../feactures/Departments/DepartmentsSlice";
import { getLines,selectLines} from "../../../feactures/Lines/Lines";


const Lines = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectLines)
    const deps = useSelector(selectDeparments)
  const handleDispatch = () => {
    dispatch(getLines());
    dispatch(getDeparments());
  };
  useEffect(() => {
    handleDispatch();
  }, []);
    return (
        <div>
             <Row>
        <Col xs="12">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0 text-center">
              <i className="mdi mdi-priority-high mr-2"> </i>
              Lineas
            </CardTitle>
            <CardBody>
              <div className="py-2 d-flex justify-content-between">
                <ModalCreateLine handleDispatch={handleDispatch}  departments={deps}/>
                <ButtonExport url='http://127.0.0.1:8000/api/v1/PDF/linesPdf' />
              </div>

              <TableListLine handleDispatch={handleDispatch}  departments={deps} lines={data} />
            </CardBody>
          </Card>
        </Col>
      </Row>
        </div>
    )
}

export default Lines
